import React from "react"
import L from 'leaflet'
import axios from 'axios'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import Arty from "../boutton/Arty"
import ArtyomCommandsManager from "../boutton/ArtyomCommands"
import Resium from "./Resium"
import './Map.css'

class Map1 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            lat: 0,
            long: 0,
            zoom: 8,
            defaultlat: 0,
            defaultlong: 0,
        }
    }
    componentWillMount() {
      axios.get('https://api.wheretheiss.at/v1/satellites/25544')
     .then( res => {this.setState({defaultlat : res.data.latitude, defaultlong : res.data.longitude})})
     .catch(err => console.log(err))
    }

   componentDidMount() {
  
    this.interval = setInterval(() => {
      axios.get('https://api.wheretheiss.at/v1/satellites/25544')
     .then( res => {this.setState({lat : res.data.latitude, long : res.data.longitude})})
     .catch(err => console.log(err))
    }, 3000);
    
     
    }
      
    render(){
      let numLat= (this.state.lat).toFixed(4)
      let numLong= (this.state.long).toFixed(4)
        const position= [this.state.lat, this.state.long]
        const firstView= [this.state.defaultlat, this.state.defaultlong] 
        const icon= L.icon({
            iconUrl: require("./../../img/issshadow.png"),
            iconSize: [70,70],
            iconAnchor: [25,25],
        })
    return(
      <div className='mapBackground'>
        <p className='mapStatistics'>latitude : {numLat}° <br/> longitude : {numLong}°</p>
          <Map className="map" center={firstView} zoom={this.state.zoom}>
          <TileLayer
            url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <TileLayer
            url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-labels/{z}/{x}/{y}{r}.png"
          />
          <Marker icon={icon}position={position}>
            <Popup>ISS is HERE</Popup>
          </Marker>
        </Map>
        <Arty lat={numLat} long={numLong} />
        <ArtyomCommandsManager lat={this.state.lat} long={this.state.long} />
        <Resium />
      </div>
    )
}
}
export default Map1;