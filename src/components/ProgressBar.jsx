
function ProgressBar({ value }) {
  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>YOUR PROGRESS</span>
        <span>{Math.round(value)}%</span>
      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={Math.round(value)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-fill"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
