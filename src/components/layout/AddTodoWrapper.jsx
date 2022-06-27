import React from 'react';

const AddTodoWrapper = ({children}) => {
    return (
        <div className={'px-2 sm:px-10 py-28'}>
            {children}
        </div>
    );
};

export default AddTodoWrapper;