import { useState } from 'react'
import './App.css'
import { Banner } from './components/Banner'
import { Eigibility } from './components/Eligibility'
import { Proposal } from './components/Proposal'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='container'>
          <Banner />
          <Eigibility />
          <Proposal />
        </div>
      </div>
    </>
  )
}

