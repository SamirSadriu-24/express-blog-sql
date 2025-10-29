
import connection from '../db.js';

function getPost(req, res, next) {
    const sql = 'SELECT * FROM posts'

    connection.query(sql,(err, result) => {
        if (err) return next(err);
        res.json(result)
    })
}


function getSinglePost(req, res) {
    const id = parseInt(req.params.id)
    const Blog = posts.find(blog => blog.id === id);

    if (!Blog) return res.status(404).json({ message: "Blog non trovato" });
    res.json(Blog);
}

function createNewPost(req, res) {

    console.log(req.body);

    const nuovoPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };
    posts.push(nuovoPost)
    res.status(201).json(nuovoPost);
}

function modificaPost(req, res) {
    const id = parseInt(req.params.id)
    const Blog = posts.find(blog => blog.id === id)

    if (!Blog) return res.status(404).json({ message: "Blog non trovato" });
    Blog.title = req.body.title || Blog.title;
    Blog.content = req.body.content || Blog.content;
    Blog.image = req.body.image || Blog.image;
    Blog.tags = req.body.tags || Blog.tags;
    res.json({ message: "Post modificato", post: Blog });
};

function deletePost(req, res, next) {
    const id = parseInt(req.params.id)
    const sql = 'DELETE FROM posts WHERE id = ?';

   connection.query(sql, [id],(err, result)=> {
    if (err) return next(err)
        res.status(204).send();
   })
}

export default { getPost, getSinglePost, createNewPost, modificaPost, deletePost }