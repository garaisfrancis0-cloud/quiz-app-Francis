
import { useMemo, useState } from 'react'
import './App.css'
import Home from './components/Home'
import ProgressBar from './components/ProgressBar'
import QuestionCard from './components/QuestionCard'
import QuizHeader from './components/QuizHeader'
import ResultCard from './components/ResultCard'
import { questions } from './data/questions'

function App() {
  const [screen, setScreen] = useState('home')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [isAnswerLocked, setIsAnswerLocked] = useState(false)

  const currentQuestion = questions[currentIndex]

  const progress = useMemo(() => {
    if (screen === 'home') return 0
    if (screen === 'result') return 100
    if (questions.length === 0) return 0

    return ((currentIndex + 1) / questions.length) * 100
  }, [currentIndex, screen])

  const resetRound = () => {
    setCurrentIndex(0)
    setSelectedAnswer('')
    setScore(0)
    setIsAnswerLocked(false)
  }

  const handleStartQuiz = () => {
    if (questions.length === 0) return

    resetRound()
    setScreen('quiz')
  }

  const handleAnswerSelect = (answer) => {
    if (isAnswerLocked || !currentQuestion) return

    setSelectedAnswer(answer)
    setIsAnswerLocked(true)

    if (answer === currentQuestion.correctAnswer) {
      setScore((previousScore) => previousScore + 1)
    }
  }

  const handleNextQuestion = () => {
    if (!currentQuestion || !isAnswerLocked) return

    if (currentIndex === questions.length - 1) {
      setScreen('result')
      return
    }

    setCurrentIndex((previousIndex) => previousIndex + 1)
    setSelectedAnswer('')
    setIsAnswerLocked(false)
  }

  const handleRetryQuiz = () => {
    resetRound()
    setScreen('quiz')
  }

  const handleReturnHome = () => {
    resetRound()
    setScreen('home')
  }

  return (
    <main className="app-shell">
      {screen === 'home' && (
        <Home onStart={handleStartQuiz} />
      )}

      {screen === 'quiz' && currentQuestion && (
        <section className="quiz-screen">
          <div className="quiz-wrapper">
            <QuizHeader
              title="Frontend Quiz"
              currentQuestion={currentIndex + 1}
              totalQuestions={questions.length}
            />

            <ProgressBar value={progress} />

            <QuestionCard
              question={currentQuestion}
              currentIndex={currentIndex}
              totalQuestions={questions.length}
              selectedAnswer={selectedAnswer}
              onSelect={handleAnswerSelect}
              isAnswerLocked={isAnswerLocked}
              correctAnswer={currentQuestion.correctAnswer}
            />

            {isAnswerLocked && (
              <div className="feedback-box">
                <p>
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? 'Correct! Great job.'
                    : `Wrong answer. The correct answer is: ${currentQuestion.correctAnswer}`}
                </p>

                <button
                  type="button"
                  className="primary-btn"
                  onClick={handleNextQuestion}
                >
                  {currentIndex === questions.length - 1
                    ? 'See Results'
                    : 'Next Question'}
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {screen === 'result' && (
        <section className="result-screen">
          <ResultCard
            score={score}
            total={questions.length}
            onRetry={handleRetryQuiz}
            onHome={handleReturnHome}
          />
        </section>
      )}
    </main>
  )
}

export default App
