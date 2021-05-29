import React from 'react'
import { useGlobalContext } from '../context'
import { GiGamepadCross } from "react-icons/gi";
import { FaCircle} from "react-icons/fa";

const VisorEsquerdo = () => {
    const {pokemonData, nextPoke, prevPoke, erro, numero, capturePoke, releasePoke, clearPoke} = useGlobalContext()

    return (
    <section className='centroEsquerdo'>
        <div className='bordaVisorPokemon'>
            <div className={erro ? 'visorPokemonDesligado' : 'visorPokemonLigado'}>
                {erro 
                ?<div className='erroBox'>
                    <h2 className='erroMsg'>Nenhum pokemon encontrado pelo nome de {numero}</h2>
                    <h2 className='erroMsg'>Verifique se a ortografia ou o número estão corretos</h2>
                </div>  
                :<div className='spritesPokes'>
                    <img src={pokemonData.sprite1} alt="poke" className='pokeSprite'/>
                    <img src={pokemonData.sprite2} alt="poke" className='pokeSprite'/>
                </div> }
                {!erro && <h1 className='nomePokemon'>{`#${pokemonData.id} ${pokemonData.name}`}</h1>}
            </div>
        </div>
        <div className='containerBotoesEsquerda'>
            <button className='btnCirculoPreto' onClick={()=>prevPoke()}><FaCircle className='circuloPreto'/></button>
            <div className='boxBotoesEsquerda'>
                <div className='selects'>
                    <div className='selectVermelho'><button className='btnVermelho' onClick={()=>releasePoke()}/></div>
                    <div className='selectAzul'><button className='btnAzul' onClick={()=>capturePoke()}/></div>
                </div>
                <div className='telaVerde'><button className='btnVerde' onClick={()=>clearPoke()}/></div>
            </div>
            <button className='btnPadPreto' onClick={()=>nextPoke()}><GiGamepadCross className='padPreto' /></button>
        </div>
        
    </section>)
}

export default VisorEsquerdo