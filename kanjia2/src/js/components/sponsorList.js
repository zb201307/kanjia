/**
 * Created by zhangbin on 2017/4/5.
 */
import React from 'react';
export default class SponsorList extends React.Component{
    render(){
        return (
            <div class="cBox">
                <h3>让活动赞助商帮你砍：</h3>
                <dl class="sponsorList">
                    <dt>金牌赞助商</dt>
                    <dd>
                        <span>
                            <img src="images/u360.png" alt="" />
                            <p>懂洪家会计事务所</p>
                        </span>
                        <div>创立30年的董宏佳会计事务所，已精湛的技术，无懈可击的经验，6046789893</div>
                        <div class="btn"><button>砍价</button></div>
                    </dd>
                    <dt>火锅赞助商</dt>
                    <dd>
                        <span>
                            <img src="images/u360.png" alt="" />
                            <p>懂洪家会计事务所</p>
                        </span>
                        <div>创立30年的董宏佳会计事务所，已精湛的技术，无懈可击的经验，6046789893</div>
                        <div class="btn"><button>砍价</button></div>
                    </dd>
                </dl>
            </div>
        )
    }
}