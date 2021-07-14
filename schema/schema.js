const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query{
users:[User!]!
posts:[Post!]!
}
type Mutation{
  createUser(data:userInput):User!
}
type User{
    id:ID!
    name:String
    posts:[Post]!
}
input userInput{
  name:String!
}
type Post{
  id:ID!
  post:String!
  author:User!
}
`;
module.exports = typeDefs;
