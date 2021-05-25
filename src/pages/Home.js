import React from 'react'
import Dex from '../components/Dex'
import { useGlobalContext } from '../context'

const Home = () => {
  const {dexLigada} = useGlobalContext()

  return (
    <main>
      <Dex />
    </main>
  )
}

export default Home
