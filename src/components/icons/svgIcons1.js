import React from 'react';

const ChevronRightIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={size}>
        <path d="M10.5 5.5l5 5-5 5" fill={props.color}/>
    </svg>
);

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M13.5 5.5l-5 5 5 5" fill={color}/>
    </svg>
);

export default {
    'chevron-right': ChevronRightIcon,
    'chevron-left': ChevronLeftIcon,
};