import React from "react";
import { HomeContainer } from './styles';
import { AddPlayer } from "../../components/AddPlayer";
import { ListPlayers } from "../../components/ListPlayers";


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <AddPlayer />
            <ListPlayers />
        </HomeContainer>
    );
}