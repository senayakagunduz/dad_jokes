import React from "react";
import "../style/style.css";

const Jokes = ({getJoke,data}) => {
  return (
    <div>
      <form className="form" onSubmit={(e)=>{e.preventDefault();
      getJoke();}}>
        <h1 className="heading">Dad Jokes Generator</h1>
        <div className="joke">
          <p className="joke" id="joke">
            {data} 
          </p>
        </div>
        <div className="btn-div">
          <button type="button" className="btn" id="btn" onClick={()=>getJoke()}>
            Tell me a joke
          </button>
        </div>
      </form>
    </div>
  );
};
export default Jokes;
