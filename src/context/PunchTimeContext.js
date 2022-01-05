import { useState, useEffect, createContext } from 'react'

const PunchTimeContext = createContext()

export const WorkHoursProvider = ({ children }) => {
  const [date, setDate] = useState(new Date())

  const [workHours, setWorkHours] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  // Add a work day report
  const addWorkDay = async (newWorkDay) => {
    const response = await fetch('/workHours', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newWorkDay),
    })

    const data = await response.json()

    setWorkHours([data, ...workHours])

    if (workHours.length < 7) {
      setWorkHours([data, ...workHours])
    } else {
      setWorkHours([data, ...workHours.slice(0, 6)])
    }
  }

  // Fetch the reports for the last 7 work days from the backend
  const fetchWorkHours = async () => {
    const response = await fetch('/workHours?_sort=id&_order=desc')

    const data = await response.json()

    setWorkHours(data.slice(0, 7))

    setIsLoading(false)
  }

  useEffect(() => {
    fetchWorkHours()
  }, [])

  return (
    <PunchTimeContext.Provider
      value={{
        date,
        workHours,
        isLoading,
        addWorkDay,
      }}
    >
      {children}
    </PunchTimeContext.Provider>
  )
}

export default PunchTimeContext
