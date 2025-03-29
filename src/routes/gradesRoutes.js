const express = require('express');
const GradesController = require('../controllers/gradesController');

const router = express.Router();
const gradesController = new GradesController();

router.get('/grades', gradesController.getAllGrades.bind(gradesController));
router.get('/grades/:id', gradesController.getGradeById.bind(gradesController));
router.post('/grades', gradesController.createGrade.bind(gradesController));
router.put('/grades/:id', gradesController.updateGrade.bind(gradesController));
router.delete('/grades/:id', gradesController.deleteGrade.bind(gradesController));

module.exports = router;