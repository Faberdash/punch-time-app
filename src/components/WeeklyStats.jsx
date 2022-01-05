import { useContext } from 'react'
import PunchTimeContext from '../context/PunchTimeContext'

function WeeklyStats() {
  const { workHours } = useContext(PunchTimeContext)

  // Calculates total overtime in done in the last 7 work days
  let totalOvertime = workHours.reduce((acc, curr) => {
    return acc + curr.overtime
  }, 0)

  return (
    <div className='weekly-stats'>
      <h4>Last {workHours.length} Work Days</h4>
      <h4>Total Overtime: {totalOvertime}hrs</h4>
    </div>
  )
}

export default WeeklyStats
