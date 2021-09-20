import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CarrinhoBt.css';

class CarrinhoBt extends Component {
  render() {
    return (
      <Link to="/carrinho" data-testid="shopping-cart-button">
        <div className="bt-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" /></svg>
        </div>
      </Link>
    );
  }
}

export default CarrinhoBt;
