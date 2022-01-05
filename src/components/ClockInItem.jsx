import { FaPlus, FaMinus } from 'react-icons/fa'
import DateDisplay from './DateDisplay'
import PropTypes from 'prop-types'

function ClockInItem({ item }) {
  const { date, expectedHours, shift, hours, overtime } = item

  return (
    <div className='card hours-item'>
      <DateDisplay date={new Date(date)} />

      <h4>Expected Hours: {expectedHours}</h4>
      <div className='shift-time'>
        <p>Shift Start: {shift.start}</p>
        <p>Shift End: {shift.finish}</p>
      </div>
      <p>Hours Worked: {hours}</p>
      <div className='overtime-field'>
        <h3>
          Overtime:{' '}
          {overtime >= 0 ? (
            <FaPlus
              style={{
                color: '#007C00',
                marginLeft: '8px',
                marginBottom: '-2px',
              }}
            />
          ) : (
            <FaMinus
              style={{
                color: '#F70000',
                marginLeft: '8px',
                marginBottom: '-3px',
              }}
            />
          )}{' '}
          {Math.abs(overtime)}hrs
        </h3>
      </div>
    </div>
  )
}

ClockInItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ClockInItem
