import React from "react";
import {Student} from "../models/Student";
import StudentComponent from "./StudentComponent";

type StudentListProps = {
    studentList: Student[]
    deleteStudent(id: string): void
}

export default function StudentList(props: StudentListProps){
    
    const studentComponent = props.studentList.map((student) => {
        return <StudentComponent deleteStudent={() => props.deleteStudent(student.id)} student={{id: student.id, name: student.name}} key={student.id} />
    })
    
    return(
        <section>
            {studentComponent}
        </section>
    )
}