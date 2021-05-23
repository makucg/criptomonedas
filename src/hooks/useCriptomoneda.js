import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {

    console.log(opciones);

    //State custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectCripto = () => {
        if (state === '' || state.length === 0) return null;
        return (
            <Fragment>
                <Label>{label}</Label>
                <Select
                    onChange={e => actualizarState(e.target.value)}
                    value={state}
                >
                    <option value=''>-- Seleccione --</option>
                    {
                        opciones.map(opcion => (
                            <option key={opcion.Id} value={opcion.Id}>{opcion.FullName}</option>
                        ))
                    }
                </Select>
            </Fragment>
        );
    }

    //Devolver state, interfaz y fn para modificar state
    return [state, SelectCripto, actualizarState];
}
 
export default useCriptomoneda;