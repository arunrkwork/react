import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];

    const randomColor = colors[Math.floor(Math.random() * 5)];
    const cname = randomColor + '-text';
    console.log(WrappedComponent);
    return(props) => {
        return(
            <div className={cname}>
                <WrappedComponent {...props} />
            </div>
        )  
    }
}

export default Rainbow