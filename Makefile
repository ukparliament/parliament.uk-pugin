.PHONY: install clean serve build

# Common variables
PUBLIC_FOLDER=_public
JAVASCRIPTS_LOC=src/javascripts
STYLESHEETS_LOC=src/stylesheets
IMAGES_LOC=src/images
REPORTS_FOLDER=reports

# Node module variables
ESLINT=./node_modules/.bin/eslint
NODE_SASS=./node_modules/.bin/node-sass
POSTCSS=./node_modules/.bin/postcss
UGLIFY_JS=./node_modules/.bin/uglifyjs
IMAGEMIN=./node_modules/.bin/imagemin
BROWSER_SYNC=./node_modules/.bin/browser-sync
ONCHANGE=./node_modules/.bin/onchange

install:
	@npm i

clean:
	@rm -rf $(PUBLIC_FOLDER)

lint:
	@$(ESLINT) $(JAVASCRIPTS_LOC)

css:
	@mkdir -p $(PUBLIC_FOLDER)/stylesheets
	@$(NODE_SASS) --output-style compressed -o $(PUBLIC_FOLDER)/stylesheets $(STYLESHEETS_LOC)
	@$(POSTCSS) -u autoprefixer -r $(PUBLIC_FOLDER)/stylesheets/*

js:
	@mkdir -p $(PUBLIC_FOLDER)/javascripts
	@$(UGLIFY_JS) $(JAVASCRIPTS_LOC)/*.js -m -o $(PUBLIC_FOLDER)/javascripts/main.js

images:
	@$(IMAGEMIN) $(IMAGES_LOC)/* -o $(PUBLIC_FOLDER)/images

serve: clean build
	@$(BROWSER_SYNC) start --server --files "$(PUBLIC_FOLDER)/stylesheets/*.css, $(PUBLIC_FOLDER)/javascripts/*.js, **/*.html, !node_modules/**/*.html"

build: css js images
build_prod: lint build

test:
	@mkdir -p $(REPORTS_FOLDER)
	@rm -rf $(REPORTS_FOLDER)/*
	@node scripts/pa11y.js

watch:
	@node scripts/watch.js $(STYLESHEETS_LOC)=css $(JAVASCRIPTS_LOC)=js $(IMAGES_LOC)=images

server:
	@cp index.html $(PUBLIC_FOLDER) || :
	@node server.js
