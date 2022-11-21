import React from "react";
import {Student} from "../models/Student";
import "./StudentComponent.css"
type StudentComponentProps = {
    student: Student
    deleteStudent(id: string): void
}

export default function StudentComponent(props: StudentComponentProps){

    function handleOnBlickBtn () {
        props.deleteStudent(props.student.id)
    }

    return(
        <section className={"student"}>
            <h3>Name: {props.student.name}</h3>
            <p>Matrikelnummer: {props.student.id}</p>
            <button onClick={handleOnBlickBtn}>Delete</button>
        </section>
    )
}