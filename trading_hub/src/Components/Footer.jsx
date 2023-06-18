import React from 'react'

function Footer() {
  return (
    <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:"20px",
        position:"fixed",
        bottom:0,
        background:"white",
        width:"100%"
    }}>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-around",
            width:"75%"
        }}>
        <p style={{
            color:"gray",
            fontSize:"12px"
        }}><b>More Behance</b></p>
        <p>|</p>
        <p style={{
            color:"gray",
            fontSize:"12px"
        }}><b>English</b></p>
        <p>|</p>
        <p style={{
            color:"gray",
            fontSize:"12px"
        }}><b>Tou</b></p>
        <p style={{
            color:"gray",
            fontSize:"12px"
        }}><b>Privacy</b></p>
        <p style={{
            color:"gray",
            fontSize:"12px"
        }}><b>Community</b></p>
        <p style={{
            color:"gray",
            fontSize:"12px"
        }}><b>Help</b></p>
        <p style={{
            color:"gray",
            fontSize:"12px"
        }}><b>Cookie Preferences</b></p>
        <p style={{
            color:"gray",
            fontSize:"12px"
        }}><b>Do not sell or share my Personal Information</b></p>
        </div>
        
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwIcprjwGjIvQqqg1N-_XvNK0q-Y4R1OVGlqL_hx_FSrUtnt0ROwEQIR8_7we00ruN4H0&usqp=CAU" alt="error" style={{
                width:"40px"
            }}/>
        </div>
    </div>
  )
}

export default Footer;