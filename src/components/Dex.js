import React from 'react'
import { useGlobalContext } from '../context'
import { FaCircle, FaCaretRight } from "react-icons/fa";
import VisorEsquerdo from './VisorEsquerdo'
import VisorDireito from './VisorDireito'

const Dex = () => {
  const {dexLigada, openDex} = useGlobalContext()
  
  
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

      <VisorEsquerdo />
    </div>

    <VisorDireito />
    </section>)
}

export default Dex
