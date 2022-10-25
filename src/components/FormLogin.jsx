import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form login">
        <h1 className="form-title">Oturum Aç</h1>
        <div className="form-group">
          <input className="form-group-input" type="text" required="true" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="form-group-label">Email</label>
        </div>
        <div className="form-group">
          <input className="form-group-input" name="password" required="true" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <label className="form-group-label">Şifre</label>
        </div>
        <button className="form-sign-in" type="submit">Oturum Aç</button>
        <div className="form-secondary-cta">
          <Link className="form-secondary-cta-text" to="/project-board">Beni Hatırla</Link>
        </div>
        <br />
      </form>
    </>
  )
}

export default FormLogin