import { Schema, model } from 'mongoose'

const ReserveSchema = new Schema({
    date: String,
    user: {
      type: Schema.Types.ObjetctId,
      ref: 'User'
    },
    house: {
      type: Schema.Types.ObjetctId,
      ref: 'House'
    }
})

export default model('Reserve', ReserveSchema)