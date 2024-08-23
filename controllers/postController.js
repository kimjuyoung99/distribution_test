import Post from "../models/post.js";

export const listPosts = async (req, res) => {
	try {
		const posts = Post.getAll();
		res.render("list", { posts });
	} catch (err) {
		res.status(500).send("서버 오류가 발생했습니다.");
	}
};

// Post.create()
export const createPost = async (req, res) => {};

// Post.delete()
export const deletePost = async (req, res) => {};

// Post.getOne()
export const getPostDetails = async (req, res) => {};

// Post.getOne()
export const getEditPost = async (req, res) => {};

// Post.update()
export const updatePost = async (req, res) => {};