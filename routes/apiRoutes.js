const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {
                res.json(dbWorkouts);
            })
            .catch(function(err) {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", function(req, res) {
        db.Workout.updateOne({ _id: req.params.id }, { $push: { exercise: req.body.exercise } }).then(function(dbWorkouts) {
                res.json(dbWorkouts);
            })
            .catch(function(err) {
                res.json(err);
            });
    });

    app.post("/api/workouts", function(req, res) {
        db.Workout.create(req.body)
            .then(function(req, res) {
                res.json(dbWorkouts);
            })
            .catch(function(err) {
                res.json(err);
            });
    });


    app.get("/api/workouts/range", function(req, res) {
        db.Workout.find({})
            .then(function(dbWorkouts) {
                res.json(dbWorkouts);
            })
            .catch(function(err) {
                res.json(err);
            });
    });


};