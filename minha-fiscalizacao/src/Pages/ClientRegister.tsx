import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { URL_SERVER } from "../utils/Constants";
import { ButtonWrapper, DivContainer, NavDiv } from "./NewEstimate";



const ClientRegister: FunctionComponent<any> = () => {
    const[clientName,setClientName]=useState('');
    const[idClient,setIdClient]=useState('')
    const[note,setNote]=useState('')
    const[address, setAdress] = useState('');
    const[email, setEmail] = useState('')
    const[telefone,setTelefone]=useState('')
    const[socialMidia,setSocialMidia]=useState('')
    const navigate = useNavigate();
    
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) =>{
        try {
            event.preventDefault();
            if(!clientName){
                alert('Nome do cliente é obrigatorio');
                return
            }else if(!idClient){
                alert('CPF ou CNPJ é obrigatorio');
                return
            }else if(!note){
                alert('Observaçoes sao obrigatorias');
                return
            }else if(!address){
                alert('endereço é obrigatorio')
                return
            }else if(!email){
                alert('Email é obrigatorio')
                return
            }else if(!telefone){
                alert('Telefone é obrigatorio')
                return
            }
            else if(!socialMidia){
                alert("Redes sociais sao obrigatorias")
                return
            }
            await fetch(
                 URL_SERVER +
                '/clientes',
                {
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify({
                  clientName,
                  idClient,
                  note,
                  address,
                  email,
                  telefone,
                  socialMidia
                  })
                }
              );
        
              alert('Cliente cadastrado com sucesso');

              navigate("/listclients");
        
            
        } catch (error) {
            alert("Desculpe o transtorno , houve um erro")
        }
    };
    return(
        <>
        <><NavBar>
        </NavBar>
        <form onSubmit={(event) =>handleSubmit(event)}>
        <NavDiv>
                <h1>Registro de Clientes</h1>
            </NavDiv>
            <DivContainer>
                <div>
                    <h4 >Nome do Cliente</h4>
                    <h4 className="container_h4">CPF/CNPJ</h4>
                </div>
                <div className="item-row">
                    <input
                        value={clientName}
                        onChange={(event) => setClientName(event.target.value)}
                        className="input"
                        placeholder="Nome do Cliente"
                        type="text" />
                    <input
                        value={idClient}
                        onChange={(event) => setIdClient(event.target.value)}
                        className="input_pay"
                        placeholder="CPF/CNPJ"
                        type="text" />
                </div>
                <div>
                    <h4>Observaçoes</h4>
                </div>
                <textarea
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    className="input"
                    placeholder="Observaçoes" />
                <hr />
                <div>
                    <h4 >Endereço</h4>
                    <h4 className="container_h4">Email</h4>
                    <h4 className="container_h4">Telefone</h4>
                    <h4 className="container_h4">Redes Sociais</h4>
                </div>
                <div className="item-row">
                <input
                        value={address}
                        onChange={(event) => setAdress(event.target.value)}
                        className="input"
                        placeholder="Endereço"
                        type="text" />
                        <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="input"
                        placeholder="Email"
                        type="email" />
                        <input
                        value={telefone}
                        onChange={(event) => setTelefone(event.target.value)}
                        className="input"
                        placeholder="Telefone"
                        type="text" />
                         <input
                        value={socialMidia}
                        onChange={(event) => setSocialMidia(event.target.value)}
                        className="input"
                        placeholder="Redes Sociais"
                        type="text" />
                <ButtonWrapper type="submit">Salvar</ButtonWrapper>
                <ButtonWrapper onClick={() => navigate('/')}
          className="btn"
          type="button">Cancelar</ButtonWrapper>
                </div>
            </DivContainer></form><Footer></Footer></>
        </>
    )
}

export default ClientRegister;