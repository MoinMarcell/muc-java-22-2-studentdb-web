import React, {useEffect, useState} from "react";
import StudentList from "./components/StudentList";
import axios from "axios";
import {Student} from "./models/Student";
import AddStudent from "./components/AddStudent";

export default function StudentApp(){

    const [students, setStudents] = useState<Student[]>([])

    useEffect(() => {
        axios.get("/student/")
            .then(response => setStudents(response.data))
            .catch(error => console.log(error))
    }, [])

    function postStudent(name: string){
        axios.post("/student", {
            name: name
        })
            .then((savedStudent) => {
                setStudents((prevState) => {
                    return [...prevState, savedStudent.data]
                })
                console.log(savedStudent)
            })
    }

    function deleteStudentById(id: string){
        axios.delete("/student/" + id)
            .then(() => {
                const updateStudentList = students.filter((todo) => todo.id !== id)
                setStudents(updateStudentList)
            })
            .catch(error => console.log(error))
    }

    return(
        <section>
            <AddStudent handleNewStudent={postStudent}/>
            <StudentList deleteStudent={deleteStudentById} studentList={students} />
        </section>
    )
}