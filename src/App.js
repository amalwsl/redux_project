import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import { Card } from 'react-bootstrap';




function App() {
  return (
    <div className="App"  >
      <Card body style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',marginTop:"10%",marginBottom:'2rem',color:"#037ef3",boxShadow: ' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',width:'60%',marginLeft:"20%"}}>
        <AddTask/>
        <TaskList/>
        </Card>  
    </div>
  );
}

export default App;
