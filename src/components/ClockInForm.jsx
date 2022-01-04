import { useState, useContext } from 'react'
import { FaBusinessTime, FaUtensils } from 'react-icons/fa'
import PunchTimeContext from '../context/PunchTimeContext'
import Date from './Date'

function ClockInForm() {
  const [shift, setShift] = useState({
    start: '',
    finish: '',
  })

  const [lunchBreak, setLunchBreak] = useState({
    start: '',
    finish: '',
  })

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
      expectedHours: 9,
      shift,
      lunchBreak,
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

  return (
    <div className='card'>
      <form onSubmit={handleSubmit}>
        <h2>Please enter your work hours for today</h2>

        <div className='form-body'>
          <Date />
          <h3>
            <FaBusinessTime /> Shift Details
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
            <FaUtensils /> Lunch Break
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

        <button type='submit' className='form-button'>
          Save
        </button>
      </form>
    </div>
  )
}

export default ClockInForm
