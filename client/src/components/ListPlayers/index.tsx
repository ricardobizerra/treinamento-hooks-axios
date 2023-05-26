import React, { useEffect, useState } from "react";
import apiAxios from "../../services/apiAxios";
import { Container, PlayerContainer, ShirtNumber } from "./styles";

interface Player {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

export const ListPlayers: React.FC = () => {
    const [playersList, setPlayersList] = useState<Player[]>([])

    const getPlayers = async () => {
        await apiAxios.get('/user')
        .then((value) => {
            setPlayersList(value.data)
            console.log(value.data)
        })
        .catch(err => {console.log(err)})
    }

    useEffect(() => {
        setTimeout(() => {
            getPlayers();
            document.title = `Equipe com ${playersList.length} jogadores`
        }, 5000)
    }, [playersList])

    return (
        <Container>
            <h2>Lista de Jogadores</h2>

            {playersList.map((player) => {
                return (
                    <PlayerContainer key={player.id}>
                        <ShirtNumber>{player.id}</ShirtNumber>
                        <p>{`${player.firstName} ${player.lastName}, ${player.age} anos`}</p>
                    </PlayerContainer>
                )
            })}
        </Container>
    )
}