run:
	bin/gendiff.js 10

lint:
	npx eslint .

install-deps:
	npm ci

gendiff:
	node bin/gendiff.js

func:
	node bin/gendiffFunction.js

test:
	npx jest

publish:
	npm publish --dry-run
