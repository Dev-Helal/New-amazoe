import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min';

const Header = () => {
    return (
        <div className='header-container sticky-top'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand" href="/navbar">
                        <img src={logo} alt="" />
                    </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/shop">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/order-review">Ordr Review</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/inventory">Inventory</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;