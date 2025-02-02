import React from 'react';
import "./FooterStyle.css";

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }
  return (
    <>
    <br/> <br/> <br/> <br/> <br/> <br/>
    <div className='footer'>
        Made with ❤ by Parth Lathiya <span style={styleSymbol}>©</span> 2024
    </div>
    </>
  )
}
