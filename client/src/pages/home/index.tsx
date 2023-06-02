import React, { useEffect, useState } from "react";
import { HomeContainer } from './styles';

// useState -> alteração de valores (numéricos, booleanos, textuais) - ir de um valor a outro
// useEffect -> atitudes a serem tomadas em uma renderização, a depender das variáveis que precisa prestar atenção
export const Home: React.FC = () => {
    const [contador, setContador] = useState(4);
    const [booleano, setBooleano] = useState(true);
    const [texto, setTexto] = useState("opa");

    useEffect(() => {
        console.log('olá aspirantes!')
        document.title = texto
    }, [texto])
    
    return (
        <HomeContainer>
            <p>{texto}</p>
            <button 
                onClick={() => {
                    setTexto(texto + "oi");
                    console.log(texto);
                }}
            >
                Aumentar valor
            </button>
        </HomeContainer>
    );
}