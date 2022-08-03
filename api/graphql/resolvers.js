import { create } from 'domain';
import Ranker from '../models/ranker';

const resolver = {
  Query: {
    async allRankers() {
      return await Ranker.find();
    },
  },
  Mutation: {
    async addRanker(_, { rankerInput: { nickname, gender, body, squat, bench, dead } }) {
      const newRanker = new Ranker({
        nickname: nickname,
        gender: gender,
        body: body,
        squat: squat,
        bench: bench,
        dead: dead,
      });

      const res = await newRanker.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },
  },
};

export default resolver;
