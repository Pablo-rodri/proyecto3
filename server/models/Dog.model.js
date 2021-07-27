const { Schema, model } = require("mongoose")

const dogSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    dogBreed: {
        type: String,

    },
    dogPPP: {
        type: Boolean,
    },
    observations: {
        type: String,
    },
    dogOwner: { type: Schema.Types.ObjectId, ref: 'User' },

    image: String

}, {
    timestamps: true
})

const Dog = model("Dog", dogSchema)

module.exports = Dog