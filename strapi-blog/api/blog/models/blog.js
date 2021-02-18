'use strict';
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: `${process.env.GITHUB_TOKEN}` });

module.exports = {
	lifecycles: {
		afterCreate(data) {			
			octokit.request('POST /repos/{owner}/{repo}/dispatches', {
			  owner: 'qeOnda',
			  repo: 'website',
			  event_type: 'created'
			})
		}
		afterUpdate(data) {			
			octokit.request('POST /repos/{owner}/{repo}/dispatches', {
			  owner: 'qeOnda',
			  repo: 'website',
			  event_type: 'created'
			})
		}	
	}
};