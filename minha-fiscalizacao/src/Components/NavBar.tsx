import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";

export const NavBarWrapper = styled.nav`

     background-color: #191970;
     height: 54px;

     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0 10px;

     span{
        color: #00d084;
     }
     @media screen and (max-widht: 700px){
        display: flex;
     }

`

export const UlItem = styled.ul
`
display:flex;
gap: 20px;
list-style: none;
color:#FFF;

@media screen and (max-widht: 700px){
    display: flex;
 }

`

export const ListItem =  styled.li
`
  :hover{
    text-decoration: underline;
    font-weight: bold;
    color:#00d084;
  }


`




const NavBar: FunctionComponent<any> = () => {
    const navigate = useNavigate();
    return(
        <div>
            <NavBarWrapper>
            <span>MINHAFISCALIZACAO</span>
            <UlItem>
                <ListItem onClick={() => navigate("/clientregister")}>Registro de Clientes</ListItem>
                <ListItem onClick={() => navigate("/newestimate")}>Novo orçamento</ListItem>
                <ListItem onClick={() => navigate("/listclients")}>Lista de clientes</ListItem>
                <ListItem onClick={() => navigate("/listestimate")}>Lista de orçamentos</ListItem>
            </UlItem>
            </NavBarWrapper>
        </div>
        
    )
}
export default NavBar;