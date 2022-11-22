import React from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import StudentsHook from "./hooks/StudentsHook";

export default function StudentApp(){

    const [students, postStudent, deleteStudentById] = StudentsHook()

    return(
        <section>
            <AddStudent handleNewStudent={postStudent}/>
            <StudentList deleteStudent={deleteStudentById} studentList={students} />
        </section>
    )
}