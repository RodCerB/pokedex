import React from 'react'
import PokemonList from '../components/PokemonList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm />
      <PokemonList />
    </main>
  )
}

export default Home
