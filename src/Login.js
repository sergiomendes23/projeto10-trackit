import Styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function sendForm(e) {
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body);
        
        promise.then(res => {console.log(res.data)});

        promise.catch((err) => {
            alert('Preencha os campos novamente!')
        })   
        e.preventDefault();
    }
    const body = {
        email,
        password,
    };


    return(
        <form>
            <Container>
                <Logo>
                    <img src="./img/Trackit.png" />
                </Logo>
                <Email type="email"
                    placeholder="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                    required>                    
                </Email>
                <Password type="password"
                    placeholder="senha" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                    required>                    
                </Password>
                <Enter onClick={sendForm}>
                    <Go to="/Today" style={{textDecoration: 'none'}}>Entrar</Go>
                </Enter>                
                <Sign to="/SignUp">Não tem uma conta? Cadastre-se!</Sign>
            </Container>
        </form>
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
const Enter = Styled.button`
    width: 303px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #52B6FF;
    font-family: 'Lexend';
    font-weight: 400;
    font-size: 22px;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    margin-bottom: 15px;
    cursor: pointer;
`
const Go = Styled(Link)`
    color: #ffffff;
`
const Sign = Styled(Link)`
    font-family: 'Lexend';
    font-weight: 400;
    font-size: 14;
    text-align: center;
    color: #52B6FF;
`