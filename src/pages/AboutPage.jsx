import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div className='card about'>
      <h1>About This Project</h1>
      <p>
        This is a react app for employees to Clock-In their daily work hours.
      </p>
      <p>Version: 1.0.0</p>

      <Link to='/' className='link'>
        Back To Home
      </Link>
    </div>
  )
}

export default AboutPage
