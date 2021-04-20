const { request } = require('express');
const expres = require('express');
const router = expres.Router();
const Post = require('../models/Post');

router.get('/', async(req, res) =>{
    try {
        const post = await Post.find();
        res.json(post);
    } catch (err){
        res.json({mensagem: err})
    }
});

 

//ENVIAR OS POST
router.post('/', async (req,res) =>{
     const post = new Post({
         nome: req.body.nome,
         extras: req.body.extras
     });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err){
        res.json({mensagem: err})
    }
});

//Buscando o POST por ID
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post);
    } catch (err) {
        res.json({mensagem : err});
    }
    
});

//Deletar um POST em especifico
router.delete('/:postId', async (req,res) =>{
    try{
        const removePost = await  Post.remove({_id: req.params.postId})
        res.json(removePost)
    }catch (err){
        res.json({mensagem: err});
    }    
});

//Atualizar um POST
router.patch('/:postId', async (req,res) => {
    try{
        const updatePost = await Post.updateOne(
            { _id: req.params.postId}, 
           // { $set: { nome: req.body.nome } },
            { $set: {extras: req.body.extras}}
        );
        res.json(updatePost);
    }catch (err){
        res.json({mensagem: err});
}
})

module.exports = router;