import React,{Component} from 'react'

class Search extends Component{

    searchRef = React.createRef();

    getData = (e) => {
        e.preventDefault();
        const query = this.searchRef.current.value;
        console.log(query);
        this.props.dataSearch(query)

    }

    render(){
        return(
            <form onSubmit = {this.getData}>
                <div className ="row">
                    <div className ="form-group col-md-8">
                        <input 
                            ref = {this.searchRef}
                            className ="form-control form-control-lg" 
                            type="text" 
                            placeholder ="search for an image: example football"     
                        />
                    </div>
                    <div className ="form-group col-md-4">
                        <input 
                            type="submit" 
                            className ="btn btn-lg btn-danger btn-block" 
                            value = "Search..."                 
                        />
                    </div>
                </div>
            </form>
        )
    }
}
export default Search