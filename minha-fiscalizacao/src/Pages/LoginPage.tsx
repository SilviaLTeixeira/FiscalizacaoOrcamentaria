import {  FormEvent, FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { URL_SERVER } from "../utils/Constants";

export const InputLogin = styled.input`
     
     border-radius: 5px;
     width: 60%;
     display: flex;
     margin-left: 20%;
     
`
export const ButtonWrapperLogin = styled.button`
     height: 50px;
     width: 100px;
     border-radius: 25px;
     display: flex;
     justify-content: center;
     padding-top: 3%;
     margin-left: 40%;
     margin-top: 10%;

`
export const LoginCard = styled.div`
      width: 500px;
      height: 650px;
      border-radius: 10px;
      margin-left:30%;
      margin-top: 2%;
      background: -webkit-linear-gradient(top, #191970, #00d084);

      h1,h4{
        color: #FFFF;
        display: flex;
        justify-content: center;
      }
      h1{
        padding-top: 30%;
      }
      h4{
        padding-top: 5%;
      }
`;

const LoginPage : FunctionComponent<any> = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate = useNavigate();
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) =>{
        try {
            event.preventDefault();
            const response = await fetch(URL_SERVER +`/users?email=${email}&password=${password}`);
            const data= await response.json();
            if (data.length===1){
            navigate("/newestimate")   
            }else{
                alert("Voce nao esta cadastrado")
            }
            if(!email){
                alert('Email é obrigatorio');
                return
            }else if(!password){
                alert('Senha é obrigatoria');
                return
            }else if(password.length<8){
                alert('Senha muito pequena');
                return
            }
           
        } catch (error) {
           alert("Essa pagina nao esta disponivel, Me desculpe o transtorno")
        }
    }
    return(
        <form onSubmit={(event) => handleSubmit(event)}>
        <LoginCard>
            <h1>LOGIN</h1>
            <h4 className="h4">Email</h4>
            <InputLogin 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="login-input"
            placeholder="Digite seu email"
            type="email"
            />
            <h4 className="h4">Senha</h4>
            <InputLogin 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="login-input"
            placeholder="Digite sua senha"
            type="password"
            />
             <ButtonWrapperLogin type="submit">Login</ButtonWrapperLogin>
        </LoginCard>
        </form>
    )
}

export default LoginPage;