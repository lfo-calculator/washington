# This script will process all the files in the RWC_html/ folder, which contains the html files for each of the Revised Washington Code sections
# The output of this script is a json file, located at json_RWC/washington_regulations_scrape.json
# Rerunning this script will overwrite the file json_RWC/washington_regulations_scrape.json 

# Currently, only sections which contain a match for at least one of the specified keywords will appear in the output 

# Sample format of json:
# [{
#         "link": "http://app.leg.wa.gov/RCW/default.aspx?cite=46.09.480",
#         "regulation": "Additional violations\u2014Penalty.",
#         "section": "46.09.480",
#         "subsections": [
#             {
#                 "charge": "GrossMisdemeanor",
#                 "section": "46.09.480.4"
#             }
#         ],
#         "text": "(1) No person may operate a nonhighway vehicle in such a way as to endanger human life.\n(2) No person shall operate a nonhighway vehicle in such a way as to run down or harass any wildlife or animal, nor carry, transport, or convey any loaded weapon in or upon, nor hunt from, any nonhighway vehicle except by permit issued by the director of fish and wildlife under RCW 77.32.237: PROVIDED, That it shall not be unlawful to carry, transport, or convey a loaded pistol in or upon a nonhighway vehicle if the person complies with the terms and conditions of chapter 9.41 RCW.\n(3) For the purposes of this section, \"hunt\" means any effort to kill, injure, capture, or purposely disturb a wild animal or bird.\n(4) Violation of this section is a gross misdemeanor.\n"
# }]

from bs4 import BeautifulSoup
import sys
import os
import re
import csv
import json

scrape_directory = 'RWC_html/'
output_directory = "json_RWC/"
output_file = "scrape_output.json"

# a hit on these keywords will produce an entry into the output JSON
keywords = ['class A felony', 'class B felony', 'class C felony', 'felony', 'gross misdemeanor', 'misdemeanor', 'unlawful', 'cost', 'fine', 'penalty']

# these keywords will tag the provision as a charge
charge_keywords = ['class A felony', 'class B felony', 'class C felony', 'felony', 'gross misdemeanor', 'misdemeanor'] 

sub_alpha = '^\([a-z]+\)'
sub_numeric = '^\([0-9]+\)'
sub_roman = '^\([ivx]+\)'
current_subsection = ''
current_subsubsection = ''
current_subsubsubsection = ''

all_the_charges = []
all_the_regulations = []

# given a string line_to_check from the provision and the_section_number, will return information about possible charges 
# return format if no charge keyword found:
#   None 
# return format if charge keyword found:
#     {
#         section: line_citation,
#         charge : [ charge_keyword_hit ]
#     }
def get_charge(line_to_check, the_section_number):
    charge = []
    if re.search('class A felony', line_to_check, re.IGNORECASE):
        charge.append('FelonyA')
    if re.search('class B felony', line_to_check, re.IGNORECASE):
        charge.append('FelonyB')
    if re.search('class C felony', line_to_check, re.IGNORECASE):
        charge.append('FelonyC')
    if not re.search('class A felony', line_to_check, re.IGNORECASE) and \
        not re.search('class B felony', line_to_check, re.IGNORECASE) and \
        not re.search('class C felony', line_to_check, re.IGNORECASE) and \
        re.search('felony', line_to_check, re.IGNORECASE):
        # possible general list - no charges
        charge.append('')
    if re.search('gross misdemeanor', line_to_check, re.IGNORECASE):
        charge.append('GrossMisdemeanor')
    if line_to_check.lower().find('misdemeanor') > -1 and line_to_check.lower().count('gross misdemeanor') != line_to_check.lower().count('misdemeanor'):
        charge.append('SimpleMisdemeanor')

    if len(charge) > 0:
        global current_subsection
        global current_subsubsection
        global current_subsubsubsection
        condition_charge = the_section_number
        if current_subsection != '':
            condition_charge = condition_charge + '(' + current_subsection + ')'
            if current_subsubsection != '':
                condition_charge = condition_charge + '(' + current_subsubsection + ')'
                if current_subsubsubsection != '':
                    condition_charge = condition_charge + '(' + current_subsubsubsection + ')'
        return { 'section' : condition_charge, 'charge' : charge }
    else:
        return None

# input the section number
# returns a list that contains all the charges in this subsection
def format_subsections(the_section_number):
    global all_the_charges
    if len(all_the_charges) == 0:
        return []
    
    return_block = []
    number_of_charges = len(all_the_charges)

    for i in range(number_of_charges):
        return_block.append(all_the_charges[i])

    all_the_charges.clear()
    return return_block

