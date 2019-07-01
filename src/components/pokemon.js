import React, { useEffect, useState } from 'react';

import { randomNumber } from '../helpers';

import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { transition } from '../config/styles';

const Pokemon = (props) => {
    const [pokemon, choosePokemon ] = useState({
        name: '',
        image: ''
    });

    function pokeApi() {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber(1, 251).toString()}`)
        .then(response => response.json())
        .then(data => choosePokemon({
            name: data.name,
            image: data.sprites.front_default
        }))
    }

    useEffect(() => {
        pokeApi()
    }, []);

    return (
        pokemon.name !== '' && 
        pokemon.sprites !== '' ? 
            <CSSTransition
                in={props.show === true}
                timeout={200}
                classNames="pokemon"
                unmountOnExit
                onEnter={() => (console.log(`it's a ${pokemon.name}!`), console.log('thank you pokeapi.co!'))}
                onExited={() => (props.reset, pokeApi())}
            >
                <img 
                    onClick={props.reset}
                    className={`pokemon ${props.className}`}
                    src={pokemon.image}
                    alt={pokemon.name}
                />
            </CSSTransition>
        : null
    )
}

const StyledPokemon = styled(Pokemon)`
    position: fixed;
    z-index: 1000;
    right: -100%;
    bottom: 0;
    height: 150px;
    width: auto;
    transition: ${transition}ms;
    opacity: 0;
    cursor: e-resize;

    &.pokemon-enter-done {
        right: 0;
        opacity: 1;
    }

    &.pokemon-exit-done {
        right: -100%;
        opacity: 0;
    }
`

export default StyledPokemon;