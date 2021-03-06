import React from 'react'
import "./students.css"
import studentsData from "./studentsData"

export default function Students() {
    /* Stocks the name, the image and the feedback message of each
        student inside JSX elements */
    const studentsFeedback = studentsData.map(student => (
        <React.Fragment key={student.key}>
        <div className="student-feedback">
                        <i className="fas fa-quote-left"></i>
                         <img src={require(`${student.url}`)}  alt={student.name.toLowerCase()}/> 
                        <p>"{student.paragraph}"</p>
                        <span>- {student.name} -</span>
        </div>
        <hr/> 
        </React.Fragment>
    ))
    return (
        <React.Fragment>
            <div className="students-container">
                <div className="students-banner">
                    <div className="students-banner overlay">
                        <h2>Students Feedback</h2>
                    </div>
                </div>
                <div className="students-feedback">
                    {/*Displaying each student's informations and feedback*/}
                    {studentsFeedback}
                </div>
            </div>
        </React.Fragment>
    )
}
