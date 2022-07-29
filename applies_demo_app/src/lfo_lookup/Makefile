all: parser.js

parser.js: parser.pegjs
	pegjs --allowed-start-rules Start,BareCitation $<
