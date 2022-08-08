import Styled from "styled-components";
import { useContext } from 'react';
import TokenContext from "./Context/TokenContext.js";


export default function Header(){

    const {image} = useContext(TokenContext);

    return (
        <>
            <Topo>
                <h1>TrackIt</h1>
                <Image src={image} />
            </Topo>
        </>
    )
}

const Topo = Styled.div`
    width: 100%;
    height: 70px;
    background: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    & h1{
        font-family: 'Playball';
        font-weight: 400;
        font-size: 39px;
        line-height: 50px;
        color: #FFFFFF;
    }
`
const Image = Styled.img`
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 50px;
`
