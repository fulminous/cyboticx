#!/usr/bin/env node

const camelCase = require('lodash.camelcase');
const fs = require('fs');
const path = require('path');

const DIR = path.resolve(process.cwd(), 'src', 'res', 'images');
const list = {
	dark: [],
	light: [],
	default: [],
};

const setup = () => {
	const files = fs
		.readdirSync(DIR)
		.filter((file) => {
			return (
				file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.svg') || file.endsWith('.gif')
			);
		})
		.map((file) => {
			return file.replace('@2x', '').replace('@3x', '');
		});

	for (const file of files) {
		if (file.includes('.dark')) {
			list.dark.push(file);
		} else if (file.includes('.light')) {
			list.light.push(file);
		} else {
			list.default.push(file);
		}
	}
};

const sanitizeKey = (key) => {
	return key.replace(/(\.png|\.jpg|\.jpeg|\.svg|\.gif|\.dark|\.light)/g, '');
};

const sanitizeKeyForImport = (key) => {
	return camelCase(key
		.replace(/(\.png|\.jpg|\.jpeg|\.svg|\.gif)/g, '')
		.replace(/(\.dark)/g, 'Dark')
		.replace(/(\.light)/g, 'Light'));
};

const sanitizeKeyForExport = (key) => {
	const sanitizedKey = sanitizeKeyForImport(key);
	return sanitizedKey.charAt(0).toUpperCase() + sanitizedKey.slice(1);
};

const getPair = (element) => {
	const key = camelCase(sanitizeKey(element));
	const value = sanitizeKeyForImport(element);

	if (key === value) {
		return key;
	}

	return `${key}: ${value}`;
};

const generate = () => {
	if (!fs.existsSync(DIR)) {
		fs.mkdirSync(DIR, { recursive: true });
	}

	setup();

	const darkImports = list.dark
		.map(
			(element) =>
				`import ${sanitizeKeyForImport(element)} from './images/${element}';`,
		)
		.join('\n');

	const lightImports = list.light
		.map(
			(element) =>
				`import ${sanitizeKeyForImport(element)} from './images/${element}';`,
		)
		.join('\n');

	const defaultImports = list.default
		.map(
			(element) =>
				`import ${sanitizeKeyForImport(element)} from './images/${element}';`,
		)
		.join('\n');
		
	const darkExports = list.dark
		.filter(element => element.includes('.svg'))
		.map(
			(element) =>
				`export {ReactComponent as ${sanitizeKeyForExport(element)}} from './images/${element}';`,
		)
		.join('\n');

	const lightExports = list.light
		.filter(element => element.includes('.svg'))
		.map(
			(element) =>
				`export {ReactComponent as ${sanitizeKeyForExport(element)}} from './images/${element}';`,
		)
		.join('\n');

	const defaultExports = list.default
		.filter(element => element.includes('.svg'))
		.map(
			(element) =>
				`export {ReactComponent as ${sanitizeKeyForExport(element)}} from './images/${element}';`,
		)
		.join('\n');

	const properties = {
		dark: list.dark
			.map(
				(element) =>
					`${getPair(element)}`,
			)
			.join(','),
		light: list.light
			.map(
				(element) =>
					`${getPair(element)}`,
			)
			.join(','),
		default: list.default
			.map(
				(element) =>
					`${getPair(element)}`,
			)
			.join(','),
	};

	const string = `
    ${darkImports}
    ${lightImports}
    ${defaultImports}

		const images = {
      dark: {${properties.dark}},
      light: {${properties.light}},
      default: {${properties.default}},
    };

    export default images;
  `;

	const icons = (darkExports === '' && lightExports === '' && defaultExports === '') ? `
		/*
		* Export Components
		*/
		export {};
	` : `
		/*
		* Export Components
		*/
		${darkExports}
		${lightExports}
		${defaultExports}
	`;

	fs.writeFileSync('src/res/images.ts', string, 'utf8');
	fs.writeFileSync('src/res/icons.ts', icons, 'utf8');
};

generate();
