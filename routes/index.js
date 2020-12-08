const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Experience = require("../models/experience");

//create experience
router.post(
    "/new-experience",
    async (req, res, next) => {
     const { title, description, company, dateFrom, dateTo } = req.body;
      try {
        const newExperience = await Experience.create({
          title,
          description,
          company,
          dateFrom,
          dateTo
        });
        res.status(200).json(newExperience);
      } catch(error) {
        next(error)
      }
    }
  );  


//show all experiences

router.get("/full-experience", (req, res, next) => {
  
  Experience.find()
    .then(allExperiences => {
      res.status(200).json(allExperiences)
    })
    .catch(error => {
      res.json(error)
    })
});

//edit experience

router.put('/experience/edit/:id', (req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
      res.status(400).json({message: "Specified id is not valid"});
      return;
  }

  Experience.findByIdAndUpdate(req.params.id, req.body)
  .then (() => {
      res.status(200).json({message: `This experience was updated successfully`})
  })
      .catch(error => {
      res.json(error)
  })    
})

//delete exercise

router.delete("/experience/:id", (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
      res.status(400).json({message: "Specified id is not valid"});
      return;
  }

  Experience.findByIdAndRemove(req.params.id)
  .then(() => {
      res.status(200).json({message: `This experience was removed successfully.`})
  })
  .catch(error => {
      res.json(error)
  })
});


  module.exports = router;