import Student from "./Student"

function StudentList (props) {
  return (
    <>
      <h2>The Students</h2>
      {props.students.map(student => 
        <Student key={student.name} student={student}/>
      )}
    </>
  )
}

export default StudentList