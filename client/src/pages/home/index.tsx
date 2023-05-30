import React, { useEffect, useState } from "react";
import { HomeContainer } from './styles';

// useState -> alteração de valores (numéricos, booleanos, textuais) - ir de um valor a outro
// useEffect -> atitudes a serem tomadas em uma renderização, a depender das variáveis que precisa prestar atenção
export const Home: React.FC = () => {
    const [contador, setContador] = useState(4);

    const colocarMensagemNoInspecionar = () => {
        console.log('mensagem do inspecionar');
    }

    useEffect(() => {
        colocarMensagemNoInspecionar();
    }, [contador]);
    
    return (
        <HomeContainer>
            <p>{contador}</p>
            <button 
                onClick={() => {
                    setContador(contador + 1);
                }}
            >
                Aumentar valor
            </button>
        </HomeContainer>
    );
}