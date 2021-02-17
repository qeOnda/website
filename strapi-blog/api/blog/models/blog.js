'use strict';
const octokit = new Octokit({ auth: `${process.env.GITHUB_TOKEN}` });

module.exports = {
	lifecycles: {
		async afterCreate(data) {
			await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
			  owner: 'qeOnda',
			  repo: 'hello-world',
			  event_type: 'event_type'
			})
		}	
	}
};