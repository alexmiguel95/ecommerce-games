import React from "react";
import { useLocation } from "react-router-dom";
import ShoppingCard from '../../components/shopping-car';
import { UserOutlined } from '@ant-design/icons';
 
const ShoppingCarContainer = () => {
    const where = useLocation().pathname;
    const non_header_urls = ["/checkout"];
 
    if (non_header_urls.some((e) => e === where)) {
        return <UserOutlined style={{color: "white", fontSize: "30px", cursor: "pointer"}} />
    } else {
        return <ShoppingCard />
    }
}
 
export default ShoppingCarContainer;
