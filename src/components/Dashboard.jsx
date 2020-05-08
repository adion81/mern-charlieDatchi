import React from 'react';
import Stats from './Stats';
import Actions from './Actions';

const Dashboard = ({datchi,handleEat,handleWork,handleSleep,handlePlay,win,lose}) => {
    return (
        <div className="nes-container with-title is-centered">
            <p className="title">Datchi Dashboard</p>
            <Stats
                energy={datchi.energy}
                meals={datchi.meals}
                full={datchi.fullness}
                hap={datchi.happiness}
            />
            <div className="col-12 nes-container p-0 my-5" style={{height: "2px"}}></div>
            <Actions
                handleEat={handleEat}
                handleWork={handleWork}
                handlePlay={handlePlay}
                handleSleep={handleSleep}
                win={win}
                lose={lose}
            />
        </div>

    );
}

export default Dashboard;