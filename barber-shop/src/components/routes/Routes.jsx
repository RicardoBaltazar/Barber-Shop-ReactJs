import React from 'react'

import { HashRouter, Route, Redirect } from 'react-router-dom'
//import { BrowserRouter, Switch, Route } from 'react-router-dom'

import About from '../about/About'
import Form from '../form/Form'
import Scheduling from '../scheduling/Scheduling'

export default function Routes() {
    return (
        
        <HashRouter>
            <Route exact path='/' component={About} />
            <Route exact path='/about' component={About} />
            <Route path='/form' component={Form} />
            <Route path='/scheduling' component={Scheduling} />
 
            <Redirect from='' to='/about' />
        </HashRouter>
        
        /*
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={About} />
                <Route path="/about" component={About} />
                <Route path="/form" component={Form} />
                <Route path="/scheduling" component={Scheduling} />
            </Switch>
        </BrowserRouter>
        */

    )
}