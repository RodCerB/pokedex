import React from 'react'
import { useGlobalContext } from '../context'
import { GiGamepadCross } from "react-icons/gi";
import { FaCircle} from "react-icons/fa";

const VisorEsquerdo = () => {
    const {pokemonData, nextPoke, prevPoke} = useGlobalContext()

    return (
    <section className='centroEsquerdo'>
        <div className='bordaVisorPokemon'>
            <div className={pokemonData.sprite1 ? 'visorPokemonLigado' : 'visorPokemonDesligado'}>
                <div className='spritesPokes'>
                    <img src={pokemonData.sprite1} alt="poke" className='pokeSprite'/>
                    <img src={pokemonData.sprite2} alt="poke" className='pokeSprite'/>
                </div>
                <h1 className='nomePokemon'>{`#${pokemonData.id} ${pokemonData.name}`}</h1>
            </div>
        </div>
        <div className='containerBotoesEsquerda'>
            <button className='btnCirculoPreto' onClick={()=>prevPoke()}><FaCircle className='circuloPreto'/></button>
            <div className='boxBotoesEsquerda'>
                <div className='selects'>
                    <div className='selectVermelho' />
                    <div className='selectAzul' />
                </div>
                <div className='telaVerde' />
            </div>
            <button className='btnPadPreto' onClick={()=>nextPoke()}><GiGamepadCross className='padPreto' /></button>
        </div>
        
    </section>)
}

export default VisorEsquerdo