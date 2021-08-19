import PostMessage from "../models/postMessage.js";

export const getPost = async(req, res) => {
    try {
        const data = await PostMessage.find();
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: error.message
        })
    }
}

export const createPost =  async(req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post)

    try {
        await newPost.save();
        res.status(201).json({
            success: true,
            message: newPost
        })
    } catch (error) {
        res.status(409).json({ 
            success: false, 
            message: error.message
        })
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };