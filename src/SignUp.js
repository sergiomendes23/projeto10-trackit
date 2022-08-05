import Styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {

    const Navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const body = {
        email,
        password,
        name,
        image,
    };
    
    function handleForm(e) {
        
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body);
        
        promise.then((res) => {
            console.log(res.data)
            Navigate("/")
        }) 
        promise.catch((err) => {
            alert('Preencha os campos novamente!')
        })   
        e.preventDefault();
        
    };
    
    return (
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
                <Name type="text"
                    placeholder="nome" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name}
                    required>   
                </Name>
                <Picture type="url"
                    placeholder="foto" 
                    onChange={(e) => setImage(e.target.value)} 
                    value={image}
                    required>   
                </Picture>
                <Cadastro onClick={handleForm}>Cadastrar</Cadastro>
                <LogOn to="/Header">Já tem uma conta? Faça login!</LogOn>
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
    cursor: pointer;
`
const LogOn = Styled(Link)`
    font-family: 'Lexend';
    font-weight: 400;
    font-size: 14;
    text-align: center;
    color: #52B6FF;
`