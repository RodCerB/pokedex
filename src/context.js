import React, { useState, useContext, useEffect } from 'react'

const url = 'https://pokeapi.co/api/v2/pokemon/'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [dexLigada, setDexLigada] = useState(false)
  const [pokemonsUrl, setPokemonsUrl] = useState([])
  const [pegou, setPegou] = useState(false)
  const [pokemonData, setPokemonData] = useState([{id:'', name:'', sprite:''}])
  
  // Pegando os dados iniciais
  async function fetchPokemons(url) {
    const response = await fetch(url)
    const data = await response.json()
    const {results} = data
    results.map((resultsUrl)=>{
      return setPokemonsUrl(pokemonsUrl => [resultsUrl.url, ...pokemonsUrl])
    })
    setPegou(!pegou)
  }

  // Pegando os dados individuais dos pokemons
  async function fetchPokemonsData(url) {
    const response = await fetch(url)
    const data = await response.json()
    const {id, name, sprites} = data
    setPokemonData(pokemonData => [{id:id,name:name,sprite:sprites.front_default}, ...pokemonData])
  }
  useEffect(()=>{
    for(let i=0; i<pokemonsUrl.length; i++){
      fetchPokemonsData(pokemonsUrl[i])
    }
  },[pegou])
  
  // Abrindo a Pokedex
  const openDex = () =>{
    fetchPokemons(url)
    setDexLigada(!dexLigada)
  }
  
  
  
  
  
  
  
  return <AppContext.Provider value={{
    pokemonsUrl,
    pokemonData,
    dexLigada,
    openDex
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
