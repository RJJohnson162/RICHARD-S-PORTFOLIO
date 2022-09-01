import React from 'react';

import { About, Work, Testimonial, Skills, Header, Footer} from "./container";

const App = () => {
    return (
        <div className='app'>
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default App;