const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController')

router.get('/', professorController.getAllProfessores);

router.get('/:id', professorController.getProfessorById);

router.get('/:id/turmas', professorController.getTurmaProfessorById);

router.put('/:id', professorController.updateProfessor);

router.post('/:id/turmas', professorController.updateTurma);

router.get('/departamento/:departamento', professorController.getProfessoresByDep);

router.delete('/:id', professorController.deletarProfessor);

module.exports = router;
