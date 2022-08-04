import Header from "./Header";
import Footer from "./Footer";
import Styled from "styled-components";


export default function Habits(){
    return (
        <Container>
            <Header />
            <Menu>
                <Plus>Meus Hábitos</Plus>
                <Icon>
                    <img src="./img/Max.png" />
                    <p>+</p>
                </Icon>
            </Menu>
            <MyHabits>
                <p>Você não tem hábito cadastrado ainda. Adicione um hábito para começar a trackear.</p>
            </MyHabits>
            <>
                <Footer />
            </>   
        </Container>
    )
}

const Container = Styled.div`
    background-color: #F2F2F2;
`

const Menu = Styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
`
const Plus = Styled.h1`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    color: #126BA5;
`
const Icon = Styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    & img{
        position: absolute;
    }
    & p{
        position: relative;
        color: #ffffff;
        font-size: 35px;
        font-weight: 700;
    }
`
const MyHabits = Styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;

    & p{
        font-family: 'Lexend';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`