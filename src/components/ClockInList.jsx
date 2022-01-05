import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PunchTimeContext from '../context/PunchTimeContext'
import ClockInItem from './ClockInItem'
import Spinner from './Spinner'

function ClockInList() {
  const { workHours, isLoading } = useContext(PunchTimeContext)

  if (!isLoading && (!workHours || workHours.length === 0))
    return <p>No Saved Hours Yet</p>

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='hours-list'>
      <AnimatePresence>
        {workHours.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ClockInItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ClockInList
