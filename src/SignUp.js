import Styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUp() {
    return(
        <Container>
            <Logo>
                <img src="./img/Trackit.png" />
            </Logo>
            <Email placeholder="email"></Email>
            <Password placeholder="senha"></Password>
            <Name placeholder="nome"></Name>
            <Picture placeholder="foto"></Picture>
            <Cadastro >Cadastrar</Cadastro>
            <LogOn to="/Header">Já tem uma conta? Faça login!</LogOn>
        </Container>
    )
}

const Container = Styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Logo = Styled.div`
    width: 180px;
    height: 180px;
    margin-top: 100px;
    margin-bottom: 50px;
`
const Email = Styled.input`
    width: 303px;
    height: 45px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 15px;
    font-family: 'Lexend';
    font-size: 20px;
    color: #666666;
    font-weight: 400;
    padding-left: 10px;
    border-color: #DBDBDB;

    ::placeholder{
        font-family: 'Lexend';
        font-size: 20px;
        color: #DBDBDB;
        font-weight: 400;
    }
`
const Password = Styled.input`
   width: 303px;
    height: 45px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 15px;
    font-family: 'Lexend';
    font-size: 20px;
    color: #666666;
    font-weight: 400;
    padding-left: 10px;
    border-color: #DBDBDB;

    ::placeholder{
        font-family: 'Lexend';
        font-size: 20px;
        color: #DBDBDB;
        font-weight: 400;
    }
`
const Name = Styled.input`
    width: 303px;
    height: 45px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 15px;
    font-family: 'Lexend';
    font-size: 20px;
    color: #666666;
    font-weight: 400;
    padding-left: 10px;
    border-color: #DBDBDB;

    ::placeholder{
        font-family: 'Lexend';
        font-size: 20px;
        color: #DBDBDB;
        font-weight: 400;
    }
`
const Picture = Styled.input`
    width: 303px;
    height: 45px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 15px;
    font-family: 'Lexend';
    font-size: 20px;
    color: #666666;
    font-weight: 400;
    padding-left: 10px;
    border-color: #DBDBDB;

    ::placeholder{
        font-family: 'Lexend';
        font-size: 20px;
        color: #DBDBDB;
        font-weight: 400;
    }
`
const Cadastro = Styled.button`
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    font-family: 'Lexend';
    font-weight: 400;
    font-size: 22px;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    margin-bottom: 15px;
`
const LogOn = Styled(Link)`
    font-family: 'Lexend';
    font-weight: 400;
    font-size: 14;
    text-align: center;
    color: #52B6FF;
`