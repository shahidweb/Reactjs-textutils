import React from 'react'
// import Proptypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
              </li>
            </ul>
          </div>
          <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'black' : 'white'}`}>
            <input className="form-check-input" id="redMode" onClick={(event) => props.toggleMode(event, "danger")} type="radio" name="mode" />
            <label className="form-check-label" for="redMode">Enable Red Mode</label>
          </div>
          <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'black' : 'white'}`}>
            <input className="form-check-input" id="greenMode" onClick={(event) => props.toggleMode(event, "success")} type="radio" name="mode" />
            <label className="form-check-label" for="greenMode">Enable Green Mode</label>
          </div>
          <div className={`form-check mx-2 form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="lightMode" />
            <label className="form-check-label" htmlFor="lightMode">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
          </div>
        </div>

      </nav>
    </>
  )

  // Navbar.prototype = { title: Proptypes.string.isRequired, aboutText: Proptypes.string }
}
