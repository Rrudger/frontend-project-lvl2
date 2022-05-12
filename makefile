run:
	bin/gendiff.js 10

install-deps:
	npm ci

gendiff:
	node bin/gendiff.js
