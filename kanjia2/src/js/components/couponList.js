/**
 * Created by zhangbin on 2017/4/5.
 */
import React from 'react';
import {Link} from 'react-router-dom';
export default class CouponList extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[]
        }
    }
    componentWillMount(){
        fetch('../../api/couponList.json', {method: 'GET'}).then(response => response.json()).then(json => {
            this.setState({list:json.result});
        })
    }

    render(){
        const {list} = this.state;
        const listDoms = list.length
            ? list.map((item,index) => (
                <li key={index}>
                    <div class="shopping">
                        <img src={item.pic} class="sh" />
                        <div class="shop-ri">
                            <div class="rule">
                                <p>
                                    <Link class="item" to={`/couponDetails:${item.id}`} target="_blank">详情 ></Link>
                                </p>
                            </div>
                            <h3>{item.title}</h3>
                            <p>购买价：${item.originalPrice}</p>
                            <p class="mt15">过期时间：{item.expirationTime}</p>
                        </div>
                    </div>
                </li>
            ))
            : '没有加载到任何商劵';
        return (
            <div class="list list_coupon">
                <ul>
                    {listDoms}
                </ul>
            </div>
        )
    }
}