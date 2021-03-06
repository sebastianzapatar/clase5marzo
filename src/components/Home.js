import React,{useEffect,useState} from 'react'
import { PokemonCard } from './PokemonCard';

export const Home = () => {
    const [Pokemon, setPokemon] = useState([])
    const getPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=00&limit=20`;
        const resp = await fetch(url);
        const { results } = await resp.json();
        
        
        const pokemon = results.map(pokemon => {
            return {
                name: pokemon.name,
                url: pokemon.url,
                
            }

        })
        
        setPokemon(pokemon)   ;
    }
    useEffect(() => {
        getPokemon()
    }, [])
    console.log(Pokemon);
    return (
        <div>
            <h1>Mostrando algunos Pokemon</h1>
            {Pokemon.map(pokemom=>(
                <PokemonCard key={pokemom.name} pokemon={pokemom}/>
            ))}
        </div>
    )
}

/*
fecth y el fecth sirve para hacer peticiones a un rest-api
axios sirve para hacer peticiones a un rest-api
*/