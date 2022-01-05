import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

function AboutIconLink() {
  return (
    <div className='about-container'>
      <div className='about-link'>
        <Link to='/about' className='about-tag'>
          <FaQuestion size={35} />
        </Link>
      </div>
    </div>
  )
}

export default AboutIconLink
