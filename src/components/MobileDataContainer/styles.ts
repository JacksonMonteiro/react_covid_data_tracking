import styled from "styled-components";

export const ContainerCase = styled.div`
    display: none;
    margin: 30px auto 0 auto;
    max-width:1000px;

    h1 {
        font-weight: 600;
    }

    p {
        margin-top: 7px;
    }

    @media(max-width: 768px) {
        max-width:720px;
    }

    @media (max-width:600px) {
        max-width: 360px;
        display: block;
    }
`;

export const CasesContainer = styled.div`
    flex: 1;
    padding: 20px;
    color: #000;
    background: #DDD;
    border-radius: 16px;
    border-bottom: 7px solid #ee9b00;

    h1 {
        color: #ee9b00;
    }
`;

export const DeathContainer = styled.div`
    flex: 1;
    padding: 20px;
    color: #000;
    background: #DDD;
    border-radius: 16px;
    border-bottom: 7px solid #d62828;

    h1 {
        color:#d62828;
    }
`;

export const RecoveredContainer = styled.div`
    flex: 1;
    padding: 20px;
    color: #000;
    background: #DDD;
    border-radius: 16px;
    border-bottom: 7px solid #3a86ff;

    h1 {
        color: #3a86ff;
    }
`;