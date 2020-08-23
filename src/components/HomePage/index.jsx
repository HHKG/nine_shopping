import React, { Component } from 'react';
import smallBanner from '../../static/images/small.png';
import './index.css';
import gif from '../../static/images/gif.png';
import { Slider } from '@alifd/next';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <React.Fragment>
            <div className="hp_container">
                <div className="hp_direct_seeding_container">
                    <div className="hp_direct_seeding">
                        <h4 className="color_w">采购节直播间</h4>
                        <img src={smallBanner} width="680px"></img>
                        <div className="footer_title">
                            <span className="rePlay">回放</span>
                            <span className="color_w">E收汇自营订单免单优惠，限时抢购 9月20日 9：00</span>
                        </div>
                    </div>
                    <ul className="hp_video_list">
                        <li className="hp_list_item">
                            <div className="hp_list_video">
                                <img src={smallBanner} width="200px"></img>
                            </div>
                            <div className="hp_list_text">
                                <p className="color_w">9月20日 10：00</p>
                                <p className="color_w">阿里巴巴(1688.com)批发网是全球企业间(B2B)电子商务的著名品牌</p>
                            </div>
                        </li>
                        <li className="hp_list_item">
                            <div className="hp_list_video">
                                <img src={smallBanner} width="200px"></img>
                            </div>
                            <div className="hp_list_text">
                                <p className="color_w">9月20日 10：00</p>
                                <p className="color_w">阿里巴巴(1688.com)批发网是全球企业间(B2B)电子商务的著名品牌</p>
                            </div>
                        </li>
                        <li className="hp_list_item">
                            <div className="hp_list_video">
                                <img src={smallBanner} width="200px"></img>
                            </div>
                            <div className="hp_list_text">
                                <p className="color_w">9月20日 10：00</p>
                                <p className="color_w">阿里巴巴(1688.com)批发网是全球企业间(B2B)电子商务的著名品牌</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="step_block ">
                    <h4 className="color_w">一站式履约服务—————每一程有提供专属优惠</h4>
                    <div>
                        <img src={gif} width="300px" className="f_l"></img>
                        <ul className="f_l step_data_block">
                            <li className="step_data_list f_l">
                                <h4 style={{ marginBottom: '10px', color: '#3225a8' }}>阿里巴巴集团的使命是让天下没有难做的生意</h4>
                                <ul>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                </ul>
                                <span className="checkDetail">查看详情 ></span>
                            </li>
                            <li className="step_data_list f_l">
                                <h4 style={{ marginBottom: '10px', color: '#3225a8' }}>阿里巴巴集团的使命是让天下没有难做的生意</h4>
                                <ul>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                </ul>
                                <span className="checkDetail">查看详情 ></span>
                            </li>
                            <li className="step_data_list f_l">
                                <h4 style={{ marginBottom: '10px', color: '#3225a8' }}>阿里巴巴集团的使命是让天下没有难做的生意</h4>
                                <ul>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                </ul>
                                <span className="checkDetail">查看详情 ></span>
                            </li>
                            <li className="step_data_list f_l">
                                <h4 style={{ marginBottom: '10px', color: '#3225a8' }}>阿里巴巴集团的使命是让天下没有难做的生意</h4>
                                <ul>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                </ul>
                                <span className="checkDetail">查看详情 ></span>
                            </li>
                            <li className="step_data_list f_l">
                                <h4 style={{ marginBottom: '10px', color: '#3225a8' }}>阿里巴巴集团的使命是让天下没有难做的生意</h4>
                                <ul>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                </ul>
                                <span className="checkDetail">查看详情 ></span>
                            </li>
                            <li className="step_data_list f_l">
                                <h4 style={{ marginBottom: '10px', color: '#3225a8' }}>阿里巴巴集团的使命是让天下没有难做的生意</h4>
                                <ul>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                    <li className="text_circle_dot">实打实大苏打考虑进来</li>
                                </ul>
                                <span className="checkDetail">查看详情 ></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Slider dotsDirection="hoz" arrows={false}>
                        <div><h3 className="h3">1</h3></div>
                        <div><h3 className="h3">2</h3></div>
                        <div><h3 className="h3">3</h3></div>
                        <div><h3 className="h3">4</h3></div>
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    }
}
export default HomePage;