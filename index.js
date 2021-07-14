const express=require('express')
const {ApolloServer}=require('apollo-server-express')
const db=require('./db')
const app=express()
const typeDefs = require('./schema/schema.js');
const Query=require('./resolvers/Query')
const Mutation=require('./resolvers/Mutation')
const User=require('./resolvers/User')
const Post=require('./resolvers/Post')

const server=new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Mutation,
        User,
        Post
    },
    context:{
        db
    }
})
server.applyMiddleware({app})

app.get('/',(req,res,next)=>{
res.redirect('/graphql')
})
app.listen({ port: process.env.PORT || 4000 },()=>console.log("server working on http://localhost:4000"+server.graphqlPath))
