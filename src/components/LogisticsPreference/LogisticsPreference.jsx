import React,{Component} from 'react';
import banner from '../../static/images/banner.png';
import smallBanner from '../../static/images/small.png';
import './index.css';
class LogistcsPreference extends Component{
    constructor(props){
        super(props);
        this.state={
            waiting:true
        }
    }
    render(){
        return <React.Fragment>
            <img src={banner} width="100%" alt="banner图"></img>
            <ul className="Lp_container">
                    <li className="Lp_container_list">
                        <img className="Lp_logo" src={smallBanner} width="350px"></img>
                        <div class="Lp_text">
                            <div className="lp_text_header">
                                <h4>一达通履约优享低至6.6折</h4>
                                <span>查看详情></span>
                            </div>
                            <div className="active_detail">
                                <p>活动有效期：2020年6月6日-2020七月5日</p>
                                <p>优惠方案：活动期间实收GMV>=5万，获得基础服务费等额积分反还</p>
                                <p>参与条件：阿里巴巴国际站付费用户</p>
                                <button className="btn button_waiting">{this.state.waiting?'暂未开始':'去下单'}</button>
                            </div>
                        </div>
                    </li>
                    <li className="Lp_container_list">
                        <img className="Lp_logo" src={smallBanner} width="350px"></img>
                        <div class="Lp_text">
                            <div className="lp_text_header">
                                <h4>一达通履约优享低至6.6折</h4>
                                <span>查看详情></span>
                            </div>
                            <div className="active_detail">
                                <p>活动有效期：2020年6月6日-2020七月5日</p>
                                <p>优惠方案：活动期间实收GMV>=5万，获得基础服务费等额积分反还</p>
                                <p>参与条件：阿里巴巴国际站付费用户</p>
                                <button className={`btn ${!this.state.waiting?'button_waiting':'making_order'}`}>{!this.state.waiting?'暂未开始':'去下单'}</button>
                            </div>
                        </div>
                    </li>
            </ul>
        </React.Fragment>
    }
}

export default LogistcsPreference;