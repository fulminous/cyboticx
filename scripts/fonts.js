#!/usr/bin/env node

const camelCase = require('lodash.camelcase');
const fs = require('fs');
const path = require('path');

const DIR = path.resolve(process.cwd(), 'src', 'res', 'fonts');
const fontFileNames = () => {
	const array = fs.readdirSync(DIR).map((file) => {
		return file.replace('.ttf', '').replace('.otf', '');
	});

	return Array.from(new Set(array));
};

const generate = () => {
	if (!fs.existsSync(DIR)) {
		fs.mkdirSync(DIR, { recursive: true });
	}
	
	const properties = fontFileNames()
		.map((name) => {
			const key = camelCase(name.replace(/\s/g, ''));
			return `${key}: '${name}'`;
		})
		.join(',\n');

	const string = `const fonts = {
    ${properties}
};

export default fonts;
`;

	fs.writeFileSync('src/res/fonts.ts', string, 'utf8');
};

generate();
