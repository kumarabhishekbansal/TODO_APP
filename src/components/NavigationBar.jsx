import React from 'react'
import {NavLink} from 'react-router-dom'
const NavigationBar = () => {
  return (
    <>
        <div className="navbar_div d-flex justify-content-between">
            <div className="logn">
                <h2 className="logoh">
                <NavLink to="/" className="logonav"><span>T</span><span>O</span><span>D</span><span>O</span></NavLink>
                    
                </h2>
            </div>

            <div className="abfq d-flex justify-content-around  w-50">
                <div className="aboutn">
                    <NavLink className="text-decoration-none text-white com" to='/about'>About</NavLink>
                </div>

                <div className="faqn">
                    <NavLink className="text-decoration-none text-white com" to='/Faq'>FAQ's</NavLink>
                </div>
            </div>
        </div>
    </>

  )
}

export default NavigationBar