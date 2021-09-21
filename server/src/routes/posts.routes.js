const { Router } = require('express')

const router = Router()

const Post = require('../models/Post')

router
    .post('/add', async (req, res) => {
        try {

            const { title, text, image } = req.body

            const post = new Post({
                title, text, image
            })
            await post.save()
            res.json(post)

        } catch (error) {
            console.log("🔥🚀 ===> router.post ===> error", error);

        }
    })
    .get('/', async (_, res) => {
        try {

            const getAllPosts = await Post.find({})

            res.json(getAllPosts)
        } catch (error) {
            console.log("🔥🚀 ===> .get ===> error", error);

        }
    })
    .get('/:id', async (req, res) => {
        try {
            const { id } = req.params

            // const getPostById = await Post.findOne({ _id: id })
            const getPostById = await Post.findById(id)

            res.json(getPostById)
        } catch (error) {
            console.log("🔥🚀 ===> findById ===> error", error);

        }
    })

module.exports = router