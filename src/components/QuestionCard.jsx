
import AnswerOption from './AnswerOption'

function QuestionCard({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onSelect,
  isAnswerLocked,
  correctAnswer,
}) {
  return (
    <div className="question-card">
      <p className="question-number">
        QUESTION {currentIndex + 1} OF {totalQuestions}
      </p>

      <h2 className="question-title">
        {question.question}
      </h2>

      <div className="answer-list">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            isSelected={selectedAnswer === option}
            isCorrect={option === correctAnswer}
            isAnswerLocked={isAnswerLocked}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
    </div>
  )
}

export default QuestionCard
