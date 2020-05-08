import React from 'react';

import charlie from '../assets/img/charlie.jpg';
import work from '../assets/img/charlieWork.jpg';
import winGame from '../assets/img/charlieWin.jpg';
import eat from '../assets/img/charlieEat.jpg';
import puke from '../assets/img/charliePuke.jpg';
import loseGame from '../assets/img/charlieLose.jpg';
import sleep from '../assets/img/charlieSleep.jpg';
import play from '../assets/img/charliePlay.jpg';

const Datchi = ({datchi,win,lose}) => {
    return (
        <div className="nes-container with-title is-centered">
            <h2 className="title">{datchi.name}</h2>
            <img  
                className="nes-container is-rounded is-dark col-5" 
                src={
                    lose ? loseGame :
                        win ? winGame :
                            datchi.img ==="work" ? work : 
                                datchi.img === "eat" ? eat :
                                    datchi.img === "puke" ? puke :
                                        datchi.img === "sleep" ? sleep :
                                            datchi.img === "play" ? play :
                                                charlie
                } 
                alt={datchi.name}/>
        </div>
    );
}

export default Datchi;