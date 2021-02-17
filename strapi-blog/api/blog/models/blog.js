'use strict';
const { Octokit } = require("@octokit/core");

module.exports = {
	lifecycles: {
		async afterCreate(data) {
			const octokit = new Octokit({ auth: `${process.env.GITHUB_TOKEN}` });
			await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
			  owner: 'qeOnda',
			  repo: 'hello-world',
			  event_type: 'event_type'
			})
		}	
	}
};