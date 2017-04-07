/**
 * Created by zhangbin on 2017/4/5.
 * 商品详情
 */
import React from 'react';
import BannerBargain from './bannerBargain';
import MessBargain from './messBargain';
import FriendsBargain from './friendsBargain';
import SwitchBargain from './switchBargain';
import EventBargain from './EventBargain';

import BargainCss from '../../css/bargain.css';

export default class BodyBargain extends React.Component{
    render(){
        return (
            <div class="bargain">
                <BannerBargain/>
                <MessBargain/>
                <FriendsBargain/>
                <SwitchBargain/>
                <EventBargain/>
            </div>
        )
    }
}