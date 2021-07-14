const Post={
author(p,a,{db}){
   return  db.users.find((user)=>user.id===p.author)
}
}
module.exports=Post