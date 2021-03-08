import React from "react";
import BannerInfoImportant from "../../components/banner-info-important";
 
const listMessage = ["O frete é grátis para compras acima de R$ 250,00."];

const bannerInfoImportantContainer = () => {
    return <BannerInfoImportant listMessage={listMessage}/>
}
 
export default bannerInfoImportantContainer;