const express = require('express');
const router = express.Router();

const voitures = [{ id: 1, name: "clio", annee: 2019 }, { id: 2, name: "megane", annee: 2020 }];

router.get('/all', (req, res) => {
    res.send(voitures);
});

router.post('/add', (req, res) => {
    const { name, annee } = req.body;
    const id = voitures.length + 1; 
    const newCar = { id, name, annee };
    voitures.push(newCar);
    res.status(201).json(newCar);
});

router.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = voitures.findIndex(voiture => voiture.id === id);
    
     voitures.splice(index, 1);
    
});

router.put('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, annee } = req.body;
    const index = voitures.findIndex(voiture => voiture.id === id);
    
        voitures[index].name = name || voitures[index].name;
        voitures[index].annee = annee || voitures[index].annee;
        res.status(200).json(voitures[index]);
    
});

module.exports = router;
