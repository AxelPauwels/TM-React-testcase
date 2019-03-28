import React from 'react';
import {Link} from 'react-router-dom';
import StudentApi from '../apis/les3_student_api';

const Student = (props) => {
    let api = new StudentApi();
    let student = api.get(
        parseInt(props.match.params.studentId, 10) // 10 is voor decimaal number-system
    );

    if (!student) {
        return <div>Id does not exist</div>
    }
    return (
        <div>
            <h2>Student</h2>
            <p>
                Name: {student.name}
                <br/>
                Id: {student.id}
                <br/>
                Grade: {student.grade}
            </p>
            <Link to="/les3/class">Back</Link>
        </div>
    )
};

export default Student;
