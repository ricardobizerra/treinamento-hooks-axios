import React from "react";
import { HomeContainer } from './styles';


export const Home: React.FC = () => {
    let contador = 4;

    return (
        <HomeContainer>
            <p>{contador}</p>
            <button 
                onClick={() => {
                    contador += 1;
                    console.log(contador);
                }}
            >
                Aumentar valor
            </button>
        </HomeContainer>
    );
}