const router = require('express').Router();

const Cars = require('../data/dbHelpers')

router.get('/', (req, res)=>{
    Cars.getAll()
        .then(carsList=>{
            res.status(200).json({carsList})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'Failed to get car list'})
        })
})

router.get('/:id', (req, res)=>{
    Cars.getById(req.params.id)
        .then(car => {
            res.status(200).json({car})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'failed to get that car'})
        })
})

router.post('/', (req, res)=>{
    Cars.create(req.body)
        .then(newCar=>{
            res.status(201).json({newCar})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'failed to create new car'})
        })
})

module.exports = router