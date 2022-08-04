import Styled from "styled-components";

export default function Footer(){
    return (
        <Container>
            <Options>
                <p>Hábitos</p>
                <p>Histórico</p>
            </Options>
        </Container>
    )
}

const Container = Styled.div`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
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
    color: #52B6FF;
`
