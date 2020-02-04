import React, { Component } from 'react';
import axios from 'axios';
import './pictureOfDay.css';


const urlPicturesAPI = "https://api.nasa.gov/planetary/apod?api_key=dWVA0UjNNsDT9tc2UZ8pC7YVHdCfrcnjrLLVoQbf";

class PictureOfDay extends Component {
     constructor(props){
        super(props)
        this.state={
            urlPictures : []
    }
}     

componentDidMount() {
    axios.get(urlPicturesAPI)
        .then(response => {this.setState({urlPictures: response.data})
        })
        .catch(err => console.log(err))
    }  

    render() {
        console.log(this.state.urlPictures)
        return (
            <div className ="PicBack">
            <container>
                <h1 className="titlePicture"> Astronomy Picture of the Day </h1>
                <section className="intro"> Discover the cosmos! <strong>Each day </strong>a different image or photograph of our fascinating universe.</section> 
                <section className= "imgmain">   <img className= "imgmain" src={this.state.urlPictures.hdurl} alt={this.state.urlPictures.title}/> </section>
            
                <section className= "explanation"><p> {this.state.urlPictures.explanation} </p></section>
            
                <section className ="creditspart"> Credits: Robert Nemiroff & Jerry Bonnell
                      <a target="_blank" rel="noopener noreferrer" href ="https://www.nasa.gov/about/highlights/HP_Privacy.html"> NASA Web Privacy Policy and Important Notices </a> </section>
            </container>
            </div>
           
        )
}
}
export default PictureOfDay;