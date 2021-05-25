import React from 'react'
import { useGlobalContext } from '../context'

const VisorDireito = () => {
    const {pokemonInfos} = useGlobalContext()
    
    console.log(pokemonInfos.types[0].type)
    return (
    <div className='dexLadoDireito'>
      <div className='topoDexDireito'>
        <div className='topoEsquerdo'/>
        <div className='topoDireito'/>
      </div>
      
      {pokemonInfos.types[0].type && 
      <section className='centroDireito'>
        <section className='containerVisores'>
          <div className='visorDados'>
            {pokemonInfos.types.map((tipo, index)=>{
              
              return <div className='tipagem' key={index}>
                <h2 className='dadosPokemon'>{`Tipo ${index+1}:`}</h2>
                <h3 className={`${tipo.type.name}`}>{tipo.type.name}</h3>
              </div>
              
            })}
          </div>
          <div className='visorPesoAltura'>
            <div className='visorAltura'>
              <h2 className='dadosPokemon'>{`Altura: ${pokemonInfos.height/10}m`}</h2>
            </div>
            <div className='visorPeso'>
              <h2 className='dadosPokemon'>{`Peso: ${pokemonInfos.weight/10}kgs`}</h2>
            </div>
          </div>
        </section>
      </section>}
      
    </div>
    )
}

export default VisorDireito