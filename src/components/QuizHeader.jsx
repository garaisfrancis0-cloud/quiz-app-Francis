
function QuizHeader({ title, currentQuestion, totalQuestions }) {
  return (
    <header className="quiz-header">
      <div className="quiz-brand">
        <span className="brand-dot"></span>
        <h1>{title}</h1>
      </div>

      <p className="question-counter">
        Question <strong>{currentQuestion}</strong> of {totalQuestions}
      </p>
    </header>
  )
}

export default QuizHeader
