const {promisify} = require('util');
const {unlink} = require('fs');
const {join} = require('path');
const unlinkAsync = promisify(unlink);

const links = require('./links');

(async () => {
	const projectDir = process.env.INIT_CWD || path.resolve("../../", __dirname);
	for (let link in links) {
		await unlinkAsync(`./${link}`, join(projectDir, link));
	}
})();