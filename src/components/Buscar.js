import React,{useEffect,useState} from 'react'
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';
import {useForm} from '../hooks/useForm';
import { PokemonCard } from './PokemonCard';


export const Buscar = ({history}) => {
    const location=useLocation();
    const {q=''}=queryString.parse(location.search);
    const [pokemon, setPokemon] = useState({nombre:'',imagen:'',
    habilidad:'',movimientos:[]});
    const [form,handleInputChange]=useForm({
        searchtext:q
    })
    const handleSearch=(e)=>{
        e.preventDefault();
        history.push(`?q=${searchtext}`);
    }
    const {searchtext}=form;
    const getPokemonId=async()=>{
        if(searchtext){
            const url=`http://pokeapi.co/api/v2/pokemon/${searchtext}`;
            const resp=await fetch(url);
            const{abilities,sprites,forms,moves}=await resp.json();
            const {ability}=abilities[0];
            setPokemon({nombre:forms[0].name,
                imagen:sprites.front_default,
                habilidad:ability,
                movimientos:moves
            })
        }
    }
    useEffect(()=>{
        getPokemonId();
    },[searchtext])
    console.log(pokemon);
    return (
        <div>
            <h1>Coloque el id del Pokemon</h1>
            <form onSubmit={handleSearch}>
                <input 
                    type="text"
                    placeholder="Find your Pokemon"
                    className="form-control"
                    name="searchtext"
                    value={searchtext}
                    onChange={handleInputChange}
                />
            </form>
            <PokemonCard pokemon={pokemon}/>
        </div>
    )
}
