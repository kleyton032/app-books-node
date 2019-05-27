const {Router} = require('express');

const router = Router();

const Book = require('../models/Book')

//retornando todos books
router.get('/', async(req, res)=>{
    const books = await Book.find();
    res.json(books)
});

router.post('/', async(req, res)=>{
    const {title, author, isbn} = req.body
    const newBook = new Book({title, author, isbn})
    newBook.save();
    res.json({message: 'Book salvo'})

})

router.delete('/:id', async(req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({message: 'Book excluído com sucesso'})
});

module.exports = router;