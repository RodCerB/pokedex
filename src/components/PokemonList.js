import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const PokemonList = () => {
  const {loading, pokemonsUrl, pokemonData} = useGlobalContext()
  
  if(loading){
    return <Loading />
  }
  
  return (
    <section className='section'>
      <h2 className='section-title'>Pokemons</h2>
      <div className='cocktails-center'>
        {/* Precisei fazer esse sort pq o na hora de fazer o fetch individual, as vezes bagunçava a ordem, assim consigo organizar ele na ordem do id dos poke antes de fazer o map */}
        {pokemonData.sort((a,b)=>parseFloat(a.id) - parseFloat(b.id)).map((poke, index)=>{
          const {id, name, sprite} = poke
          return (<div key={index}>
            <img src={sprite} alt={name} />
            <h1>{name}</h1>
          </div>)
        })}
      </div>
    </section>
  )
}

export default PokemonList
