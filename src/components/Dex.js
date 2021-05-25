import React from 'react'
import { useGlobalContext } from '../context'
import { FaCircle, FaCaretRight } from "react-icons/fa";

const Dex = () => {
  const {pokemonsUrl, pokemonData, dexLigada, openDex} = useGlobalContext()
  
  
  if (!dexLigada){
    return (
      <section className='dexContainerDesligado'>
      <div className='dexBody'>
        <div className='dexTopo'>
          <div className='dexTopoEsq'>
            <FaCircle className='circuloAzulDesligado'/>
            <div className='tresBolas'>
              <FaCircle className='circuloVermelho'/>
              <FaCircle className='circuloAmarelo'/>
              <FaCircle className='circuloVerde'/>
            </div>
          </div>
          <div className='dexTopoDir'></div>
        </div>
        <button className='botaoAbrir' onClick={()=> openDex()}><FaCaretRight className='setaAmarela'/></button>
      </div>
      </section>)
  }

  return (
    <section className='dexContainerLigado'>
    <div className='dexBodyLigado'>
      <div className='dexTopo'>
        <div className='dexTopoEsq'>
          <FaCircle className='circuloAzulLigado'/>
          <div className='tresBolas'>
            <FaCircle className='circuloVermelho'/>
            <FaCircle className='circuloAmarelo'/>
            <FaCircle className='circuloVerde'/>
          </div>
        </div>
        <div className='dexTopoDir'/>
      </div>

      {/* <VisorEsquerdo /> */}
      <img src={pokemonData[0].sprite} alt="poke  " />
    </div>
    {/* VisorDireito */}
    <div className='dexLadoDireito'>
      <div className='topoDexDireito'>
        <div className='topoEsquerdo'/>
        <div className='topoDireito'/>
      </div>
      <div className='centroDireito'></div>
    </div>
    </section>)


  // return (
  //   <section className='section'>
  //     <h2 className='section-title'>Pokemons</h2>
  //     <div className='cocktails-center'>
  //       {/* Precisei fazer esse sort pq o na hora de fazer o fetch individual, as vezes bagunçava a ordem, assim consigo organizar ele na ordem do id dos poke antes de fazer o map */}
  //       {pokemonData.sort((a,b)=>parseFloat(a.id) - parseFloat(b.id)).map((poke, index)=>{
  //         const {id, name, sprite} = poke
  //         return (<div key={index}>
  //           <img src={sprite} alt={name} />
  //           <h1>{name}</h1>
  //         </div>)
  //       })}
  //     </div>
  //   </section>
  // )
}

export default Dex
