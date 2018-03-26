import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { GOOGLE_JSON } from "./GoogleJson"
import ReactDOM from 'react-dom';

const heightView = window.innerHeight-135;
const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100px` }} />,
    containerElement: <div style={{ height: heightView +'px' }} />,
    mapElement: <div style={{height: heightView +'px'  }} />,

  }),
  lifecycle({
    componentWillMount() {

    },
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 21.017548, lng: 105.8492746 }}
    defaultOptions={{ styles: GOOGLE_JSON }}

  >
    <Marker position={{ lat: 21.0136266, lng: 105.8466552 }} />
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: true,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}


export default MyMapComponent;
