const router = require("express").Router()
const Workout = require("../models/workout.js")

router.get("api/workout", (req, res) => {
    Workout.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.post("/api/workout", ({ body}, res) => {
    Workout.create(body)
    .then (data => {
        res.json(data)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.put("/api/workout/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
    params.id,
    {$push:{exercise:body}},
    {new: true}
    )
    .then(data => res.json(data))
    .catch(err => {
        res.status(400).json(err)
    })
})

module.exports = router
