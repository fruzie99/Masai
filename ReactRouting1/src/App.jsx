import Counter from "./components/Counter";
import Calculator from "./components/Calculator";
import MessageCard from "./components/MessageCard";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Q1: Counter</h2>
      <Counter />

      <hr />

      <h2>Q2: Calculator</h2>
      <Calculator />

      <hr />

      <h2>Q3: Reusable Message Cards</h2>
      <MessageCard title="Hello" message="This is the first message" />
      <MessageCard title="React" message="Props make components reusable" />
      <MessageCard title="Masai" message="React assignment completed" />

      <hr />

      <h2>Q4: Parent → Child Props</h2>
      <UserProfile />
    </div>
  );
}

export default App;
