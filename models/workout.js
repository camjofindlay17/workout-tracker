const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WorkoutSchema = new Schema ({
    day:{
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                required: "Please enter an exercise name."
            },
            type: {
                type: String,
                required: "Please enter an exercise name."
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number

            }
        }
    ]
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout