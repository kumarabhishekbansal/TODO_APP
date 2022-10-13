import React from 'react'
import './style2.css'
const Footer = () => {
  return (
   <>
    <section id="footer" className="top-content ">
            <div id="main_footer" className="main-footer border border-warning d-flex flex-column flex-wrap">
                <div className="f1 d-flex justify-content-evenly flex-wrap">
                    <div className="get mt-5">
                        <h2 className="headfget mt-5">
                            Get to Know Us
                        </h2>
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#services">My Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#interest">Interested</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#contact">Contact Me</a>
                            </li>


                        </ul>
                    </div>

                    <div className="connect mt-4">
                        <h2 className="headf">connect with us</h2>
                        <ul className="d-flex flex-column justify-content-between h-75">
                            <li className="mt-1 list-unstyled"><a href="https://www.instagram.com/abhi_s.he.k?r=nametag"><i 
                                aria-hidden="true"></i> Instagram</a>
                            </li>
                            <li className="mt-1 list-unstyled"><a href="https://www.instagram.com/abhi_s.he.k?r=nametag"><i
                                aria-hidden="true"></i>Twitter</a>
                            </li>
                            <li className="mt-1 list-unstyled"><a href="https://www.linkedin.com/in/abhishek-1a9541205"><i 
                                aria-hidden="true"></i> Linkedin</a>
                            </li>
                            <li className="mt-1 list-unstyled"><a href="https://www.linkedin.com/in/abhishek-1a9541205"><i 
                                aria-hidden="true"></i>Whatsapp</a>
                            </li>
                            <li className="mt-1 list-unstyled"><a href="https://wa.me/qr/P4LWKZTWO346I1"><i aria-hidden="true"></i>Facebook</a></li>
                        </ul>

                    </div>
                </div>             
            </div>
        </section>
   </>
  )
}

export default Footer