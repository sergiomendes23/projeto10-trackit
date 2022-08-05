import Header from "./Header";
import Footer from "./Footer";
import Styled from "styled-components";


export default function Today(){

    function habitDays(){
        
    }
    return (
        <Container>
            <Header />
            <Menu>
                <Plus>Meus Hábitos</Plus>
                <Icon onClick={habitDays}>                    
                    +
                </Icon>
            </Menu>
            <Tasks>
                <TextHabit>
                </TextHabit>
                <DivDays>
                    <Days>                    
                    </Days>
                </DivDays>
                <OptionsButton>
                    <Cancel>Cancelar</Cancel>
                    <Save>Salvar</Save>
                </OptionsButton>
            </Tasks>            
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
const Icon = Styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 35px;
    font-weight: 700;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;
    cursor: pointer;
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
const Tasks = Styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
    margin-left: 20px;
    margin-bottom: 20px;
    position: relative
    
`
const TextHabit = Styled.input`
    position: absolute;
    width: 303px;
    height: 45px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend';
    font-size: 20px;
    color: #666666;
    font-weight: 400;
    padding-left: 10px;
    border-color: #DBDBDB;
    margin: 18px;
`
const Days = Styled.div`
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-left: 18px;
    Save
`
const DivDays = Styled.div`
    position: absolute;
    width: 100%;
    height: 50px;
    margin-top: 75px;
`
const OptionsButton = Styled.div`
    position: absolute;
    width: 100%;
    height: 50px;
    margin-top: 75px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: right;
    box-sizing: border-box;
    padding-right: 18px
`
const Save = Styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    border: none;
    font-family: 'Lexend';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
`
const Cancel = Styled.button`
    width: 84px;
    height: 35px;
    background: #ffffff;
    border-radius: 5px;
    border: none;
    margin-right: 10px;
    font-family: 'Lexend';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #52B6FF;
`