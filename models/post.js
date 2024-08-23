class Post {
    static async getAll(){
        return await db
        .collection("posts")
        .find()
        .sort({ _id: -1 })
        // .limit(3) // 필요시 주석 해제
        .toArray();
    }
    static async create(postData){
        return 
    }
    static async delete(postId){
        return aswint
    }
}