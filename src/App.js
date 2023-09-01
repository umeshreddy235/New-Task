import React,{useState}from 'react';
import Draggable from "react-draggable";


import './App.css';

function App() {
  
  const [popup,setPop]=useState(false)
  const handleClickOpen=()=>{
      setPop(!popup)
  }
  const closePopup=()=>{
      setPop(false)
    
  }

  return (
    <>
      <div className="app">
        <div className='normalCard'>
       
        <div>
              <div className='card'>
                <button className='buttonOne' onClick={handleClickOpen}>Save</button>

                 {/* popup */}
                <div>
                    {
                      popup?
                        <Draggable>
                          <div className="main">
                              <div className="popup">
                                  <div className="popup-header">
                                      <h1 onClick={closePopup} className='xOne'>x</h1>
                                    </div>
                                </div>
                          </div>
                            
                        </Draggable>:""
                        }
                 </div>
              </div>
              
        </div>

          
        <div>
          {/* left side Section */}
              <div className='mainCard'>
                    <div className='leftCard'>
                      <div className='lefSmallCard'>
                            <div className='smallCard'>

                            </div>
                            <div className='smallCard'>

                            </div>
                            <div className='smallCard'>

                            </div>
                            <div className='smallCard'>

                            </div>
                            <div className='smallCard'>

                            </div>
                            <div className='smallCard'>

                            </div>
                            <div className='smallCard'>

                            </div> 
                            <div className='smallCard'>

                            </div>
                            <div className='smallCard'>

                            </div>
                            <div className='smallCard'>

                            </div>
                            <div className='smallCard'>

                            </div>  
                      </div>
                    </div>

                      {/* Middle Card */}
                      <div className='middleCard'>

                            
                      </div>
                  
                      <div>
                        <div className='rightCard'>

                        </div>
                      </div>
                </div>
            </div>   
        </div>
           
    </div>
      
      
    </>
  );
}

export default App;
