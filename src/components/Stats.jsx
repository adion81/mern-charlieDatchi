import React from 'react';
import Stat from './Stat';

const Stats = ({energy,meals,full,hap}) => {
    return (
        <div  >
            <h3 className="nes-text is-primary nes-container is-dark is-rounded">Stats</h3>
            <div className="row">
                <Stat 
                    level={hap}
                    stat="Happiness"
                />
                <Stat 
                    level={full}
                    stat="Fullness"
                />
                <Stat 
                    level={energy}
                    stat="Energy"
                />
                <Stat 
                    level={meals}
                    stat="Meals"
                />

            </div>

        </div>
    );

}

export default Stats;