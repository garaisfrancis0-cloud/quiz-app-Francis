
function ResultCard({ score, total, onRetry, onHome }) {
  const percentage = Math.round((score / total) * 100)

  return (
    <div className="result-card">
      <p className="eyebrow">QUIZ COMPLETED</p>

      <h1>Congratulations!</h1>

      <p className="result-message">
        You have completed the Frontend Quiz Challenge.
        Keep learning and improving your skills!
      </p>

      <div className="score-circle">
        <span className="score-number">
          {score}/{total}
        </span>
        <span className="score-label">Your Score</span>
      </div>

      <p className="result-percentage">
        Final Score: {percentage}%
      </p>

      <div className="result-actions">
        <button
          type="button"
          className="primary-btn"
          onClick={onRetry}
        >
          Retake Quiz
        </button>

        <button
          type="button"
          className="secondary-btn"
          onClick={onHome}
        >
          Return Home
        </button>
      </div>
    </div>
  )
}

export default ResultCard
