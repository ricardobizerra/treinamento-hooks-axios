import React, { useState } from "react";
import apiAxios from "../../services/apiAxios";
import { AgeInput, ChangeAge, Container, Input, StatusText, SubmitButton } from "./styles";

export const AddPlayer: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(19);

    const [situation, setSituation] = useState(0);

    const handleSubmit = async () => {
        console.log(firstName, lastName, age);

        await apiAxios.post('/user',
        {
            firstName,
            lastName,
            age,
        }
        ).then(log => {
            console.log(log)
            setSituation(1);
            setTimeout(() => setSituation(0), 5000);
        })
         .catch(err => {
            console.log(err)
            setSituation(2);
            setTimeout(() => setSituation(0), 5000);
        })
    }

    return (
        <Container>
            <Input 
                type="text" 
                placeholder="Primeiro nome" 
                onChange={(e) => setFirstName(e.target.value)} 
            />

            <Input 
                type="text" 
                placeholder="Último nome" 
                onChange={(e) => setLastName(e.target.value)} 
            />

            <AgeInput>
                <ChangeAge
                    onClick={() => setAge(age - 1)}
                >
                    -
                </ChangeAge>

                <p>{age}</p>

                <ChangeAge
                    onClick={() => setAge(age + 1)}
                >
                    +
                </ChangeAge>
            </AgeInput>

            <SubmitButton
                onClick={handleSubmit}
            >
                Adicionar!
            </SubmitButton>

            {situation === 1 ? (
                <StatusText color="#2f4b01">
                    Sucesso ao adicionar!
                </StatusText>
            ) : situation === 2 ? (
                <StatusText color="#f00000">
                    Não conseguimos adicionar {':('}
                </StatusText>
            ) : <></>}
        </Container>
    )
}