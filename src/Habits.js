import Header from "./Header";
import Footer from "./Footer";
import Styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import TokenContext from "./Context/TokenContext.js";


export default function Habits(){

    const [newHabit, setNewHabit] = useState (false);
    const [day, setDay] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [habit, setHabit] = useState("");
    const {token, userHabits, setUserHabits} = useContext(TokenContext);

    useEffect(getHabits, []); 

    const allDays = [
        {id: 0, name:"D", isSelected: false}, 
        {id: 1, name:"S", isSelected: false}, 
        {id: 2, name:"T", isSelected: false}, 
        {id: 3, name:"Q", isSelected: false}, 
        {id: 4, name:"Q", isSelected: false}, 
        {id: 5, name:"S", isSelected: false}, 
        {id: 6, name:"S", isSelected: false}
    ];

    const [selectedDay, setSelectedDay] = useState(allDays);

    function selectDay(id){
        const selectedDays = selectedDay.map((day) => {
            if(day.id === id){
                day.isSelectad = !day.isSelected
            }
            return day
        })
        setSelectedDay([...selectedDays])

        const daysTrue = selectedDay.filter((day) => day.isSelected === true);
        const daysId = daysTrue.map((day) => day.id);

        setDay([...daysId])

    }

    function sendHabits(){

        setIsLoading(true);

        const body={
            name: habit,
            days: day,
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)

            promise.then(response => {
                setHabit("");
                setDay([]);
                setSelectedDay(allDays);
                setNewHabit(false);
                setIsLoading(false);
                getHabits();
            })

            promise.catch(error => console.log(error))
    }

    function getHabits(){
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
        promise.then(response => {
            setUserHabits(response.data);
        });
    }

    function turnOff(action){
        if(isLoading){
            return () => "";

        }else{
            return action;

        }
    }

    

    return (
        <Container>
            <Header />
            <Menu>
                <Plus>Meus Hábitos</Plus>
                <Icon onClick={() => setNewHabit(!newHabit)}>                    
                    +
                </Icon>
            </Menu>
            <NewTask>
                {newHabit ? <Tasks>
                                <TextHabit isLoading={isLoading} placeholder="nome do hábito" value={habit} type="text" onChange={turnOff((e) => setHabit(e.target.value))}>
                                </TextHabit>
                                <DivDays>
                                        {selectedDay.map((day, index) => {return <Days onClick={() => selectDay(day.id)} selected={day.isSelected} key={index}>{day.name}</Days>})}
                                </DivDays>
                                <OptionsButton>
                                    <Cancel onClick={() => setNewHabit(!newHabit)}>Cancelar</Cancel>
                                    <Save type="submit" onClick={sendHabits}>Salvar</Save>
                                </OptionsButton>
                            </Tasks>
                :   
                ""
                }            
                <MyHabits>
                    <p>Você não tem hábito cadastrado ainda. Adicione um hábito para começar a trackear.</p>
                </MyHabits>                
            </NewTask>
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

    ::placeholder{
        color: #DBDBDB;;
    }
`
const Days = Styled.button`
    width: 30px;
    height: 30px;
    color: ${props => props.selected ? "#FFFFFF" : "#DBDBDB"};
    background-color: ${props => props.selected ? "#DBDBDB" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-left: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
`
const DivDays = Styled.div`
    position: absolute;
    width: 100%;
    height: 50px;
    margin-top: 75px;
    display: flex;
    margin-left: 14px;
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
const NewTask = Styled.div`

`