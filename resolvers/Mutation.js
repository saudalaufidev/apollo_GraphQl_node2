const {v4 : uuid} =require('uuid')
const Mutation={
createUser(p,{data},{db}){
const user={
    id:uuid(),
    name:data.name
}
console.log(user)
db.users.push(user)
return user
}
}
module.exports=Mutation