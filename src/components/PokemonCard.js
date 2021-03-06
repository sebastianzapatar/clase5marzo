import React,{useState,useEffect} from 'react'

export const PokemonCard = ({pokemon}) => {
    const [Pokemon, setPokemon] = useState({imagen:'',habilidad:''})
    const getPokemon = async () => {
        const url = pokemon.url;
        const resp = await fetch(url);
        const { abilities,sprites } = await resp.json();
        const {front_default}=sprites;
        const {ability}=abilities[0];
        setPokemon({imagen:front_default,habilidad:ability.name})   ;
    }
    useEffect(() => {
        getPokemon()
    }, [])
    
    console.log(Pokemon)
    return (
        <div className="card">
            <h2>{pokemon.name}</h2>
            <h6>{Pokemon.habilidad}</h6>
            <img src={Pokemon.imagen} alt={Pokemon.name} width="100px" />
            
        </div>
    )
}