# given a string line_to_check from the provision and the_section_number, will parse the subsection & subsubsection (if applicable) and return rest of line  
def format_the_line(line_to_format, section_number):
    return_string = ''
    global current_subsection
    global current_subsubsection
    global current_subsubsubsection
    split_index = line_to_format.find(')(')
    if split_index == 2 or split_index == 3:
        really_more = [ line_to_format[:split_index + 1], line_to_format[split_index + 1:] ]
    else:
        really_more = [ line_to_format ]
                
    global all_the_charges
    
    # indent according to regex
    for split in really_more:
        split = ' '.join(split.split())

        numeric_re = re.search(sub_numeric, split)
        roman_re = re.search(sub_roman, split)
        alpha_re = re.search(sub_alpha, split)

        # print(really_more)

        if numeric_re:
            current_subsection = numeric_re.group()[1:-1]
            current_subsubsection = ''
            current_subsubsubsection = ''  
            # print("number!", current_subsection)
        elif alpha_re:
            current_subsubsection = alpha_re.group()[1:-1]
            current_subsubsubsection = ''
            split = '    ' + split
            # print("alpha!", current_subsubsection)
        elif roman_re and current_subsubsection != 'h':
            current_subsubsubsection = roman_re.group()[1:-1]
            split = '        ' + split
            # print("roman numeral!", current_subsubsubsection)
        elif roman_re and current_subsection == 'h':
            print("SOMETHING WEIRDDDD")
            print(line_to_format)

        if numeric_re and alpha_re and roman_re:
            print("funky happenings at ", line_to_format, '\n\n')

        the_charge = get_charge(split, section_number)

        # print(the_charge)
        # print(all_the_charges)
        if the_charge is not None:
            if  (len(all_the_charges) != 0 and (all_the_charges[-1]['section'] == the_charge['section'] and all_the_charges[-1]['charge'] == the_charge['charge'])):
                print("possible dupe: ", all_the_charges[-1]['section'], the_charge['section'], the_charge['charge']) 
                all_the_charges[-1]['text'] = all_the_charges[-1]['text'] + line_to_format 
            else:
                the_charge['text'] = line_to_format
                all_the_charges.append(the_charge)
        return_string = return_string + split + '\n'
    return return_string


def parse_section_text(content_wrapper):
    global current_subsection
    global current_subsubsection
    global current_subsubsubsection
    current_subsection = ''
    current_subsubsection = ''
    current_subsubsubsection = ''
    
    all_the_text = {}            
    divs = content_wrapper.find_all('div')

    # First div has RCW and section number
    rcw_number = divs[0].find('a').get_text()

    all_the_text['link'] = divs[0].find('a')['href']

    all_the_text['section'] = rcw_number
    
    the_title = divs[1].get_text()
    all_the_text['regulation'] = the_title

    # 3rd div has all the other divs with the text
    the_text = divs[2].find_all('div')

    if len(the_text) == 0:
        the_text.append(divs[2])

    if divs[1].get_text().find('(Effective') > -1:
        # then there are potentially 2 blurbs
        for i in range(2, len(divs)):
            if divs[i].get_text().find('(Effective') > -1:
                the_text.extend(divs[i + 1].find_all('div'))
                break

    # could be a div that announces change, e.g. *** CHANGE IN 2022 *** (SEE 5519.SL) ***
    if len(divs) > 2 and (len(the_text) > 0 and len(the_text[0]) > 0 and the_text[0].get_text()[0] == '*'):
        the_text.extend(divs[3])

    all_the_text['text'] = ''
    for i in range(0, len(the_text)):
        skippable = False
        possible_table = the_text[i].find_all('tr')
        if len(possible_table) > 0:
            for j in range(0, len(possible_table)):
                row_text = possible_table[j].get_text(' ', strip=True)
                formatted_line = format_the_line(row_text, rcw_number)
                all_the_text['text'] = all_the_text['text'] + formatted_line
            print('check table format for ', filename)
        else:
            # Check if parent is a tr
            for parent in the_text[i].parents:
                if parent.name == 'tr':
                    skippable = True
                    break
                if parent.id == 'contentWrapper':
                    break
            if skippable is not True:
                the_line = the_text[i].get_text()
                formatted_line = format_the_line(the_line, rcw_number)
                all_the_text ['text']= all_the_text['text'] + formatted_line

    all_the_text['subsections'] = format_subsections(rcw_number)

    all_the_text['keyword_hits'] = [x for x in keywords if x in content_wrapper.get_text()]

    return(all_the_text)

with open(os.path.join(output_directory, 'parsed_list.txt'), 'w') as file:
    with open(os.path.join(output_directory, output_file), 'w') as json_file:
        json_file.write('[\n')
        first = True
        for filename in os.listdir(scrape_directory):
            f = os.path.join(scrape_directory, filename)
            with open(f, 'rb') as section_raw_html:
                section_html = BeautifulSoup(section_raw_html, 'html.parser')

                # here we start looking for keywords - start with content wrapper
                content = section_html.find('div', id='contentWrapper')
                if content is None:
                    print('No content for ' + filename)
                    continue

                # gets all the text in the content wrapper then search for keywords
                all_the_text = content.get_text()
                #keyword_to_search_for = 'violation of this title'
                for keyword_to_search_for in keywords:
                    if all_the_text.find(keyword_to_search_for) > -1:
                        file.write(filename + '\n')
                        try:
                            section_info = parse_section_text(content)
                            section_info_string = json.dumps(section_info, indent=4, sort_keys=True)
                            if not first:
                                json_file.write(',\n')
                            else:
                                first = False
                            json_file.write(section_info_string)
                        except:
                            print('error parsing file ', filename)
                        break
        json_file.write(']')
