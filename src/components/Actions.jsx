import React from 'react';

const Actions = ({handleEat,handleWork,handlePlay,handleSleep,win,lose}) => {
    return (
        <div>
            <h3 className="nes-text is-warning is-rounded nes-container is-dark">Actions</h3>
            <div className="row p-2">
                <div className="col-6 my-4">
                    {
                        win || lose ? <button 
                                        className="nes-btn is-disabled" 
                                        onClick={(e) => handlePlay(e)}
                                        disabled
                                    >Play</button> :
                                    <button 
                                        className="nes-btn is-success" 
                                        onClick={(e) => handlePlay(e)}
                                    >Play</button>
                    }
                </div>
                <div className="col-6 my-4">
                    {
                        win || lose ? <button 
                                        className="nes-btn is-disabled" 
                                        onClick={(e) => handleSleep(e)}
                                    >Sleep</button> :

                                    <button 
                                        className="nes-btn is-success" 
                                        onClick={(e) => handleSleep(e)}
                                    >Sleep</button>
                    }
                </div>
                <div className="col-6 my-4">
                    {
                        win || lose ?   <button 
                                            className="nes-btn is-disabled" 
                                            onClick={(e) => handleWork(e)}
                                        >Work</button> : 
                                        <button 
                                            className="nes-btn is-success"
                                            onClick={(e) => handleWork(e)} 
                                        >Work</button>
                    }
                </div>
                <div className="col-6 my-4">
                    {
                        win || lose ?   <button 
                                            className="nes-btn is-disabled"
                                            onClick={(e) => handleEat(e)} 
                                        >Eat</button> :
                                        <button 
                                            className="nes-btn is-success"
                                            onClick={(e) => handleEat(e)} 
                                        >Eat</button>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default Actions;