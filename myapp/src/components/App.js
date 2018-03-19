import React, { Component } from 'react';
import '../App.css';
import ic_dimension1 from '../images/ic_dimension1.png';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputPlaceTop from './InputPlaceTop'
import InputPlaceBottom from './InputPlaceBottom'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import '../styles/AppGGPlace.css'
import windowSize from 'react-window-size';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: 'San Francisco, CA',
      heightViewEnd: this.props.windowHeight - 135
    }
    this.onChange = (address) => this.setState({ address })

  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <div style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}>
        <div id="honganh" style={{ backgroundColor: '#f5f5f5', width: '100%', height: 'auto' }}>
          <div className="input" style={{ width: '80%', height: '100px', paddingTop: '5px', backgroundColor: '#f5f5f5' }}>
            <div style={{
              marginTop: '15px', width: '15%', height: '60px', display: 'inline', position: 'relative', float: 'left', zIndex: '1', textAlign:'center'}} >
              <img style={{ width: 'auto', height: '100%' }} src={ic_dimension1}></img>
            </div>
            <InputPlaceTop hintTextInput="Điểm đón" />
            <InputPlaceBottom hintTextInput="Điểm đến" />
          </div>


        </div>
        <div style={{ backgroundColor: '#ebebeb', width: '100%', height: '30px' }}>
          <div style={{ height: '30px', display: 'table', margin: '0 auto ', width: 'auto' }} >
            <i className="zmdi zmdi-pin" style={{ height: '20px', width: 'auto', marginTop: '6px' }}></i>
            <span style={{ backgroundColor: '#ebebeb', marginLeft: '5px', fontSize: '13px', fontWeight: 'bold' }}>Chọn địa điểm trên bản đồ</span>
          </div>

        </div>



      </div>

    );
  }
}

export default App;
