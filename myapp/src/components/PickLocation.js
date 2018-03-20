import React, { Component } from 'react';
import ic_dimension1 from '../images/ic_dimension1.png';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputPlaceTop from './InputPlaceTop'
import InputPlaceBottom from './InputPlaceBottom'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import '../styles/PickLocation.css'

class PickLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: 'San Francisco, CA',
    }
    this.onChange = (address) => this.setState({ address })

  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <div className = "containerPickLocation">
      <div className = "containerSelectPlace">
        <div className="selectPlace">
          <div className = "containerLeft">
            <img className = "imgLeft" src={ic_dimension1}></img>
          </div>
          <InputPlaceTop hintTextInput="Điểm đón" />
          <InputPlaceBottom hintTextInput="Điểm đến" />
        </div>

        </div>
        <div className = "containerSecond">
          <div  className = "containerSecondCenter" >
            <i className= "zmdi zmdi-pin-drop" style={{ height: '20px', width: 'auto', marginTop: '6px' }}></i>
            <span className = "textSelect">Chọn địa điểm trên bản đồ</span>
          </div>

        </div>

      </div>

    );
  }
}

export default PickLocation;
