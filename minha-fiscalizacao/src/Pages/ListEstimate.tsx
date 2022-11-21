import { useEffect, useState } from "react";
import EstimateItem, { EstimateItemProps } from "../Components/EstimateItem";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { URL_SERVER } from "../utils/Constants";
import { DivContainer, NavDiv } from "./NewEstimate";




const ListEstimate = () => {

    useEffect(() => {
        async function getEstimate() {
          const result = await fetch(`${URL_SERVER}/orcamentos?_page&_limit=4`);
          const data = await result.json();
          setEstimate(data);
        }
    
        getEstimate();
    }, [])

    const [estimate, setEstimate] = useState([]);

    return (
        <>
        <div>
        <NavBar></NavBar>
        <NavDiv><h1>Lista de orçamento</h1></NavDiv>
        <DivContainer>
        {estimate.map((item: EstimateItemProps)=> (
            <EstimateItem clientName={item.clientName} payment={item.payment} note={item.note} subTotal={item.subTotal} addiction={item.addiction} deduction={item.deduction} total={item.total} />
        ))}
        </DivContainer>
        </div>
        <Footer></Footer>
        </>
    )
}

export default ListEstimate;