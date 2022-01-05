import { useState, useContext } from 'react'
import { FaBusinessTime, FaUtensils } from 'react-icons/fa'
import PunchTimeContext from '../context/PunchTimeContext'
import DateDisplay from './DateDisplay'

function ClockInForm() {
  const [shift, setShift] = useState({
    start: '',
    finish: '',
  })

  const [lunchBreak, setLunchBreak] = useState({
    start: '',
    finish: '',
  })

  // The value for expected work hours is for now set to 8hrs per day,
  // but can later be passed from a the user's profile for example
  const [expectedHours, setExpectedHours] = useState(8)

  const { date, addWorkDay } = useContext(PunchTimeContext)

  const handleInputChange = (e, action) => {
    const { target } = e

    switch (action) {
      case 'SET_SHIFT_START':
        setShift({
          ...shift,
          start: target.value,
        })
        break
      case 'SET_SHIFT_END':
        setShift({
          ...shift,
          finish: target.value,
        })
        break
      case 'SET_BREAK_START':
        setLunchBreak({
          ...lunchBreak,
          start: target.value,
        })
        break
      case 'SET_BREAK_END':
        setLunchBreak({
          ...lunchBreak,
          finish: target.value,
        })
        break
      default:
        console.log('Unidentified Action')
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newWorkDay = {
      date,
      expectedHours,
      shift,
      lunchBreak,
      hours: calculateWorkedHours(),
      overtime: calculateOvertime(),
    }

    addWorkDay(newWorkDay)

    setShift({
      start: '',
      finish: '',
    })

    setLunchBreak({
      start: '',
      finish: '',
    })
  }

  // Calculates the hours worked on that day
  const calculateWorkedHours = () => {
    let hours =
      parseInt(shift.finish.substring(0, 2)) -
      parseInt(shift.start.substring(0, 2))

    let minutes =
      parseInt(shift.finish.substring(3, 5)) -
      parseInt(shift.start.substring(3, 5))

    const breakTime = calculateLunchBreak()

    let time = 0

    if (minutes === 0) {
      time = hours - breakTime
    } else {
      time = (hours += minutes / 60) - breakTime
    }

    // Roundes the returned value to 2 Decimal Places
    return +(Math.round(time + 'e+2') + 'e-2')
  }

  // Calculates time spent on Lunch Break
  const calculateLunchBreak = () => {
    let hours =
      parseInt(lunchBreak.finish.substring(0, 2)) -
      parseInt(lunchBreak.start.substring(0, 2))

    let minutes =
      parseInt(lunchBreak.finish.substring(3, 5)) -
      parseInt(lunchBreak.start.substring(3, 5))

    if (minutes === 0) {
      return hours
    } else {
      return (hours += minutes / 60)
    }
  }

  // Calculates the time worked above or below the expected hours for that day
  const calculateOvertime = () => {
    let time = calculateWorkedHours() - expectedHours
    return +(Math.round(time + 'e+2') + 'e-2')
  }

  return (
    <div className='card'>
      <form onSubmit={handleSubmit}>
        <div className='centered'>
          <h2>Please enter your work hours for today</h2>
        </div>

        <div className='form-body'>
          <DateDisplay date={date} />
          <h3 style={{ marginTop: '10px' }}>
            <FaBusinessTime
              style={{ marginRight: '3px', marginBottom: '-2px' }}
            />{' '}
            Shift Details
          </h3>
          <div className='time-input'>
            <label htmlFor='shift-start'>Clock In:</label>
            <input
              type='time'
              className='time-picker'
              id='shift-start'
              onChange={(e) => handleInputChange(e, 'SET_SHIFT_START')}
              value={shift.start}
              required
            />
          </div>
          <div className='time-input'>
            <label htmlFor='shift-end'>Clock Out:</label>
            <input
              type='time'
              className='time-picker'
              id='shift-end'
              onChange={(e) => handleInputChange(e, 'SET_SHIFT_END')}
              value={shift.finish}
              required
            />
          </div>
          <h3>
            <FaUtensils style={{ marginRight: '3px', marginBottom: '-2px' }} />{' '}
            Lunch Break
          </h3>
          <div className='time-input'>
            <label htmlFor='break-start'>Start:</label>
            <input
              type='time'
              className='time-picker'
              id='break-start'
              onChange={(e) => handleInputChange(e, 'SET_BREAK_START')}
              value={lunchBreak.start}
              required
            />
          </div>
          <div className='time-input'>
            <label htmlFor='break-end'>Finish:</label>
            <input
              type='time'
              className='time-picker'
              id='break-end'
              onChange={(e) => handleInputChange(e, 'SET_BREAK_END')}
              value={lunchBreak.finish}
              required
            />
          </div>
        </div>

        <div className='centered'>
          <button type='submit' className='form-button'>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default ClockInForm
