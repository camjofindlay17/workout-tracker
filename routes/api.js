const Workout = require("../models/workout.js")

module.exports = function(app){
    app.get('/api/workouts', async (req, res) => {
        try {
            const data = await Workout.aggregate([{
                $set: {
                    totalDuration: { $sum : "$exercises.duration"}
                } 
            }])

            res.send(data);
        } catch(err){
            res.json(err)
        }
    });

    app.post('/api/workouts', async (req, res) => {
        try{
            const workout = new Workout(req.body);
            const data = await db.Workout.create(workout)
            res.json(data);
        } catch(err) {
            res.json(err);
        }
    })

    app.put('/api/workouts/:id', async (req, res) => {
        try {
            const data = await Workout.updateOne({_id: req.params.id},
                {$push: {exercises: req.body}}
            )
            return res.json(data)
        }
        catch (err) {
            console.log(err)
            res.status(500).json({err})
        }
    });

    app.get('/api/workouts/range', async (req, res) => {
        const data = await Workout.aggregate([{
            $set: {
                totalDuration: { $sum : "$exercises.duration"}
            } 
        }])

        res.json(data);
    })
}