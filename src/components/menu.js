import React, {Component} from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components'


const Nav = styled.nav `
    

    .navbar-menu {
        position:fixed;
        transition:all .5s ease-in-out;
        background-color: white;
        width:100%;
        color:#6B8090;
        z-index:10;
        height:100%;
        top:-5px;
        left:-100%;
    }



    .is-active {
        transition:all .5s ease-in-out;
        transform:translateX(100%);

    }


   .clicked-menu .line:nth-child(2){
      opacity: 0;
    }
    
   .clicked-menu .line:nth-child(1){
          transform: translateY(9px) rotate(45deg);
          background-color: #6B8090;
      }
        
   .clicked-menu .line:nth-child(3){
          transform: translateY(-9px) rotate(-45deg);
          background-color: #6B8090;
      
  }

 

    .menu-button {
        border:none;
        background-color:white;
        border-radius: 0px 0px 12px 0px;
        position:fixed;
        top:0;
        left:0;
        z-index:12;
        padding:1rem;
        cursor:pointer;

        p {
          font-size:1.5rem;
          transition:opacity 0.3s linear;
        }

        
      }

      .clicked-menu {
        border-radius: 0px 0px 0px 0px;

        p {
          opacity:0;
        }
        
      }
      
      .line {
        width:2rem;
        height:2.5px;
        display: block;
        margin: 6px auto;
        transition: all 0.3s ease-in-out;
        border-radius: 20px;
        background-color: #6B8090;
      }

      ul {
            list-style-type:none;
            text-align:left;
            padding-top:4rem;
            margin-right:1rem;

            
        }

        li {
          cursor:pointer;
        }

        .navbar-link {
            color:#6B8090;
            text-decoration:none;
            font-size:2rem;
            font-family:montserrat;
            display:block;
            line-height:1.5;

            &:hover {
              
            }
          
  

        .blog-tag {
          display:none;
          font-size:.8rem;
          color:white;
          text-decoration:none;
          padding-left:2rem;
        }

        .clicked-place, .clicked-activity {
          display: block;
        }

        
`

export default class Menu extends Component {
  
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
      
    })
  }

 
  render() {
    const menuActive = this.state.showMenu ? 'is-active' : '';
    const menuClicked = this.state.showMenu ? 'clicked-menu' : '';


      return (     
  <Nav className="navbar">
    <div className={`menu-button ${menuClicked}`} onClick={this.toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
    </div>
  <div className={`navbar-menu ${menuActive}`}>

    
  
  
  <div >
    <div>
    <ul>
      <li>
        <Link className="navbar-link" to="/" onClick={this.toggleMenu}>
          <em>Home</em>
        </Link>
        <hr />
        <Link className="navbar-link" to="/featurelisting" onClick={this.toggleMenu}>
          <em>Features</em>
        </Link>
        <hr />
        <Link className="navbar-link" to="/about" onClick={this.toggleMenu}>
          <em>About</em>
        </Link>
        <hr />
      </li>
      </ul>

    </div>
  </div>
  </div>
</Nav>
)
  }
};