import React from 'react';
import SocialMedia from './Rezo/SocialMedia';
import './footer.css';
import email from "../../img/Email.png";
import linkedin from "../../img/linkedin.png"

const FooterComponent = () =>{

    return(
        <footer>
            <SocialMedia />
            <div className="row">
                <h4>Retrouvez nous</h4>
            </div>

            <div id="footerSeparator"></div>

            <div className="row">
                <div className="col colDev">
                    <p>Alexis ARCHER</p>
                    <p>07.61.29.72.72</p>
                    <p className="contactIcons"><a href="mailto:Ornellazaidi@gmail.com"><img alt="Icon for contact" src={email}></img></a> <a href="https://www.linkedin.com/in/alexis-archer-151179138/"><img alt="icon for contact"  src={linkedin}></img></a> </p>
                </div>
                
                <div className="col colDev"> 
                    <p>Ornella GRISTI</p>
                    <p>06.40.14.75.49</p>
                    <p className="contactIcons"><a href="mailto:Ornellazaidi@gmail.com"><img alt=""  src={email}></img></a> <a href="https://www.linkedin.com/in/ornella-gristi-5923159b/"><img alt=""  src={linkedin}></img></a> </p>
                
                </div>
                
                <div className="col colDev"> 
                    <p>Florian PLOT</p>
                    <p>06.35.37.79.06</p>
                    <p className="contactIcons"><a href="mailto:flouuxi26@gmail.com" ><img alt=""  src={email}></img></a> <a href="https://www.linkedin.com/in/florian-plot/"><img alt=""  src={linkedin}></img></a> </p>
                </div>
                
                <div className="col colDev"> 
                    <p>Dylan BERTHIER</p>
                    <p>06.38.50.82.93</p>
                    <p className="contactIcons"><a href="mailto:dylan.berthier13@gmail.Com"><img alt=""  src={email}></img></a> <a href="https://www.linkedin.com/in/dylan-berthier/"><img alt=""  src={linkedin}></img></a> </p>
                </div>
                
                <div className="col colDev"> 
                    <p>Marie Gory</p>
                    <p>06.82.80.80.64</p>
                    <p className="contactIcons"><a href="mailto:marie.gory@gmail.Com"><img alt=""  src={email}></img></a> <a href="https://www.linkedin.com/in/marie-gory/"><img alt=""  src={linkedin}></img></a> </p>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent