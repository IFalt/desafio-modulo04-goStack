import React, {Component} from 'react'

class Header extends Component {
  render(){
    return(
      <header>
        <div className="menu-header">
          <strong>facebook</strong>
          <small>Meu perfil</small>
        </div>
      </header>
    );
  }
}

export default Header