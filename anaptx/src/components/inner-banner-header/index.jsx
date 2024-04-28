import React from 'react';
import Container from 'react-bootstrap/Container';

import './style.css';
import { PrefixPathnameNormalizer } from 'next/dist/server/future/normalizers/request/prefix';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function InnerBannerHeader(props) {
    return (
        <section className="container-fluid">
            <Container>
                <div className="inner-banner-header">
                    <h2 className="h2">{ props.sub_heading }</h2>
                    <h1 className="h1">{ props.heading }</h1>
                    <p className="p">{ props.paragraph }</p>
                </div>
            </Container>
        </section>
    )
}
