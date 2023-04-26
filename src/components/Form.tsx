import {useState} from "react";

const Form = (props: any) => {
    const [userAnswer, setUserAnswer] = useState('');

    const handleSubmit = (e: any) => {
        if (userAnswer !== props.answer)
            alert(`Wrong answer the correct answer is ${props.answer}`);
        else
            alert(`that is a correct answer`);
    }

  return (
      <form className="col-7 mt-2" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Your Answer" aria-describedby="answer" value={userAnswer} onChange={e => setUserAnswer(e.target.value)} required/>
              <small id="answer" className="form-text text-muted">The application tells you the right answer eventually</small>
          </div>
          <button type="submit" className="btn btn-primary float-end">Submit Answer</button>
      </form>
  );
}

export default Form;