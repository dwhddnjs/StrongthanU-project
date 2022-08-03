import Ranker from '../models/ranker';

const resolver = {
  Query: {
    async allRankers() {
      return await Ranker.find();
    },
    async filterGenderRankers(_, { gender }) {
      return await (await Ranker.find()).filter((el) => el.gender === gender);
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
