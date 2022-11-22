import React, {useState} from "react";
import {Student} from "../models/Student";
import StudentComponent from "./StudentComponent";
import Search from "./Search";

type StudentListProps = {
    studentList: Student[]
    deleteStudent(id: string): void
}

export default function StudentList(props: StudentListProps){

    const [searchText, setSearchText] = useState("")

    const filteredStudents = props.studentList.filter((student) => student.name.toLowerCase().includes(searchText))

    function handleSearchString(searchText: string){
        setSearchText(searchText)
    }
    
    const studentComponent = filteredStudents.map((student) => {
        return <StudentComponent deleteStudent={() => props.deleteStudent(student.id)} student={{id: student.id, name: student.name}} key={student.id} />
    })

    function mapStudents(){
        return filteredStudents.length > 0 ? studentComponent : <p>Nix gute Name diese!</p>
    }
    
    return(
        <section>
            <Search searchQuery={handleSearchString}/>
            {mapStudents()}
        </section>
    )
}