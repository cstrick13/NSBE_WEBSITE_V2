import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className='sb_footer footer-section-padding'>
                <div className='footer-links'>
                    <div className='footer-links-div'>
                        <h4>National Information</h4>
                        <p>205 Daingerfield Rd Alexandria, VA 22314</p>
                        <p>Phone: 703.549.2207</p>
                        <p>Fax: 703.683.5312</p>
                        <p>Website: NSBE.org</p>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Louisiana Tech Chapter</h4>
                        <p>600 Dan Reneau Dr, Ruston, LA 71270</p>
                        <p>Phone: 318.527.2000</p>
                        <p>Email: nsbelatech.sec@gmail.com</p>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Check Us Out</h4>
                        <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-tiktok"></i>
                            </div>
                    </div>
                </div>
                <hr></hr>
                <div className='footer-below'>
                    <p>© 2023 Designed and Maintained by NSBE Telecoms</p>
                    <p>"Icon made by Freepik from www.flaticon.com"</p>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Footer