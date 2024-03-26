const tasks = require('../models/tasks.model');

function getTasks(req, res) {
	try {
		// const task = tasks.getTask(req.params.id);
		res.status(200).json(tasks);
	} catch (err) {

		res.status(404).json(err);
	}

}

module.exports = { getTasks };