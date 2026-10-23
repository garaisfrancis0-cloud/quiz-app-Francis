
function AnswerOption({
  option,
  isSelected,
  isCorrect,
  isAnswerLocked,
  onClick,
}) {
  let optionClass = 'answer-option'

  if (isSelected) {
    optionClass += ' selected'
  }

  if (isAnswerLocked && isCorrect) {
    optionClass += ' correct'
  }

  if (isAnswerLocked && isSelected && !isCorrect) {
    optionClass += ' incorrect'
  }

  return (
    <button
      type="button"
      className={optionClass}
      onClick={onClick}
      disabled={isAnswerLocked}
    >
      <span className="answer-circle">
        {isSelected ? '✓' : ''}
      </span>

      <span className="answer-text">{option}</span>
    </button>
  )
}

export default AnswerOption
