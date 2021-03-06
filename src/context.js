import React, { useState, useContext, useEffect } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [numero, setNumero] = useState(3)
  const [dexLigada, setDexLigada] = useState(false)
  const [pegou, setPegou] = useState(false)
  const [pokemonData, setPokemonData] = useState({id:'', name:'', sprite1:'', sprite2:''})
  const [pokemonInfos, setPokemonInfos] = useState({height:'', weight:'', types:[''], stats:['']})
  const [form, setForm] = useState('')
  const [erro, setErro] = useState(false)
  const [team, setTeam] = useState([])
  
  const url = `https://pokeapi.co/api/v2/pokemon/${numero}/`

  // Pegando os dados iniciais
  async function fetchPokemons(url) {
    try{
    const response = await fetch(url)
    const data = await response.json()
    const {id, name, sprites, height, weight, types, stats} = data
    setErro(false)
    // preciso setar o numero aqui pois quando pesquiso por nome não conseguiria ir para os proximos pokes, ai resolve
    setNumero(id)
    setPokemonData({id:id,name:name,sprite1:sprites.front_default,sprite2:sprites.back_default})
    setPokemonInfos({height:height,weight:weight,types:types,stats:stats})
    setPegou(!pegou)
    }
    catch{setErro(true)}
  }
  
  // Abrindo a Pokedex
  const openDex = () =>{
    fetchPokemons(url)
    setDexLigada(!dexLigada)
  }
  
  // mudando dex
  const nextPoke = () =>{
    if(numero+1 >898){
      setNumero(1)
    }else{setNumero(numero+1)}
  }
  const prevPoke = () =>{
    if(numero-1 < 1){
      setNumero(898)
    }else{setNumero(numero-1)}
  }
  useEffect(()=>{
    fetchPokemons(url)
  },[numero])
  

  // pesquisando
  const catchPoke = () =>{
    setNumero(form)
    setForm('')
  }

  // Add poke no time
  const capturePoke = () =>{
    if(team.length <6){
      setTeam(team => [...team, {id:pokemonData.id, img:pokemonData.sprite1}])
    }
  }
  // Remove poke no time
  const releasePoke = () => {
    let newTeam = team.filter((poke) => poke.id !== pokemonData.id)
    setTeam(newTeam)
  }
  // Limpa time
  const clearPoke = () => {
    setTeam([])
  }

  
  return <AppContext.Provider value={{
    pokemonData,
    pokemonInfos,
    dexLigada,
    openDex,
    nextPoke,
    prevPoke,
    form,
    setForm,
    catchPoke,
    erro,
    numero,
    capturePoke,
    team,
    releasePoke,
    clearPoke
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
