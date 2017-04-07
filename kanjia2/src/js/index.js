import React from 'react';
import ReactDOM from 'react-dom';
import BodyIndex from './components/BodyIndex';
import BodyCoupon from './components/BodyCoupon';
import BodyBargain from './components/BodyBargain';
import BodyCouponDetails from './components/BodyCouponDetails';
import BodyContact from './components/BodyContact';
//import { Router,Route } from 'react-router';
import { HashRouter,Route,hashHistory } from 'react-router-dom'

export default class Index extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <HashRouter history={hashHistory}>
                <div>
                    <Route exact path="/" component={BodyIndex}></Route>
                    <Route path="/coupon" component={BodyCoupon}></Route>
                    <Route path="/bargain:id" component={BodyBargain}></Route>
                    <Route path="/couponDetails:id" component={BodyCouponDetails}></Route>
                    <Route path="/contact:id" component={BodyContact}></Route>
                </div>
            </HashRouter>
        )
    }
}
ReactDOM.render(<Index/>,document.getElementById('mainContainer'));