import React from "react";
import ListPaymentMethods from "../../components/list-payment-methods";
 
const paymentMethods = [
    {"title": "PAYPAL"},
    {"title": "BOLETO"},
    {"title": "PIX"},
    {"title": "CARTÃO DE CRÉDITO"}
];

const MethodsPaymentContainer = () => {
    return <ListPaymentMethods listMethods={paymentMethods}/>
}
 
export default MethodsPaymentContainer;
