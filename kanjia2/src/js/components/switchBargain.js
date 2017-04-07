/**
 * Created by zhangbin on 2017/4/5.
 */
import React from 'react';
import EventDetails from './eventDetails';
import SponsorList from './sponsorList';
import RecordList from './recordList';
export default class SwitchBargain extends React.Component{
    render(){
        return (
            <div>
                <div class="bargainSwitch">
                    <div class="titles">
                        <span class="item on">活动详情</span>
                        <span class="item">砍价</span>
                        <span class="item">记录</span>
                    </div>
                    <SponsorList/>
                </div>
            </div>

        )
    }
}