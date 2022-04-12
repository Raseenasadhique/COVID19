import React from "react";

const Prop = props => {
    console.log(props);
    return (
        <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
        </div>
        
    )
}
export default Prop