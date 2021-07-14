const User={
posts(p,a,{db}){
    return db.posts.filter((post)=>post.author===p.id)
}
}
module.exports=User