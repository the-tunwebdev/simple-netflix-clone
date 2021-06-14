import React, { useEffect, useState } from "react";
import App from './App'
import './Final.css'

function Final() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
    setShow(!show);
    }, 2000)
  },[])

  if (loading) return (
        <div>
            <div className='center'>
               <div className="loadingio-spinner-rolling-jjlt12ujc5j back"><div className="ldio-2g3qz1phpmn">
                <div></div>
                </div></div>

            </div>

        </div>
        
    
  )

  return (
    <div className="">
      
      <div className="">
        
        {show && <App />}
      </div>
    </div>
  );
}
export default Final