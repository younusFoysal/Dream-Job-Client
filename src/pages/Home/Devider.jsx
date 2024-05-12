import React from 'react';

const Devider = () => {

    const styles = {
        "background-image": "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,181,255,1) 50%, rgba(255,255,255,1) 100%)"
    }

    return (
        <div>

            <div className=" w-full h-1 max-w-screen mx-auto py-1 my-10"
                 style={styles}>

            </div>

        </div>
    );
};

export default Devider;