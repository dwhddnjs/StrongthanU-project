import Ranker from '../models/ranker';

const resolver = {
  Query: {
    async allRankers() {
      return await Ranker.find();
    },
  },
};

export default resolver;
