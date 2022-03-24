import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 60% 40%  ;
    gap: 20px;
    margin: 50px auto;
    max-width:1000px;

    @media(max-width: 768px) {
        max-width: 720px;
        grid-template-columns: 1fr;
    }
`;

export const CBox = styled.div`
    border: 1px solid #FFF;
    border-radius: 12px;

    @media (max-width: 600px) {
        max-width: 360px;
        margin: auto;
    }
`;

export const ChartBox = styled.div`
    max-width: 450px;
    display: grid;
    gap: 20px;

    @media (max-width: 768px) {
        max-width: 350px; 
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        max-width: 360px;
        grid-template-columns: 1fr;
        margin: auto;
        gap: 30px;
    }
`;