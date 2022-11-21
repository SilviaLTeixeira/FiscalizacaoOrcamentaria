import { ContainerItem } from "./ClientItem";

export interface EstimateItemProps {
    clientName: string,
    payment: string,
    note: string,
    subTotal: string,
    addiction: string,
    deduction: string,
    total: number


}


const EstimateItem  = ({
   clientName,
   payment,
   note,
   subTotal,
   addiction,
   deduction,
   total,
 }: EstimateItemProps) => {
 
   return (
     <>
        <ContainerItem>
           <p>Nome do Cliente : {clientName}</p>
           <p>Forma de Pagamento :{payment}</p>
           <p>Observaçoes :{note}</p>
           <p>Subtotal :{subTotal}</p>
           <p>Acrescimo :{addiction}</p>
           <p>Desconto :{deduction}</p>
           <p>Total :{total}</p>
         </ContainerItem>
       
     </>
   );
 };
 
 
 export default EstimateItem;