'use strict';
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: `${process.env.GITHUB_TOKEN}` });

module.exports = {
	lifecycles: {
		async afterCreate(data) {			
			await octokit.request('POST /repos/qeOnda/website/dispatches', {
			  owner: 'qeOnda',
			  repo: 'website',
			  event_type: 'created'
			})
		}	
	}
};