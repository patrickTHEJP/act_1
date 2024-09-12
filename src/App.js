import logo from './logo.svg';
import './App.css';

function App() {
  const profile = (name, age, loc) => {
    let nameVar = name;
    let ageVar = age;
    let locVar = loc;
  };

  return(
    <div classname="App">
      <header className="App-header">
        <div className= "row">
          <div className="container">
           <p>Name: {(profile.nameVar = "John Patrick Yusingco")}</p>
           <p>Age: {(profile.ageVar = 21)}</p>
           <p>Location{(profile.locVar = "Quezon City")}</p>
          </div>
           <div className="container">
           <p>Name: {(profile.nameVar = "Jane doe")}</p>
           <p>Age: {(profile.ageVar = 26)}</p>
           <p>Location: {(profile.locVar = "Quezon City")}</p>
          </div>
          < div className="container">
           <p>Name: {(profile.nameVar = "Ace Reyes")}</p>
           <p>Age: {(profile.ageVar = 27)}</p>
           <p>Location: {(profile.locVar = "Valenzuela")}</p>
          </div>
        </div>
      </header>
    </div>
    
  )
  
}

export default App;
