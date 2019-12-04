import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from './Header'
import Filter from './Filter'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route component={Filter} path="/"/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(App)