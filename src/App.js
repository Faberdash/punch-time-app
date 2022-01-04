import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ClockInForm from './components/ClockInForm'
import WeeklyStats from './components/WeeklyStats'
import ClockInList from './components/ClockInList'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import { WorkHoursProvider } from './context/PunchTimeContext'

function App() {
  return (
    <WorkHoursProvider>
      <Router>
        <Header />

        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <ClockInForm />
                  {/* <WeeklyStats />
                <ClockInList /> */}
                </>
              }
            />

            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>

        {/* <Footer /> */}
      </Router>
    </WorkHoursProvider>
  )
}

export default App
