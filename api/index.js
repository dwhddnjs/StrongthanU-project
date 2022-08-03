import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { resolvers, typeDefs } from './graphql';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB = process.env.DB_URL;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: '*',
  },
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('몽고디비랑 연결 되었습니다');
    return server.listen({ port: 4000 });
  })
  .then((res) => {
    console.log(`서버가 ${res.url}로 실행중입니다`);
  });
