import React, { Component } from 'react';

const NavItem = props => {  
  const pageURI = window.location.pathname+window.location.search;
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link";

  return(
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}

class NavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }

  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"
          onClick={(e) => {this.showDropdown(e)}}
          onBlur={(e) => {this.showDropdown(e)}}>
          {this.props.name}
        </a> 
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    );
  }
}

export default class Navigation extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
            <NavItem path="/" name="Home" />
            <NavItem path="/resources" name="Resources" />
            <NavItem path="/frameworks" name="Frameworks" />
            <NavItem path="/languages" name="Languages" />

            <NavDropdown name="Settings">
              <a className="dropdown-item" href="/">Change Password</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Logout</a>
            </NavDropdown>
                
          
          
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}