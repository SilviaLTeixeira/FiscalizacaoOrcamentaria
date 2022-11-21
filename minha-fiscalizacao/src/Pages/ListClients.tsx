import { useEffect, useState } from "react";
import ClientItem, { ClientItemProps } from "../Components/ClientItem";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { URL_SERVER } from "../utils/Constants";
import { DivContainer, NavDiv } from "./NewEstimate";




const ListClients = () => {

    useEffect(() => {
        async function getClients() {
          const result = await fetch(`${URL_SERVER}/clientes?_page&_limit=4`);
          const data = await result.json();
          setClients(data);
        }
    
        getClients();
    }, [])

    const [clients, setClients] = useState([]);

    return (
        <>
        <div>
        <NavBar></NavBar>
        <NavDiv><h1>Lista de Clientes</h1></NavDiv>
        <DivContainer>
        {clients.map((item: ClientItemProps)=> (
            <ClientItem clientName={item.clientName} idClient={item.idClient} note={item.note} address={item.address} email={item.email} telefone={item.telefone} socialMidia={item.socialMidia}></ClientItem>
        ))}
        </DivContainer>
        </div>
        <Footer></Footer>
        </>
    )
}

export default ListClients;
