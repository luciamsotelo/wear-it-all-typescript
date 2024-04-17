// folder views - file show.ts

import React from 'react';
import Header from '../components/header';
import ShowCard from '../components/showCard';
import { useLocation } from 'react-router-dom';


function Show(): JSX.Element {
    const location = useLocation();

    const imageData: any = location.state?.imageData || {}; // Adjust type if possible

    return (
        <div>
            <Header />
            <ShowCard imageData={imageData} />
        </div>
    );
}

export default Show;
