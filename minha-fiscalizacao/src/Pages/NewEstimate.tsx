import { ChangeEvent, FormEvent, FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { URL_SERVER } from "../utils/Constants";

export const NavDiv = styled.div`
     display: flex;
    width: 80%;
    height: 54px;
    border: 1px solid #000;
    padding: 0 10px;
    align-items: center;
    margin: auto;
    margin-top: 10%;
    border-radius: 5px;
    justify-content: center;
`

export const DivContainer = styled.div`
    display:flex;
    width: 80%;
    border: 1px solid #000;
    flex-direction: column;
    padding: 0 10px;
    margin: auto;
    border-radius: 5px;
    height: 600px;

    .item-row{
    display: flex;
    width: 100%;
    height: 20px;
    margin-top: 25px;
    margin-bottom: 25px;
    gap: 20px;
    }
    h4{
        display: inline-flex;
        padding: 25px;
    }
    .container_h4{
        padding-left: 120px;
    }
    .input{
        margin-left: 20px;
    }
    .input_pay{
        margin-left: 70px;
    }
    p{
        margin-left: 5%;
    }
   
    
`

export const ButtonWrapper = styled.button`
     height: 50px;
     width: 100px;
     border-radius: 10px;
     margin-left: 5%;
     background-color: #191970;
     color: #fff;
`


const NewEstimate: FunctionComponent<any> = () => {
    const[clientName,setClientName]=useState('');
    const[payment,setPayment]=useState('')
    const[note,setNote]=useState('')
    const [subTotal, setSubTotal] = useState("");
    const [addiction, setAddiction] = useState("")
    const[deduction,setDeduction]=useState("")
    const[total,setTotal]=useState(0)
    const navigate = useNavigate();

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) =>{
        console.log({
            subTotal,
            addiction,
            deduction,
            total
          });

    try {
        event.preventDefault();
        if(!clientName){
            alert('Nome do cliente é obrigatorio');
            return
        }else if(!payment){
            alert('Forma de pagamento é obrigatoria');
            return
        }else if(!note){
            alert('Observaçoes sao obrigatorias');
            return
        }else if(!subTotal){
            alert('Subtotal é obrigatorio')
            return
        }else if(!addiction){
            alert('Acrescimo é obrigatorio')
            return
        }else if(!deduction){
            alert('Decrescimo é obrigatorio')
            return
        }

        await fetch(
             URL_SERVER +
            '/orcamentos',
            {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({
              clientName,
              payment,
              note,
              subTotal,
              addiction,
              deduction,
              total
              })
            }
          );
    
          alert('Orçamento cadastrado com sucesso');

          navigate("/listestimate");
    
        
    } catch (error) {
        alert("Desculpe o transtorno , houve um erro")
    }
    
};

useEffect(() => {
    setTotal(Number(subTotal) + Number(addiction) - Number(deduction));
  }, [subTotal, addiction, deduction]);

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "subTotal":
        setSubTotal(event.target.value);
        break;
      case "addiction":
        setAddiction(event.target.value);
        break;
      case "deduction":
        setDeduction(event.target.value);
        break;
      default:
        console.log("name está errado");
        break;
    }
  };

    return(
    
        <><NavBar>
        </NavBar>
        <form onSubmit={(event) =>handleSubmit(event)}>
        <NavDiv>
                <h1>Novo Orçamento</h1>
            </NavDiv>
            <DivContainer>
                <div>
                    <h4>Nome do Cliente</h4>
                    <h4 className="container_h4">Forma de Pagamento</h4>
                </div>
                <div className="item-row">
                    <input
                        value={clientName}
                        onChange={(event) => setClientName(event.target.value)}
                        className="input"
                        placeholder="Nome do Cliente"
                        type="text" />
                    <input
                        value={payment}
                        onChange={(event) => setPayment(event.target.value)}
                        className="input_pay"
                        placeholder="Forma de Pagamento"
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
                    <h4>Subtotal</h4>
                    <h4 className="container_h4">Acrescimo</h4>
                    <h4 className="container_h4">Desconto</h4>
                    <h4 className="container_h4">Valor Total</h4>
                </div>
                <div className="item-row">
                <input
                        value={subTotal}
                        onChange={(event) => handleChange(event)}
                        className="input"
                        placeholder="Subtotal"
                        name="subTotal"
                        type="number" />
                        <input
                        value={addiction}
                        onChange={(event) => handleChange(event)}
                        className="input"
                        placeholder="Acrescimo"
                        name="addiction"
                        type="number" />
                        <input
                        value={deduction}
                        onChange={(event) => handleChange(event)}
                        className="input"
                        placeholder="Desconto"
                        name="deduction"
                        type="number" />
                        <p>R$ : {total}</p>
                
                <ButtonWrapper type="submit">Salvar</ButtonWrapper>
                <ButtonWrapper onClick={() => navigate('/')}
          className="btn"
          type="button">Cancelar</ButtonWrapper>
                </div>
            </DivContainer></form><Footer></Footer></>
    
    )
}

export default NewEstimate;


