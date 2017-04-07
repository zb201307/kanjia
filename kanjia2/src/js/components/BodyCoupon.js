/**
 * Created by zhangbin on 2017/4/5.
 * 劵列表
 */
import React from 'react';
import Nav from './nav';
import Search from './search';
import List from './couponList';
import Page from './page';
import indexCss from '../../css/index.css';
import { Link } from 'react-router-dom';
export default class BodyCoupon extends React.Component{
    render(){
        return (
            <div>
                <Nav/>
                <div class="main">
                    <Search/>
                    <List/>
                    <Page/>
                    <div class="column">
                        <Link to="/">商品列表</Link>
                        <Link to="/coupon">劵列表</Link>
                    </div>
                </div>
            </div>
        )
    }
}