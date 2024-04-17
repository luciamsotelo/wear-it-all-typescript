// folder views - file update.ts

import React from 'react';
import Header from '../components/header';
import UpdateForm from '../components/updateForm';
import { useLocation } from 'react-router-dom';

function Update(): JSX.Element {
    const location = useLocation();
    const imageData: any = location.state?.imageData || {}; // Adjust type if possible

    return (
        <div>
            <Header />
            <UpdateForm imageData={imageData} />
        </div>
    );
}

export default Update;
