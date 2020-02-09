import React from 'react';

const Random = props => {

    const {err, city, temp, country} = props.weather

    let content = null;
    if(!err && city){
        content = (
            <>
            <div><em>{`CURRENTLY IN ${city}, ${country}, IT'S`}</em></div>
            <div>{`${Math.round(temp)}°C`}</div>
            </>
        )
    }
    return (
        <>
            <div className="result">
                {err ? `Missing city ${city}` : content}
            </div>
        </>
    )
}

export default Random