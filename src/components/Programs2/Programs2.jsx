import React from 'react'
import './Programs2.css'
import program_4 from '../../assets/program-4.jpg'
import program_5 from '../../assets/program-5.jpg'
import program_6 from '../../assets/program-6.jpg'
import program_icon_4 from '../../assets/program-icon-5.svg'
import program_icon_5 from '../../assets/program-icon-6.svg'
import program_icon_6 from '../../assets/program-icon-7.svg'


const Programs2 = () => {
  return (
    <div className='programs2'>
      <div className="program2">
        <img src={program_4} alt="" />
        <div className="caption2">
          <img src={program_icon_4} alt="" />
          <p>BBA in International Business</p>
        </div>
      </div>
      <div className="program2">
        <img src={program_5} alt="" />
        <div className="caption2">
          <img src={program_icon_5} alt="" />
          <p>BBA in Digital Business Management</p>
        </div>
      </div>
      <div className="program2">
        <img src={program_6} alt="" />
        <div className="caption2">
          <img src={program_icon_6} alt="" />
          <p>BBA in Advertising and Marketing</p>
        </div>
        </div>
    </div>
  )
}

export default Programs2
