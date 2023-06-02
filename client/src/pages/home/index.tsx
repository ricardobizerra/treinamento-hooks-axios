import React, { useEffect, useState } from "react";
import { HomeContainer } from './styles';


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