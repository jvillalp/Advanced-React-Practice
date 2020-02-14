import React from 'react';

const PlayerCard = props => {
    const {name, rank, team} = props.player;
    return (
        <div className='card-wrapper'>
            <p className='card-name'>{name}</p>
            <p className='card-rank'>{rank}</p>
            <p className='card-team'>{team}</p>
        </div>
    )
};
export default PlayerCard;
