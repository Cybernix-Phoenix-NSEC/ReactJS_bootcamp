import React from "react";

function Newscart(props) {
  return (
    <div>
      <div className="card" style={props.mode === "dark"?{backgroundColor: "#141212", color: "white"}:{}}>
        <img src={props.imgUrl} className="card-img-top" alt="..." />    {/*displaying Image */}
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>           {/*displaying Title */}
          <p className="card-text">                               {/*displaying Description */}
            {props.description}        
          </p>
          <a href={props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary"> 
            Read more
          </a>       {/* click to go to the source of the news */}
        </div>
      </div>
    </div>
  );
}

export default Newscart;
