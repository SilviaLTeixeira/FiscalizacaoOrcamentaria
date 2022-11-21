import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorStyled = styled.div`
   h1,a{

       display: flex;
       justify-content: center;
       color: #191970;
   }
   


`

export default function ErrorPage() {
    return (
        <ErrorStyled>
            <h1>404 ERROR</h1>
            <h1>Que pena! Esta página não existe</h1>
            <Link to="/">Voltar para Tela Inicial?</Link>
        </ErrorStyled>
    );
}