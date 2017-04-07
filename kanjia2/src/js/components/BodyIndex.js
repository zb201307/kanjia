/**
 * Created by zhangbin on 2017/4/4.
 * 商品列表主页
 */
import React from 'react';
import Nav from './nav';
import Search from './search';
import Page from './page';
import IndexList from './indexList';
import indexCss from '../../css/index.css';
import { Link } from 'react-router-dom';
export default class BodyIndex extends React.Component{
    render(){
        return (
            <div>
                <Nav/>
                <div class="main">
                    <Search/>
                    <IndexList/>
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


