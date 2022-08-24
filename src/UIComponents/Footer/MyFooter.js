import React from 'react'
import "./style.css"
import footerImg from "../../assets/dwa.svg"

export const MyFooter = () => {
  return (
    <>
    <div className="d-flex justify-content-around footer-div mt-5">
    <div className="d-flex justify-content-around col-4">
    <div className="first-div col-2">
        <div className="footer-image_div">
          <img src={footerImg} alt="" className='footer-image'/>
        </div>
        <div className="footer-image_btStyle">
          <div className="community-div">
        <button className='community-btn'>Join The Community</button>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-around mt-5 col-8">
      <div className="second-div col-2">
        <h5 className='fw-bold text-light'>THE BASICS</h5>
<h6 className='text-light'>
About TMDB
</h6>
<h6 className='text-light'>
Contact Us
</h6>
<h6 className='text-light'>
Support Forums
</h6>
<h6 className='text-light'>
API
</h6>
<h6 className='text-light'>
System Status
</h6>
      </div>
      <div className="col-2">
      <h5 className='fw-bold text-light'>GET INVOLVED</h5>
<h6 className='text-light'>
Contribution Bible
</h6>
<h6 className='text-light'>
Add New Movie
</h6>
<h6 className='text-light'>
Add New TV Show
</h6>
      </div>
      <div className="col-2">
        <h5 className='fw-bold text-light'>COMMUNITY</h5>
<h6 className='text-light'>
Guidelines
</h6>
<h6 className='text-light'>
Discussions
</h6>
<h6 className='text-light'>
Leaderboard
</h6>
<h6 className='text-light'>
Twitter
</h6>
      </div>
      <div className="col-2">
      <h5 className='fw-bold text-light'>LEGAL</h5>
<h6 className='text-light'>
Terms of Use
</h6>
<h6 className='text-light'>
API Terms of Use
</h6>
<h6 className='text-light'>
Privacy Policy
</h6>
      </div>
    </div>
    </div>
    </>
  )
}
