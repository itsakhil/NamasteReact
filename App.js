import React from "react";
import ReactDOM from "react-dom/client";

//if you want to write jsx in multiline wrap code inside paranthesis
const Title = () => <h1 className="react">This is React !!!</h1>;
const span=<span>i am SPAN</span>
const data=(
    <div>
<h2>I am a data element </h2>
{span}
</div>
) 
const Body=()=>{
    return(
        <div id="bodycontainer">
        <p>This is body text</p>
    </div>
    )
}
const Heading = () => (
<div id="container">
    <Title />
    <Body/>
{data}
    <h1 className="heading">Hlo Functional Component</h1>
</div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
