import React from 'react' 
import Space from './gummy-background.png'
function Map(props) {
    return (
        <div 
        style={{ 
            width: '800px', 
            height: '2000px',
            backgroundColor: 'black', 
            backgroundImage: `url('${Space}')`,
            border: '4px solid white',
            margin: '10px auto'
        }}
        />
    )
}

export default Map