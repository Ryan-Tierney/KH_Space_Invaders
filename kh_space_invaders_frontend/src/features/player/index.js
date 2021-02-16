import React from 'react' 
import gummiShip from './Gummi_Ship.png'
import { connect } from 'react-redux'

function Player(props) { 
    return (
        <div
            style={{
                position: 'relative',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${gummiShip}')`,
                backgroundPosition: '0 0',
                width: '75px',
                height: '75px',
            }}
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}
export default connect(mapStateToProps) (Player)