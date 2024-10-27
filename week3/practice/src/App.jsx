import './App.css'
import Card from "./components/Card"
import { members } from './data';
import styled from "@emotion/styled";

function App() {
  return <>
    <Grid>
      { members.map((member) => ( <Card name={member.name} enName={member.englishName} github={member.github} />)) }
    </Grid>
    </>
  
}

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export default App;
