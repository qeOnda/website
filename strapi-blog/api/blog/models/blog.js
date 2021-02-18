'use strict';
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: `${process.env.GITHUB_TOKEN}` });

module.exports = {
	lifecycles: {
		async afterCreate(data) {			
			await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
			  owner: 'qeOnda',
			  repo: 'website',
			  event_type: 'created'
			})
		}
		async afterUpdate(data) {			
			await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
			  owner: 'qeOnda',
			  repo: 'website',
			  event_type: 'created'
			})
		}	
	}
};