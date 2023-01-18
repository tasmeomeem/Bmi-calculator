import React, { useState } from 'react';


function Home() {
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [bmi, setBMI] = useState(null);
    const [status, setStatus] = useState("");
  
    const onSetWeight = e => {
      const value = e.target.value;
      setWeight(value);
    }
  
    const onSetHeight = e => {
      const value = e.target.value;
      setHeight(value);
    }
  
    const calculateBMI = () => {
      const height2 = height * height;
      const result = weight / height2;
      setBMI(result.toFixed(2));
      let bmiStatus = "obese";
      if (result < 18.5) {
        bmiStatus = "Underweight";
      } else if (result >= 18.5 && result <= 24.9) {
        bmiStatus = "Healthy";
      } else if (result >= 25 && result <= 29.9) {
        bmiStatus = "Overweight"
      } else {
        bmiStatus = "Obese";
      }
  
      setStatus(bmiStatus)
    }
  
    return (
          <div className="App">
              <div className="fs-1 fw-bold">BMI Calculator</div>
              <div className="fs-3">This calculate your body mass index.</div>
              <div className="card-body">
                  <div>
                      <label>Weight</label>
                      <input value={weight} onChange={onSetWeight} />
                  </div>
  
                  <div>
                      <label className='height'>Height</label>
                      <input value={height} onChange={onSetHeight} />
                  </div>
  
                  <div>
                      <button className="button" disabled={!weight || !height} onClick={calculateBMI}>What's my BMI</button>
                  </div>
  
                  <div>
                      <span className="bmi">your BMI is_ {bmi}, </span>
                      <span className="bmi">You are {status}</span>
                  </div>
              </div>
  
  
          </div>
      );
  }
  export default Home;