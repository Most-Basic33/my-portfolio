import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Carousel1 from './Components/Carousel1/Carousel1'

export default (
    <Switch>
        <Route to='/share' component={Carousel1} />
        <Route to='/dash' component={Dash} />
    </Switch>
)