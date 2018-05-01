import { Template } from 'meteor/templating';

import { Projects } From '../api/projects/projects.js';

import './site-navigation.html';

Template.siteNavigation.helperes({
	projects() {
		return Projects.find({});
	},
});
