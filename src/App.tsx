import { Button } from "./components/EventProps/Button";
import { Input } from "./components/EventProps/Input";
import { Greet } from "./components/BasicProps/Greet";
import { PersonList } from "./components/AdvancedProps/PersonList";
import { Status } from "./components/AdvancedProps/Status";
import { Container } from "./components/StyleProps/Container";
import { User } from "./components/hooks/UseState";
import { Box } from "./components/hooks/UseContext/Box";
import { ThemeContextProvider } from "./components/hooks/UseContext/UseContext";

function App() {
  const PersonListData = [
    {
      name: "Sanket",
      age: 27,
    },
    {
      name: "Sanket",
      age: 27,
    },
    {
      name: "Sanket",
      age: 27,
    },
    {
      name: "Sanket",
      age: 27,
    },
  ];
  return (
    <div className="App">
      {/* <Greet name="Sanket" count={27} isLoggedIn={true} />
      <PersonList list={PersonListData} /> */}
      {/* <Status status="error" /> */}
      {/* <Button handleClick={(event,id)=>console.log("clicked",event,id)} />
      <Input value='' handleChange={(e)=>console.log(e.target.value)} /> */}
      {/* <Container style={{border : '2px solid black',textAlign : 'center'}} /> */}
      {/* <User /> */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
