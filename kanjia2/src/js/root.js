import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';
import BodyIndex from './components/BodyIndex';
import indexList from './components/indexList';
import couList from './components/coupon_list';
const Root = () => (
    <HashRouter>
        <div>
            <BodyIndex/>
            <Route path="/list" component={indexList}/>
            <Route path="/coupon" component={couList}/>
        </div>
    </HashRouter>
);

export default Root;
ReactDOM.render(<Root/>,document.getElementById('mainContainer'));