import Score from "./Score";

const Student = (props) => {
  return (
    <>
      <h3>
        {props.student.name}'s bio: {props.student.bio}.
      </h3>
      {props.student.scores.map(score =>
        <Score name={props.student.name} score={score.score} date={score.date}/>
      )
    }
    </>
  );
}

export default Student;