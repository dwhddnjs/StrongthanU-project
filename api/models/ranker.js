// import mongoose from 'mongoose';
import pkg from 'mongoose';

const { model, Schema } = pkg;

// const Schema = mongoose.Schema;

const rankerSchema = new Schema({
  nickname: String,
  gender: String,
  body: Number,
  squat: Number,
  bench: Number,
  dead: Number,
});

export default model('ranker', rankerSchema);
