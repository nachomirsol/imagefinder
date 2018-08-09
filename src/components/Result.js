import React, {Component} from 'react';
import Image from './Image';
import Nav from './Nav';

class Result extends Component{

    showImages = () => {
        const images = this.props.images;
        if(images.length === 0) return null;
        return(
            <React.Fragment>
                <div id = "result" className ="col-12 p-5 row">
                    {this.props.images.map(image => (
                        
                       <Image 
                            key = {image.id}
                            singleImage = {image}
                       />
                    ))}
                </div>
                <Nav 
                    prevPage = {this.props.prevPage}
                    nextPage = {this.props.nextPage}
                />
            </React.Fragment>
        )
    }

    render(){
        return(
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
        )

    }
}
export default Result;