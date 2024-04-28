import React from 'react'
import Container from 'react-bootstrap/Container';

import './style.css';

export default function InnerBanner( props ) {
    return (
        <section 
            style={{ backgroundImage: 'url('+ props.image +')' }}
            className="container-fluid banner-image">
            <Container>
                <div className="inner-banner">
                    <h1 className="h1">{ props.heading }</h1>
                </div>
            </Container>
        </section>
    )
}
