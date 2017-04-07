/**
 * Created by zhangbin on 2017/4/5.
 */
import React from 'react';
export default class RecordList extends React.Component{
    render(){
        return (
            <div class="cBox">
                <dl class="recordList">
                    <dt>
                        <div>亲友团</div>
                        <div>砍掉的价格</div>
                        <div>砍后价格</div>
                    </dt>
                    <dd>
                        <div>
                            <img src="images/u360.png" alt="" />
                            <p class="l">中国红</p>
                        </div>
                        <div><p>$1.79</p></div>
                        <div><p>$2.10</p></div>
                    </dd>
                    <dd>
                        <div>
                            <img src="images/u360.png" alt="" />
                            <p class="l">中国红</p>
                        </div>
                        <div><p>$1.79</p></div>
                        <div><p>$2.10</p></div>
                    </dd>
                    <dd>
                        <div>
                            <img src="images/u360.png" alt="" />
                            <p class="l">中国红</p>
                        </div>
                        <div><p>$1.79</p></div>
                        <div><p>$2.10</p></div>
                    </dd>
                </dl>
            </div>
        )
    }
}