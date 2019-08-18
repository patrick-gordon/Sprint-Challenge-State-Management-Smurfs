import React from 'react'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions/smurfAction'


function Smurf(smurf, props) {
    // {console.log(smurf)}
    return(
        <section>
            <h4>HI I am {smurf.name}!</h4>
            <p>I am {smurf.age} years old and only {smurf.height} tall</p>
            <button onClick={(e) => {
             props.deleteSmurf(smurf.id)
            }}>Delete the Smurf!</button>
        </section>
    )
}

export default connect(
    null, {  deleteSmurf }
  )(Smurf)