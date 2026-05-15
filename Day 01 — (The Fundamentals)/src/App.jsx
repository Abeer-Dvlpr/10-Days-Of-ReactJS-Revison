import Greeting from "./components/Greeting"
import Box from "./components/Box"
import Card from "./components/Card";
import { Profile } from "./components/Profile";

function App() {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const profiles = [ { id: 1, name: "Abeer", age: 16, skill: "React" }, { id: 2, name: "Abdullah", age: 13, skill: "JavaScript" }, { id: 3, name: "Ahmed", age: 15, skill: "Python" }, ];
  return (
    <>
      <h1 className="text-xl text-center p-4">Practice - 01</h1>
      <Greeting name="Abeer" />
      <h1 className="text-xl text-center p-4">Practice - 02</h1>
      <Box title="Avengers" description="Avengers are  " />
      <h1 className="text-xl text-center p-4">Practice - 03</h1>
      <ul className="list-disc list-inside">
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <h1 className="text-xl text-center p-4">Practice - 04</h1>
      <Card>
        <p>This is a paragraph inside the Card component.</p>
      </Card>
      <h1 className="text-xl text-center p-4">⭐ Day 01 Challenge</h1>
<div className="p-6">
      {profiles.map((profile) => (
        <Profile key={profile.id} name={profile.name} age={profile.age} skill={profile.skill} />
      ))}
    </div>
    </>
  )
}

export default App
