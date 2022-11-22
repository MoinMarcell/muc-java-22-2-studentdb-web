import React from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import UseStudents from "./hooks/UseStudents";

export default function StudentApp(){

    const [students, postStudent, deleteStudentById] = UseStudents()

    return(
        <section>
            <AddStudent handleNewStudent={postStudent}/>
            <StudentList deleteStudent={deleteStudentById} studentList={students} />
        </section>
    )
}