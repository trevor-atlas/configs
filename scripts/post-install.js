const {promisify} = require('util');
const {symlink} = require('fs');
const {join} = require('path');
const symLink = promisify(symlink);

const links = require('./links');

(async () => {
	const projectDir = process.env.INIT_CWD || path.resolve("../../", __dirname);
	for (let link in links) {
		await symLink(`./${link}`, join(projectDir, link));
	}
})();
