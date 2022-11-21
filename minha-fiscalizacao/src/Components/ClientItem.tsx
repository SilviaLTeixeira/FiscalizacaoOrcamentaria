import styled from "styled-components";

export interface ClientItemProps {
     clientName: string,
     idClient: string,
     note: string,
     address: string,
     email: string,
     telefone: string,
     socialMidia: string


}

export const ContainerItem = styled.div`
      display: flex;
      justify-content: center;
      padding-top: 5%;
     
`


const ClientItem  = ({
    clientName,
    idClient,
    note,
    address,
    email,
    telefone,
    socialMidia,
  }: ClientItemProps) => {
  
    return (
      <>
         <ContainerItem>
            <p>Nome do cliente : {clientName}</p>
            <p>CPF/CNPJ : {idClient}</p>
            <p>Observaçoes: {note}</p>
            <p>Endereço :{address}</p>
            <p>Email :{email}</p>
            <p>Telefone :{telefone}</p>
            <p>Redes Sociais :{socialMidia}</p>
          </ContainerItem>
        
      </>
    );
  };
  
  
  export default ClientItem;