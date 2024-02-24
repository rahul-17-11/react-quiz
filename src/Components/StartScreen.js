function StartScreen({ numQuestion, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz</h2>
      <h3>{numQuestion} Questions To Test Your React Mystery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
