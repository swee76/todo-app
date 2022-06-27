import React from 'react';

const HomePageWrapper = ({children}) => {
    return (
        <div className={'px-8 sm:px-10 md:px-20 lg:px-52 py-10'}>
            {children}
        </div>
    );
};

export default HomePageWrapper;