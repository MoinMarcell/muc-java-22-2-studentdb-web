import {useEffect, useState} from "react";
import {Student} from "../models/Student";
import axios from "axios";


export default function StudentsHook(): [Student[], (name: string) => void, (id: string) => void]{
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

    return [students, postStudent, deleteStudentById]
}