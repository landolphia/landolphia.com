import { Projects } from '../../api/projects/projects.js';

const runFixtures = function () {
	const shouldRun = Projects.find().count() == 0;
	if ( shouldRun ) {
		console.debug("The project database is empty and should be filled.");
	}
}

runFixtures();
