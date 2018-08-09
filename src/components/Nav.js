import React from 'react';

const Nav = (props) => {
    return(
        <div className ="py-5">
            <button onClick = {props.prevPage} type="button" className ="btn btn-info mr-1"> Prev &larr;
            </button>
            <button onClick = {props.nextPage} type="button" className ="btn btn-info mr-1"> Next &rarr;
            </button>
        </div>
    )
}
export default Nav
