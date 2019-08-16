import React from "react";
import "./App.css";

import { connect } from "react-redux";
import { titleFX, getData, postData, deleteData } from './actions'
import Smurf from "./components/Smurf";
import AddSmurfForm from "./components/AddSmurfForm";

function App({
  titleFX,
  getData,
  title,
  error,
  smurfs,
  isLoading,
  addingSmurf,
  postData
}) {
  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={() => titleFX()}>Change Title</button>

      <AddSmurfForm
        postData={postData}
        addingSmurf={addingSmurf}
        smurfs={smurfs}
      />

      {console.log("smurfs from APP", smurfs)}
      <button onClick={() => getData()}>Get Smurfs</button>
      {smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} deleteData={deleteData}/>)}
    </div>
  );
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    title: state.title,
    error: state.error,
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    addingSmurf: state.addingSmurf
  }
}

const ConncedApp = connect(
  mapStateToProps,
  { titleFX, getData, postData, deleteData }
)(App)

export default ConncedApp;
