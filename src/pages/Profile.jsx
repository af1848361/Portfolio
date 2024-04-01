import React from 'react';


import PortfolioNavbar from '../components/PortfolioNavbar';
import HometabView from '../Sections/HometabView';
import AbouttabView from '../Sections/AbouttabView';
import ProjectstabView from '../Sections/ProjectstabView';
import WhatiknowtabView from '../Sections/WhatiknowtabView';
import ContacttabView from '../Sections/ContacttabView';


function Profile(props) {
    document.title = "Portfolio"
    return (
        <>
            <PortfolioNavbar />
            <HometabView />
            <ProjectstabView />
            <AbouttabView />
            <WhatiknowtabView />
            <ContacttabView />
        </>
    );
}

export default Profile;