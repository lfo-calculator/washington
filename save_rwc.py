from requests import get
from requests.exceptions import RequestException
from contextlib import closing
from bs4 import BeautifulSoup
import time
import sys
import os
import re
import csv

home_page = 'https://app.leg.wa.gov/RCW/default.aspx'
cite_website = 'https://app.leg.wa.gov/RCW/default.aspx?cite='
base_website = 'https://app.leg.wa.gov/RCW/'

start_title_idx =  86
start_chapter_idx = 0
start_section_idx = 0

def simple_get(url):
    try:
        with closing(get(url, stream=True, timeout=10)) as resp:
            if is_good_response(resp):
                return resp.content
            else:
                return None

    except RequestException as e:
        log_error('Error during requests to {0} : {1}'.format(url, str(e)))
        return None

    
def is_good_response(resp):
    content_type = resp.headers['Content-Type'].lower()
    return (resp.status_code == 200
            and content_type is not None
            and content_type.find('html') > -1)

def log_error(e):
    print('My Error:', e, time.strftime(('%X %x %Z')))

def attempt_website_get(url):
    raw_html = simple_get(url)
    the_html = ""
    success = False
    while success != True:
        try:   
            the_html = BeautifulSoup(raw_html, 'html.parser')
        except: 
            print('retrying get for ' + url)
            time.sleep(10)
            raw_html = simple_get(url) 
        else:
            success = True
    return (the_html, raw_html)

with open('RWC_html/section_list.txt', 'a') as file:
    rcw_website = 'https://app.leg.wa.gov/RCW/default.aspx'
    rcw_raw_html = simple_get(rcw_website)
    rcw_html = BeautifulSoup(rcw_raw_html, 'html.parser')
    
    title_headings = rcw_html.find_all('tr')[start_title_idx:]

    for i in range(len(title_headings)):
        title_tr = title_headings[i]
        title_website = title_tr.find('a').get('href')
        title_html = attempt_website_get(base_website + title_website)[0]
        chapter_headings = title_html.find_all('tr')
        if i == 0:
            chapter_headings = chapter_headings[start_chapter_idx:]

        for j in range(len(chapter_headings)):
            chapter_tr = chapter_headings[j]
            chapter_website = chapter_tr.find('a').get('href')
            chapter_html = attempt_website_get(chapter_website)[0]
            section_headings = chapter_html.find_all('tr')
            if i == 0 and j == 0:
                section_headings = section_headings[start_section_idx:]
            for section_tr in section_headings:
                section_a = section_tr.find('a')
                if section_a is None:
                    continue

                section_website = section_a.get('href')
                section_htmls = attempt_website_get(section_website)
                section_html = section_htmls[0]
                
                # here we start looking for keywords - start with content wrapper
                content = section_html.find('div', id='contentWrapper')
   
                if content is None:
                    print('No content for ' + section_website)
                    continue
                
                divs = content.find_all('div')
                if content is None:
                    print('No content for ' + section_website)
                    continue
                
                rcw_number = divs[0].find('a').get_text()
                file_name = rcw_number + '.html'

                file.write(section_website + '\n')
                with open('RWC_html/' + file_name, 'wb') as f:
                    f.write(section_htmls[1])
                       