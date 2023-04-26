const Choices = (props: any) => {
  return (
      <div className="d-flex flex-wrap col-7 justify-content-around">
          {props.answers.map((answer: string) => <h4 className="badge bg-secondary" key={answer}>{answer}</h4>)}
      </div>
  );
}

export default Choices;