import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { orange500, blue500, grey900, grey500, red100, blue600 } from 'material-ui/styles/colors';
import ic_back from '../images/ic_back_1x.png';
import ic_done from '../images/ic_done.png';
import icon_complete from '../images/ic_complete.png';
import { green400 } from 'material-ui/styles/colors';




class AppBarExampleIcon extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#ededed', height: '100%', width: '100%' }}>
                <div style={{ backgroundColor: blue500, height: '45px', width: '100%', position: 'relative', textAlign: 'center', display: 'table' }}>
                    <img style={{ width: '25px', marginLeft: '15px', paddingTop: '10px', height: 'auto', float: 'left', display: 'block-inline' }} src={ic_back} />

                    <div style={{ width: '100%', height: '100%', position: 'block-inline', margin: '0 0', display: 'table-cell', verticalAlign: 'middle' }}>
                        <img style={{ width: '15px', height: 'auto', marginRight: '5px', paddingTop: '5px' }} src={ic_done} />
                        <span style={{ paddingBottom: '10px', color: '#fff', fontSize: '14px', paddingTop: '0px' }}>Đặt xe thành công</span>
                    </div>
                    <div style={{ width: '50px', height: '100%', float: 'right', color: '#fff', fontSize: '10px', textAlign: 'center', verticalAlign: 'middle', paddingTop: '10px', display: 'block', backgroundColor: blue600, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} >
                        Bước
                    <div style={{ fontSize: '16px', padding: '0 0' }}>3/3</div>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fff', height: '280px', margin: ' 3% 3%', width: '94%', textAlign: 'center', display: 'table', boxShadow: '1px 1px 1px 1px #d4d4d4', paddingTop: '5px' }}>
                    <img style={{ width: '30px', height: 'auto', margin: '15px' }} src={icon_complete} />
                    <div style={{ color: blue500, fontSize: 22, fontWeight: 500 }}>Chúc mừng</div>
                    <div style={{ color: grey900, fontSize: 15, fontWeight: 400, padding: '5px' }}>Cảm ơn quý khách đã sử dụng dịch vụ của</div>
                    <div style={{ color: blue500, fontSize: 15, fontWeight: 400 }}>Dichungtaxi.com</div>

                    <div style={{ backgroundColor: blue500, height: 35, marginLeft: '15%', marginRight: '15%', fontSize: 17, fontWeight: 400, color: '#fff', paddingTop: '15px', marginTop: '15px' }}>Đặt xe chiều về</div>

                    <p style={{ color: grey500, fontSize: 13, fontWeight: 500, width: 'auto' }}><span style={{
                        display: 'inline-block',
                        borderBottom: '1px solid #9e9e9e',
                        paddingBottom: '0px'
                    }}>Hủy chuyến</span></p>

                </div>

                <div style={{ height: 'auto', width: '100%', textAlign: 'center', display: 'table' }}>
                    <i className="zmdi zmdi-long-arrow-return" style={{ color: grey500, fontSize: 10, padding:'3px' }}></i>
                    <span style={{ color: grey500, fontSize: 13, fontWeight: 500, width: 'auto' }}>Quay lại trang chủ</span>
                </div>

            </div>


        );
    }
}

export default AppBarExampleIcon;