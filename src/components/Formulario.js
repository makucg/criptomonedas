import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';


import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';


const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66A2FE;
  border: none;
  width: 100%;
  color: #FFF;
  transition: background-color .3s ease;

  &:hover {
      background-color: #326AC0;
      cursor: pointer;
  }
`;


const Formulario = () => {

    const [listacripto, guardarCriptomonedas] = useState([]);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];

    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', MONEDAS);
    const [criptomoneda, SelectCriptoMonedas] = useCriptomoneda('Elige tu criptomoneda', listacripto);

    useEffect(() => {
        const consultarAPI = async () => {
            const resultado = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=EUR');
            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    },[]);

    

    return ( 
        <form>
            <SelectMonedas />
            <SelectCriptoMonedas />
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;