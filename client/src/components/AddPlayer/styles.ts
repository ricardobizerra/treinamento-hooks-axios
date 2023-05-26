import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30%;
    padding: 2rem;
    gap: 2rem;
`;

export const Input = styled.input`
    width: 100%;
    background-color: transparent;
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 1rem 0.5rem;
    font-size: 1rem;
    color: #dddddd;
`;

export const AgeInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    p{
        margin: 0;
    }
`;

export const ChangeAge = styled.button`
    width: 20px;
    height: 20px;
    background-color: transparent;
    color: #dddddd;
    border: 1px solid #dddddd;
    :hover {
        background-color: #494949;
    }
`;

export const SubmitButton = styled.button`
    background-color: #292929;
    color: #dddddd;
    border: 1px solid #ffffff;
    border-radius: 10px;
    
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    
    :hover {
        background-color: #dddddd;
        color: #292929;
    }
`;

export const StatusText = styled.p`
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background-color: ${(props) => props.color};
`;