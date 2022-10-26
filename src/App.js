import logo from './logo.svg';
import './App.css';
import GoalAdd from './components/Goal/Add/GoalAdd'; 
import GoalList from './components/Goal/list/GoalList';
import React , {useState} from 'react'

const App= () =>
{

  let dataPrototype = [{name:"Start a Gratitude Journal"},
  {name:"Create a Life Plan"},
  {name:"Develop a Healthy Exercise Routine"},
  {name:"Find a Way to Give Back"}
  ];

  let getFromLocalStorage = JSON.parse(localStorage.getItem("storeGoal"));
  // console.log(getFromLocalStorage);

  const [GoalDb,setGoalDb] = useState(dataPrototype);

  const addNewGoalHandler = (newGoal) =>
  {
    setGoalDb(GoalDb.concat(newGoal));
    // newGoal != '' ? GoalDb.push(newGoal):newGoal;
    dataPrototype.push(newGoal)
    localStorage.setItem("storeGoal", JSON.stringify(dataPrototype));
    console.log(GoalDb);
  }

  return (
    <div>
      <GoalAdd newGoal={addNewGoalHandler} />
      <GoalList Goals={dataPrototype} />
    </div>    
  );
}

export default App;
