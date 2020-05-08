import React from 'react';

const Stat = ({stat,level}) => {
    return (
        <div className="col-6 my-2">
            <h6>{stat}</h6>
            {
                stat === "Meals" ? <h5 className="my-3">{level}</h5> :
                    <progress 
                        className={level <= 25 ? "nes-progress is-error":
                                        level >25 && level <=50 ? "nes-progress  is-warning" : 
                                            level > 50 && level <=75 ? "nes-progress is-success" : "nes-progress is-primary"
                        } 
                        value={level} 
                        max="100"
                    ></progress>
            }
        </div>
    );
}

export default Stat;