import React from 'react'
import { useGlobalContext } from '../context'
import { FaCircle} from "react-icons/fa";
import { BsFillSquareFill } from "react-icons/bs";

const VisorDireito = () => {
    const {pokemonInfos, form, setForm, openDex, catchPoke, erro} = useGlobalContext()
    
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
          {!erro && 
          <>
            {pokemonInfos.types.map((tipo, index)=>{
              
              return <div className='tipagem' key={index}>
                <h2 className='dadosPokemon'>{`Tipo ${index+1}:`}</h2>
                <h3 className={`${tipo.type.name}`}>{tipo.type.name}</h3>
              </div>
            })}
            <div className='statusBasicos'>
              {pokemonInfos.stats.map((stat, index)=>{
               
                return <div className={`box${stat.stat.name}`} key={index}>
                  <h2 className={`${stat.stat.name}`}>{stat.stat.name}</h2>
                  <h3 className='dadosPokemon'>{stat.base_stat}</h3>
                </div>
              })}
            </div></>}
          </div>

          <div className='containerPesquisa'>
            <div className='abaPesquisa'>
              <input type='text' className='form-input' value={form} onChange={(e)=>setForm(e.target.value)}/>
              <button className='botaoPesquisa' onClick={()=> catchPoke()}><BsFillSquareFill className='quadroPesquisa'/></button>
          </div>
          <button className='botaoFechar' onClick={()=> openDex()}><FaCircle className='botaoAmarelo'/></button>
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