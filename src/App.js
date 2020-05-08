import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";
import Charlie from './models/Charlie';
import Datchi from './components/Datchi';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [datchi,setDatchi] = useState(new Charlie());
  const [win,setWin] = useState(false);
  const [lose,setLose] = useState(false);
  const [rules,setRules] = useState([
    "Win: Happiness and Fullness must be filled.",
    "Lose: Happiness or Fullness is empty.",
    "Click WORK to earn meals.",
    "Click PLAY to increase Happiness.",
    "Click EAT to increase Fullness.",
    "Click SLEEP to gain Energy."
  ]);
  const [displayRules,setDisplayRules] = useState(false);

  useEffect(() => {
    if(datchi.fullness >= 100 && datchi.happiness >= 100){
      setWin(true);
    }
    else if(datchi.fullness <= 0 || datchi.happiness <= 0){
      setLose(true);
    }
  },[datchi])
  
  const handleRules = (e) => {
    setDisplayRules(!displayRules);
  }

  const reset = (e) => {
    setDatchi(new Charlie());
    setWin(false);
    setLose(false);
  }


  const handleEat =(e) => {
    let chance = Math.floor(Math.random() * 101);
    console.log(chance);
    if(datchi.meals === 0){
      setDatchi({
        ...datchi,
        message : "You have no more food.  You gotta work for it!"
      })
      return;
    }
    else if(chance <= 25){
      setDatchi({
        ...datchi,
        meals: datchi.meals - 1,
        img: "puke",
        message : "Charlie puked the food back up!!!"
      })
      return;
    }
    setDatchi({
      ...datchi,
      meals: datchi.meals - 1,
      img : "eat",
      fullness : datchi.fullness + (Math.floor(Math.random() * 10) + 5),
      message: "Milksteak with a side of Jelly Beans!!!"
    });

  }

  const handlePlay = (e) => {
    let chance = Math.floor(Math.random() * 101);
    if(datchi.energy === 0){
      setDatchi({
        ...datchi,
        message:"Charlie is tired, need sleep."
      })
      return;
    }
    else if(chance <= 25){
      setDatchi({
        ...datchi,
        energy: datchi.energy - 5,
        img:"cry",
        message : "Charlie no like, Dennis is the bad man."
      })
      return;
    }
    setDatchi({
      ...datchi,
      energy: datchi.energy - 5,
      happiness : datchi.happiness + (Math.floor(Math.random() * 10) + 5),
      img: "play",
      message : "Another successful game of night crawlers."
    })
  }

  const handleSleep = (e) => {
    setDatchi({
      ...datchi,
      happiness: datchi.happiness - 5,
      fullness: datchi.fullness - 5,
      energy: datchi.energy + 15,
      img: "sleep",
      message: "ZzzzzZzzzzzZzzzzz"
    })
  }

  const handleWork = (e) => {
    if(datchi.energy === 0){
      setDatchi({
        ...datchi,
        message:"Charlie is tired, no work more."
      })
      return;
    }
    let food = Math.floor(Math.random() * 3) + 1;
    setDatchi({
      ...datchi,
      meals: datchi.meals + food,
      energy: datchi.energy - 5,
      img: "work",
      message: "Charlie work is hard!"
    })
  }
  return (
    <div className="row justify-content-around p-2 py-4">
      <div className=" col-sm-12 col-md-4">
        <Dashboard
          datchi={datchi}
          handleEat={handleEat}
          handleWork={handleWork}
          handlePlay={handlePlay}
          handleSleep={handleSleep}
          win={win}
          lose={lose}
        />
      </div>
      <div className="col-md-8 col-sm-12" > 
        <Datchi
          datchi={datchi}
          win={win}
          lose={lose}
        />
        {
          win ? <h2 className="nes-text text-center my-5">Charlie Happy!!!</h2> : lose ? <h2 className="nes-text text-center my-5">Charlie no happy, you are the bad man.</h2> :  <p className="nes-text text-center my-5">{datchi.message}</p>
        }

        {
          win || lose ? <button 
                          className="nes-btn is-error col-12"
                          onClick={(e) => reset(e)}
                        >Reset</button> : 
                        <button
                          className="nes-btn is-success col-12"
                          onClick={(e) => handleRules(e)}
                        >Rules</button>
        }
        <ol className="nes-list is-disc text-center" >
          {
            displayRules ? rules.map((r,i) => <li className="m-2" key={i}>{r}</li> ) : null
          }

        </ol>


      </div>
    </div>
  );
}

export default App;
