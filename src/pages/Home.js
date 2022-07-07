import React from 'react'
import './pagesStyle/pagesStyle.css'

import Card from '../components/Card'

const Home = () => {


  const datas = [
    {
      id: 1,
      firstname: 'Odiljon',
      lastName: 'Abdullayev',
      age: 16,
      habit: 'play compuyter game'
    },
    {
      id: 2,
      firstname: 'Odiljon',
      lastName: 'Abdullayev',
      age: 16,
      habit: 'play compuyter game'
    },
    {
      id: 3,
      firstname: 'Odiljon',
      lastName: 'Abdullayev',
      age: 16,
      habit: 'play compuyter game'
    },
    {
      id: 4,
      firstname: 'Odiljon',
      lastName: 'Abdullayev',
      age: 16,
      habit: 'play compuyter game'
    },
    {
      id: 5,
      firstname: 'Odiljon',
      lastName: 'Abdullayev',
      age: 16,
      habit: 'play compuyter game'
    },
]
  return (
    <div className='home'>
      <h1>Home page</h1>
      <div className="card-container">
        {
          datas.map(data => {
            return (
              <>
                <Card
                  firstName={data.firstname}
                  lastName={data.lastName}
                  age={data.age}
                  habit={data.habit}
                />
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
