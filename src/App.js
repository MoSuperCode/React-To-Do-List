import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
import VIPS from './components/data/data';


function App() {
  return (
    <div className="App">
      {VIPS.map((VIP) => {
        return <ToDoList name={VIP.name} alter={VIP.alter} lachs={VIP.lachs} />;
      })}
    </div>
  );
}

export default App;
