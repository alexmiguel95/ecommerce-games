import React from 'react';
import { Table, Button, Rate } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { addSoppingCar } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import imgCart from '../../assets/cart-icon.svg';
import imgAddCart from '../../assets/arrow-down-icon.svg';
import { useWindowSize } from "../../hooks";


const TableProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productsList);
    const [width] = useWindowSize();

    const calculateRate = (score) => {
        // Assumindo que temos 5 estrelas e o score máximo seja 400, cada estrela vale 80 pontos.
        const stars = [0, 80, 160, 240, 330];

        for(let i = 0; i < stars.length; i++){
            if(score < stars[i]) {
                return i;
            }
        }
 
        return 5;
    }

    const columns = [
        {
            dataIndex: 'image',
            render: nameImage => <img
                alt={`Imagem do jogo ${nameImage}`}
                src={require(`../../assets/${nameImage}`).default}
                style={{height: "7rem"}}
            />
        },
        {
            title: 'Nome',
            dataIndex: 'name',
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name["name"].indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name,
            sortDirections: ['descend']
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.price - b.price,
            render: price => <span>{`R$ ${price}`}</span>
        },
        {
            title: 'Avaliação',
            dataIndex: 'score',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.score - b.score,
            render: score => <Rate disabled value={calculateRate(score)} />
        },
        {
            render: (text, record) => (
                <StyledButtonBuy onClick={() => dispatch(addSoppingCar(text))}>
                    {" "}
                </StyledButtonBuy>
            ),
            align: 'center'
        }
    ];

    const columnsMobile = [
        {
            dataIndex: 'image',
            render: nameImage => <img
                alt={`Imagem do jogo ${nameImage}`}
                src={require(`../../assets/${nameImage}`).default}
                style={{height: "7rem"}}
            />
        },
        {
            title: 'Nome',
            dataIndex: 'name',
            onFilter: (value, record) => record.name["name"].indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name,
            sortDirections: ['descend']
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.price - b.price,
            render: price => <span>{`R$ ${price}`}</span>
        },
        {
            render: (text, record) => (
                <StyledButtonBuy onClick={() => dispatch(addSoppingCar(text))}>
                    {" "}
                </StyledButtonBuy>
            ),
            align: 'center'
        }
    ];
   
    if(width < 768){
        return (
            <Table columns={columnsMobile} dataSource={products} rowKey="id" />
        )
    }
    
    return (
        <Table columns={columns} dataSource={products} rowKey="id" />
    )
}

export default TableProducts

const StyledButtonBuy = styled(Button)`
    color: black;
    border-color: #0199CC;
    border-radius: 4px;
    width: 50px;
    background: #0199CC url(${imgCart}) no-repeat center;
    background-size: 30px 30px;
    font-weight: bold;
    margin-top: 10px;

    &:hover{
        background: #0199CC url(${imgCart}) no-repeat center;
        background-size: 30px 30px;
        color: white;
        border-color: #0199CC;
    }

    &:focus{
        background: #339933 url(${imgAddCart}) no-repeat center;
        background-size: 30px 30px;
        color: white;
        border-color: #339933;
    }
`;
