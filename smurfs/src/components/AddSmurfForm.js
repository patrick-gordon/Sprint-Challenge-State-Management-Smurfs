import React, {useState}from 'react'

function AddSmurfForm ({ addingSmurf, postData, smurfs}) {
    const [tempSmurf, setTempSmurf] = useState({ name: '', age: 0, height: 0 + 'cm'})

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            postData(tempSmurf)
            console.log(smurfs)
        }}>
            <label htmlFor='name'>Name</label>
            <input
                type='text'
                id='name'
                onChange={(e) => setTempSmurf({...tempSmurf, name: e.target.value})}></input>
            
            <label htmlFor='age'>Age</label>
            <input
                type='number'
                id='age'
                onChange={(e) => setTempSmurf({ ...tempSmurf, age: e.target.value})}></input>
            
            <label htmlFor='height'>height</label>
            <input
                type='number'
                id='height'
                onChange={(e) => setTempSmurf({ ...tempSmurf, height: e.target.value})}></input>

                <button type='submit'>ADD Smurf</button>

            </form>
    )
}

export default AddSmurfForm