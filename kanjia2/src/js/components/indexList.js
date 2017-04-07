/**
 * Created by zhangbin on 2017/4/4.
 * 商品列表
 */
import React from 'react';
import {Link} from 'react-router-dom';
import 'whatwg-fetch'
export default class IndexList extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[]
        }
    }
    componentWillMount(){
        fetch('../../api/indexList.json', {method: 'GET'}).then(response => response.json()).then(json => {
            this.setState({list:json.result});
        })
    }
    componentDidMount(){

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
                                <img src="images/u68.png" alt="" />
                                <p>活动规则</p>
                            </div>
                            <h3>{item.title}</h3>
                            <p>可砍最低价: ${item.minPrice}</p>
                            <p class="mt15">原价: ${item.originalPrice}</p>
                        </div>
                    </div>
                    <div class="items">
                        <div class="item">
                            <p>总共</p>
                            <p>{item.total}件</p>
                        </div>
                        <div class="item">
                            <p>还剩</p>
                            <p>{item.left}件</p>
                        </div>
                        <Link class="item" to={`/bargain:${item.id}`} target="_blank">参加</Link>
                    </div>
                </li>
            ))
        : '没有加载到任何商品';

        return (
            <div class="list">
                <ul>
                    {listDoms}
                </ul>
            </div>
        )
    }
}