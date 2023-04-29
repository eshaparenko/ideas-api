const express = require('express');
const router = express.Router();
const ideas = require('../data')

//Get all ideas
router.get('/', (req, res) => {
    res.json({ success: true, data: ideas})
})

//Get by :id
router.get('/:id', (req, res) => {

    const idea = ideas.find(idea => idea.id === +req.params.id);

    if (!idea) {
        return res
            .status(404) 
            .json({success: false, error: 'Resource not found'})

    }
    res.json({ success: true, data: idea})
})

//Add an idea
router.post('/', (req, res) => {
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10)
    }
    
    ideas.push(idea)
    res.json({ success: true, data: idea })
})

//Remove an idea
router.delete('/:id', (req, res) => {
    const idea = ideas.find(idea => idea.id === +req.params.id);

    if (!idea) {
        return res
            .status(404) 
            .json({success: false, error: 'Resource not found'})

    }

    const index = ideas.indexOf(idea);
    ideas.splice(index, 1)
    res.json({ success: true, data: {} })
})

//Update an idea
router.put('/:id', (req, res) => {
    const idea = ideas.find(idea => idea.id === +req.params.id);

    if (!idea) {
        return res
            .status(404) 
            .json({success: false, error: 'Resource not found'})

    }

    idea.text = req.body.text || idea.text
    idea.tag = req.body.tag || idea.tag
    res.json({ success: true, data: idea})
})

module.exports = router;