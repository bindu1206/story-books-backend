const express = require("express");
const router = express.Router();
const {ensureAuth} = require('../middleware/auth')
const Story = require('../models/Story')

// @desc  show add page
// @route GET /stories/add
router.get('/add', ensureAuth, (req, res) => {
    res.render('stories/add')
});

// @desc Show all Stories
// @route GET /stories
router.get('/' , ensureAuth , async (req,res) => {
    try {
        const stories = await Story.find({status: 'public'})
            .populate('user')
            .sort({createdAt : 'desc'})
            .lean()
        res.render('stories/index' , {stories , currentUser : req.user.id})
    } catch (error) {
        console.log(error)
        res.render('error/500')
    }
    
})

// @desc Process add form
// @route POST /stories
router.post('/' , ensureAuth , async (req , res) => {
    try {
        req.body.user = req.user.id
        await Story.create(req.body);
        res.redirect('/dashboard')
    } catch (error) {
        console.log(error)
        res.render('error/500')
    }
})

// @desc Show edit page
// @route GET /stories/edit/:id
router.get('/edit/:id' ,ensureAuth ,async (req , res) => {
    const story = await Story.findOne({
        _id : req.params.id
    }).lean()

    if(!story){
        return res.render('error/404')
    }

    if(story.user != req.user.id){
        return res.redirect('/stories')
    }else{
        story = await Story.create(req.body)
        res.redirect('/stories')
    }
})

module.exports = router;