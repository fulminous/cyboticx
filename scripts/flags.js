#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const DIR = path.resolve(process.cwd(), 'src', 'res', 'flags');
const FLAGS_SRC = path.resolve(__dirname, 'flags');
const list = [];

const setup = () => {
	const files = fs
		.readdirSync(DIR)
		.map((file) => {
			return file.replace('@2x', '').replace('@3x', '');
		});

		for (const file of files) {
			list.push(file)
		}
};

const copyFlags = () => {
	const flags = fs.readdirSync(FLAGS_SRC);
		flags.map((flag) => {
			fs.copyFileSync(`${FLAGS_SRC}/${flag}`, `${DIR}/${flag}`);
		});
}

const sanitizeKeyForImport = (key) => {
	return key
		.replace(/(\.png)/g, '')
};

const generate = () => {
	if (!fs.existsSync(DIR)) {
		fs.mkdirSync(DIR, { recursive: true });
		copyFlags();
	} else {
		if (fs.readdirSync(DIR).length === 0) {
			copyFlags();
		}
	}

	setup();

	const defaultImports = list
		.map(
			(element) =>
				`import ${sanitizeKeyForImport(element)} from './flags/${element}';`,
		)
		.join('\n');

	const properties = list
			.map((element) => `${sanitizeKeyForImport(element)}`)
			.join(',');

	const string = list.length === 0 ? 'export {};' : `
    ${defaultImports}

    const flags = {
      ${properties},
    };

    export default flags;
    `;

	fs.writeFileSync('src/res/flags.ts', string, 'utf8');
};

generate();
