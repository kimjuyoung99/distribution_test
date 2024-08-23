import { ObjectId } from "mongodb";

let db;

class Post {
    static async injectDB(conn) {
        try {
            db = conn.db("todo");
            console.log("DB연결 성공");
        } catch (e) {
            console.error(`DB연결 실패 : ${e}`);
            throw e;
        }
    }

    static async getAll() {
        try {
            return await db
                .collection("posts")
                .find()
                .sort({ _id: -1 })
                // .limit(3) // 필요시 주석 해제
                .toArray();
        } catch (error) {
            console.error("Error fetching all posts:", error);
            throw error;
        }
    }

    static async create(postData) {
        try {
            return await db.collection("posts").insertOne(postData);
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }

    static async delete(postId) {
        try {
            return await db.collection("posts").deleteOne({ _id: new ObjectId(postId) });
        } catch (error) {
            console.error("Error deleting post:", error);
            throw error;
        }
    }

    static async getOne(postId) {
        try {
            return await db.collection("posts").findOne({ _id: new ObjectId(postId) });
        } catch (error) {
            console.error("Error fetching one post:", error);
            throw error;
        }
    }

    static async update(postId, postData) {
        try {
            return await db
                .collection("posts")
                .updateOne(
                    { _id: new ObjectId(postId) },
                    { $set: postData }
                );
        } catch (error) {
            console.error("Error updating post:", error);
            throw error;
        }
    }
}

export default Post;