class GradeModel {
    constructor(id, studentName, subject, grade) {
        this.id = id;
        this.studentName = studentName;
        this.subject = subject;
        this.grade = grade;
    }

    static async save(connection, grade) {
        const query = `INSERT INTO grades (student_name, subject, grade) VALUES (:studentName, :subject, :grade)`;
        const result = await connection.execute(query, {
            studentName: grade.studentName,
            subject: grade.subject,
            grade: grade.grade
        });
        return result;
    }

    static async find(connection, id) {
        const query = `SELECT * FROM grades WHERE id = :id`;
        const result = await connection.execute(query, { id });
        return result.rows[0];
    }

    static async update(connection, id, grade) {
        const query = `UPDATE grades SET student_name = :studentName, subject = :subject, grade = :grade WHERE id = :id`;
        const result = await connection.execute(query, {
            studentName: grade.studentName,
            subject: grade.subject,
            grade: grade.grade,
            id
        });
        return result;
    }

    static async delete(connection, id) {
        const query = `DELETE FROM grades WHERE id = :id`;
        const result = await connection.execute(query, { id });
        return result;
    }
}

module.exports = GradeModel;