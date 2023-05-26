import React, { useState } from "react";
import { AgeInput, ChangeAge, Container, Input, StatusText, SubmitButton } from "./styles";

export const AddPlayer: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(19);

    const handleSubmit = async () => {}

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
        </Container>
    )
}