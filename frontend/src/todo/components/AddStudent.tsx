import React, {ChangeEvent, useState} from "react";

type AddStudentProps = {
    handleNewStudent(name: string): void
}

export default function AddStudent(props: AddStudentProps){

    const [newStudentName, setNewStudentName] = useState("")

    function saveNewStudentName(event: ChangeEvent<HTMLInputElement>){
        setNewStudentName(event.target.value)
    }

    function handleClickBtn(){
        props.handleNewStudent(newStudentName)
    }


    return (
        <section>
            <input onChange={saveNewStudentName} placeholder={"Student's name"} onKeyUp={(event) => {if(event.key === "Enter"){handleClickBtn()}}}/>
            <button onClick={handleClickBtn}>Add Student</button>
        </section>
    )
}