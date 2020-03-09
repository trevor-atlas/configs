const {promisify} = require('util');
const {symlink} = require('fs');
const {join} = require('path');
const symLink = promisify(symlink);

const links = require('./links.json');

(async () => {
	const projectDir = process.env.INIT_CWD || path.resolve("../../", __dirname);
	console.log('projectdir', projectDir)
	for (let link of links) {
		await symLink(join(projectDir, 'node_modules', link), join(projectDir, link));
	}
})();
