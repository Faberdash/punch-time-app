function DateDisplay({ date }) {
  return (
    <div className='date-display'>
      <p>{date.toDateString()}</p>
    </div>
  )
}

export default DateDisplay
