const Query={
    users(p,a,{db}){
        return db.users
        },
    posts(p,a,{db}){
        return db.posts
    }
    }
module.exports=Query