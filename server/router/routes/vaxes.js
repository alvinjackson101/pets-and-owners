'use strict';

module.exports = (app, db) => {
	// GET all vaxes
	app.get('/vaxes', (req, res) => {
		db.vaxes.findAll().then((vaxes) => {
			res.json(vaxes);
		});
	});

	// GET one vax by id
	app.get('/vaxes/:id', (req, res) => {
		const id = req.params.id;
		db.vaxes
			.find({
				where: { id: id }
			})
			.then((vax) => {
				res.json(vax);
			});
	});

	// POST single vax
	app.post('/vaxes', (req, res) => {
		console.log('hihi', req.body);
		const name = req.body.name;
		const pet_id = req.body.pet_id;
		const administered = req.body.administered;
		db.vaxes
			.create({
				name: name,
				pet_id: pet_id,
				administered: administered
			})
			.then((newVax) => {
				res.json(newVax);
			});
	});

	// PATCH single vax
	app.patch('/vaxes/:id', (req, res) => {
		const id = req.params.id;
		const updates = req.body.updates;
		db.vaxes
			.find({
				where: { id: id }
			})
			.then((vax) => {
				return vax.updateAttributes(updates);
			})
			.then((updatedVax) => {
				res.json(updatedVax);
			});
	});

	app.delete('/vaxes/:id', (req, res) => {
		const id = req.params.id;
		db.vaxes
			.destroy({
				where: { id: id }
			})
			.then((deletedVax) => {
				res.json(deletedVax);
			});
	});
};
