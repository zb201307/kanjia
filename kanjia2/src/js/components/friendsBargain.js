/**
 * Created by zhangbin on 2017/4/5.
 */
import React from 'react';
export default class FriendsBargain extends React.Component{
    render(){
        return (
            <div>
                <div class="friends">
                    <button>找朋友帮砍</button>
                </div>
                <div class="userBox">
                    <h3 class="top">
                        <img src="images/u308.png" alt="" />看看
                    </h3>
                    <p class="c">已有 XXX 位Friends， XXX位Sponsors帮你砍价。</p>
                    <p class="c">你当前价格：<span>$61.00</span></p>
                </div>
            </div>
        )
    }
}