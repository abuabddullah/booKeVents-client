import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import SectionHeadline from '../shared/SectionHeadline';

const MyEvents = () => {
    return (
        <>
        <Breadcrumbs pageName={"My Events"} />
        <SectionHeadline
          secTitle="My Events"
          secSubTitle=""
        />
            
        </>
    );
};

export default MyEvents;