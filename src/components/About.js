import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p className="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ex quae, autem dolorum voluptas illum illo corporis tempore incidunt quidem iste praesentium, perspiciatis consequuntur reprehenderit animi modi dicta enim similique!</p>
        </div>
    )
}

export default Rainbow(About)