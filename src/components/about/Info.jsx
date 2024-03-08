import React from 'react'

const Info = () => {

  return (
    <div>
      <div className="about__info grid" >
        {data.map((item) =>
          <div className="about__box">
            <dev>{item.icon}</dev>
            <h3 className="about__title">{item.title}</h3>
            <span className="about__subtitle">{item.subtitle}</span>
          </div>

        )}
      </div>
    </div>


  )
}


export default Info
let data = [
  {
    num: 1,
    title: 'Experiennce',
    subtitle: '8 Years Working',
    icon: <i class='bx bx-award about__icon'></i>
  },
  {
    title: 'Completed',
    subtitle: '20 + Projects',
    icon: <i class='bx bx-briefcase-alt about__icon' ></i>
  },
  {
    title: 'Support',
    subtitle: 'Online 24/7',
    icon: <i class='bx bx-support about__icon' ></i>
  }
]