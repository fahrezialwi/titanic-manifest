import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <nav className="navbar pl-0 pr-0 navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">Titanic Manifest</a>
                </div>
            </nav>
        )
    }
}

export default Header