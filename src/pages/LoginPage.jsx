import React from 'react'
import FormLogin from '../components/FormLogin';
import Icon from "../static/marmaraLogo.png";

function LoginPage() {
  return (
    <>
      <div className='form-section'>
        <a className="logo" href="https://teknoloji.marmara.edu.tr/">
          <img src={Icon} alt="Marmara Logo"/>
        </a>
          <FormLogin/>
      </div>
    </>
  )
}

export default LoginPage