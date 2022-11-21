import { FunctionComponent } from "react";
import styled from "styled-components";


export const FooterWrapper = styled.footer`

      background-color: #191970;
      margin-top: 45%;
      height: 300px;
    
      h1{
        color: #00d084;
        display: flex;
        justify-content: center;
      }
      h2,h3,h4{
        color:#fff;
      }
      h3{
        display: flex;
        padding: 10px;
        font-weight: lighter;
        justify-content: center;
      }
      h2{
        display: flex;
        justify-content: center;
      }
      h4{
        display: flex;
        justify-content: center;
      }

`

const Footer: FunctionComponent<any> = () => {
    return(
        <FooterWrapper>
            <h1>MINHA FISCALIZACAO</h1>
            <h2>Contate-nos</h2>
            <h3>Telefone</h3>
            <h4>(47)9999-9999</h4>
            <h3>Email</h3>
            <h4>emaildafiscalizacao@gmail.com</h4>
        </FooterWrapper> 
    )
}
export default Footer;