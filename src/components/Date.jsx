import { useContext } from 'react'
import PunchTimeContext from '../context/PunchTimeContext'

function Date() {
  const { date } = useContext(PunchTimeContext)

  const getWeekDay = () => {
    switch (date.getDay()) {
      case 0:
        return 'Sunday'
      case 1:
        return 'Monday'
      case 2:
        return 'Tuesday'
      case 3:
        return 'Wednesday'
      case 4:
        return 'Thursay'
      case 5:
        return 'Friay'
      case 6:
        return 'Saturday'
      default:
        return ''
    }
  }

  return (
    <div className='date-display'>
      <p>{`${getWeekDay()}, ${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`}</p>
    </div>
  )
}

export default Date
