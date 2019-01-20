import React, { useEffect, useState } from 'react';

import { randomNumber } from '../helpers/helpers';

import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { transition } from '../config/styles';

const Pokemon = (props) => {
    const [pokemon, choosePokemon ] = useState({
        name: '',
        image: '',
    });

    useEffect(() => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber(1, 251).toString()}`)
        .then(response => response.json())
        .then(data => choosePokemon({
            name: data.name,
            image: data.sprites.front_default
        }))

    }, []);

    return (
        pokemon.name !== '' && 
        pokemon.sprites !== '' ? 
            <CSSTransition
                in={props.show === 'true'}
                timeout={300}
                classNames="pokemon"
                unmountOnExit
            >
                <img 
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
    transition: ${transition};

    &.pokemon-enter-done {
        right: 0;
    }
`

export default StyledPokemon;