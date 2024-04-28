import React from 'react';
import Container from 'react-bootstrap/Container';

import './style.css';

export default function Highlight() {
    return (
        <section className="container-fluid">
            <Container>

                <div className="highlights">

                    <ul className="list">
                        <li>
                            <h1 className="h1">450B+</h1>
                            <p className="p">Impressions</p>
                        </li>
                        <li>
                            <h1 className="h1">35M+</h1>
                            <p className="p">Profiled users in KSA</p>
                        </li>
                        <li>
                            <h1 className="h1">13M+</h1>
                            <p className="p">Profiled users in UAE</p>
                        </li>
                        <li>
                            <h1 className="h1">100M+</h1>
                            <p className="p">Data points for segmentation</p>
                        </li>
                    </ul>

                </div>

            </Container>
        </section>
    )
}
