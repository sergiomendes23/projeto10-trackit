import Styled from "styled-components";


export default function Header(){
    return (
        <>
            <Topo>
                <img src="./img/Logo.png" />
                <div></div>
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

    & div {
        width: 50px;
        height: 50px;
        background-color: #ffffff;
        border-radius: 50px;
    }
`
