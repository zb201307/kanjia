/**
 * Created by zhangbin on 2017/4/4.
 */
import React from 'react';
export default class Page extends React.Component{
    render(){
        return (
            <div class="page">
                <a href="javascript:;">上一页</a>
                <a href="javascript:;" class="on">2</a>
                <a href="javascript:;">下一页</a>
            </div>
        )
    }
}