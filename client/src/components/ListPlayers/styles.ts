import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    width: 50%;
    padding: 2rem;
`;

export const PlayerContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: initial;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    color: #dddddd;
    border: 1px solid #dddddd;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    p{
        margin: 0;
    }
`;

export const ShirtNumber = styled.p`
    font-weight: 700;
    font-size: 1.5rem;
`;