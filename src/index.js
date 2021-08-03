import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { datas } from './datas'
import AllData from './AllData'

const Reminder = () => {
  const [list, setList] = React.useState(datas)
  return (
    <section>
      <div className='box'>
        <div className='top'>5 birthdays today</div>
        <div className='body'>
          {list.map((data, index) => {
            return <AllData key={data.id} {...data}></AllData>
          })}
        </div>
        <div className='footer'>
          <button onClick={() => setList([])}>Clear All</button>
        </div>
      </div>
    </section>
  )
}

ReactDOM.render(<Reminder />, document.getElementById('root'))
