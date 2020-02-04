import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Viewer, Entity, Globe, PolylineGraphics, BillboardGraphics} from 'resium'
import { Cartesian3, Color } from 'cesium'
import TLEJS from 'tle.js';
import Zarya from '../../img/isslog.png'
import './Map.css'


const tlejs = new TLEJS();

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {savedCallback.current = callback;}, [callback]);

  useEffect(() => {function tick() {savedCallback.current();}
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Resium = () => {

  const [latISS, setLatISS] = useState(0)
  const [longISS, setLongISS] = useState(0)
  const [altiISS, setAltiISS] = useState(0)
  const positionISS = Cartesian3.fromDegrees(longISS, latISS, altiISS)

  const [orbit, setOrbit] = useState({
    "@id": "https://data.ivanstanojevic.me/api/tle/25544",
    "@type": "TleModel",
    "satelliteId": 25544,
    "name": "ISS (ZARYA)",
    "date": "2019-11-12T14:57:06+00:00",
    "line1": "1 25544U 98067A   19316.62299738  .00004810  00000-0  92183-4 0  9996",
    "line2": "2 25544  51.6451 345.3171 0006141 272.0902 233.9416 15.50005371198285"
})

  useEffect(() => {
    axios.get('https://data.ivanstanojevic.me/api/tle/25544')
    .then(res => setOrbit(res.data))
  }, [])

  useInterval(() => {
    axios.get('https://api.wheretheiss.at/v1/satellites/25544')
      .then(res => {
        setLatISS(res.data.latitude); setLongISS(res.data.longitude); setAltiISS(res.data.altitude)
      })
      .catch(err => console.log(err))
  }, 1000);

    let tleArr = [orbit.line1, orbit.line2];
    let track = tlejs.getGroundTrackLngLat(tleArr);
    let positions = track[1].map(arr => Cartesian3.fromDegrees(arr[0], arr[1]));

    return (
      <div>
  <ul className="accordion ">
  <input id="accord1" type="checkbox" className="hide"/>
  <li>
    <label for="accord1" className="button toggle">View in 3D</label>
    <div className="map3D inner">
      <Viewer full className='map3D' vrButton={false} timeline={false} animation={false} creditContainer={'Boop'}>
      <Globe enableLighting /> 
        <Entity position={positionISS} name="ISS">
        <BillboardGraphics image={Zarya} scale={0.2}/>
          <PolylineGraphics positions={positions} material={Color.RED}/>
        </Entity>
      </Viewer>
      </div>
  </li>
</ul>
      <div id='Boop'></div>
    </div>
  )
}

export default Resium