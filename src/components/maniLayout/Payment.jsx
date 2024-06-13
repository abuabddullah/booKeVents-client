import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import SectionHeadline from '../shared/SectionHeadline';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id}= useParams();
    return (
        <>
        <Breadcrumbs pageName={`payment / ${id}`} />
        <SectionHeadline
          secTitle="Payment"
          secSubTitle="Please enter your payment details"
        />
        </>
    );
};

export default Payment;