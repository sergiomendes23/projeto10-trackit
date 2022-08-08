import Styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <Container>
            <Options>
                <Link to="/Habits" style={{textDecoration: 'none', color: "#52B6FF", cursor: "pointer"}}><p>Hábitos</p></Link>
                <Link to="/History" style={{textDecoration: 'none', color: "#52B6FF", cursor: "pointer"}}><p>Histórico</p></Link>
            </Options>
        </Container>
    )
}

const Container = Styled.div`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
`
const Options = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 25px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    
    
`
