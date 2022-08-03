import Header from "./Header";
import Footer from "./Footer";
import Styled from "styled-components";


export default function Habits(){
    return (
        <Container>
            <>
                <Header />
                
                <Footer />
            </>
            
        </Container>
    )
}

const Container = Styled.div`

`

/*const MyHabits = Styled.div`
    width: 100%;
    height: 70px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
`

<MyHabits>
    <h1>Meus Hábitos</h1>
    <img src="./img/Max.png" />
</MyHabits>*/