import React from "react";


function Hero() {
    let heroText = "Welcome to God's Own Country";
    let styles = {
        color:"white",
        fontsize: 50,
        maxWidth: 300
    };
    return(
        <div className="hero">
            <h3 style={styles}>{`${heroText}`}</h3>
        </div>
    );
}

export default Hero;
