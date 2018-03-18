import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { orange500, blue500, grey300, grey500, red100, blue600 } from 'material-ui/styles/colors';
import ic_back from '../images/ic_back_1x.png';
import ic_done from '../images/ic_done.png';




class AppBarExampleIcon extends Component {
    render() {
        return (
            <div >
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

                <div style = {{ backgroundColor:'red', height: '300px', margin:' 2% 2%', width: '96%', textAlign: 'center', display: 'table', paddingTop: '20px'}}>
                <img style={{ width: '15px', height: 'auto' }} src={ic_done} />
                <div>DDax guiwr sdsdf</div>

                </div>
            </div>


        );
    }
}

export default AppBarExampleIcon;