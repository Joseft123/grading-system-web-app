class GradesController {
    constructor(gradeModel) {
        this.gradeModel = gradeModel;
    }

    async getAllGrades(req, res) {
        try {
            const grades = await this.gradeModel.findAll();
            res.status(200).json(grades);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving grades', error });
        }
    }

    async getGradeById(req, res) {
        const { id } = req.params;
        try {
            const grade = await this.gradeModel.findById(id);
            if (grade) {
                res.status(200).json(grade);
            } else {
                res.status(404).json({ message: 'Grade not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving grade', error });
        }
    }

    async createGrade(req, res) {
        const newGrade = req.body;
        try {
            const createdGrade = await this.gradeModel.save(newGrade);
            res.status(201).json(createdGrade);
        } catch (error) {
            res.status(500).json({ message: 'Error creating grade', error });
        }
    }

    async updateGrade(req, res) {
        const { id } = req.params;
        const updatedData = req.body;
        try {
            const updatedGrade = await this.gradeModel.update(id, updatedData);
            if (updatedGrade) {
                res.status(200).json(updatedGrade);
            } else {
                res.status(404).json({ message: 'Grade not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating grade', error });
        }
    }

    async deleteGrade(req, res) {
        const { id } = req.params;
        try {
            const deleted = await this.gradeModel.delete(id);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Grade not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting grade', error });
        }
    }
}

export default GradesController;