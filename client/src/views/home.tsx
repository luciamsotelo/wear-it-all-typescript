// folder views - file home.tsx

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Carousel from "../components/carousel";


function Home(): JSX.Element {
    return (
        <div>
            <Header />
            <Carousel />
            
        </div>
    );
}

export default Home;
