import React from 'react';
import {Link} from 'react-router-dom';
import StudentApi from '../apis/les3_student_api';

// props.match.path == "les3/class"

const Students = (props) => {
    let api = new StudentApi();

    const output = [];
    api.all().map((student) => {
        output.push(
            <li key={student.id}>
                <Link to={`${props.match.path}/${student.id}`}>{student.name}</Link>
            </li>
        )
    });

    // kan ook rechtstreeks:
    // const output = apis.all().map ((student) => {
    //     return (
    //         <li key={student.id}>
    //             <Link to="/class/${student.id}">{student.name}</Link>
    //         </li>
    //     )
    // });

    return (
        <div>
            <h2>Class</h2>
            <ol>
                {output}
            </ol>
        </div>
    );

};

export default Students;