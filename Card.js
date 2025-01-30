import React, {useState} from "react";




function Card(props) {

    let state = useState("Add to favourite");//This will return an array
    let activeState = useState("");
    //set the state
    let [btnState, setBtnState] = state//array destructuring
    let [classState, setClassState] = activeState;
    //change /modify the state
    function addToFavourite() {
        setBtnState((prevState) => {
            if (prevState === "Add to favourite"){
                return("Added to favourite");
            }
            else {
                return("Add to favourite");
            }
        });
        setClassState((prevClass) => {
            if (prevClass == "") {
                return "active";
            } else {
                return "";
            }
        });

    }

    
    return(
        <div className={`card ${classState}`}>
            <img src = "/assets/heart.svg" alt ="icon" className="icon" />
            <img src={props.cardContent.imgSrc} alt ={props.cardContent.imgAlt} />
            <h3>{props.cardContent.placeName}</h3>
            <h5>{props.cardContent.known}</h5>
            <p>{props.cardContent.placeDescription}</p>
            <button onClick = {addToFavourite}>{btnState}</button>
            
        </div>
    );
}
export default  Card;