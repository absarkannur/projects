import React from 'react'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';

import './style.css';

export default function Partners() {
    return (
        <section className="container-flid border-t-2 ">
            <Container>

                <div className="partners">

                    <h1 className="h1">our partners</h1>

                    <ul className='list'>
                        <li>
                            <div className="imagethmb">
                                <div className="imagethmb_inner">
                                    <Image alt="" src={'/assets/partners/ias.svg'} width={0} height={0} style={{ width: '100px', height: '100px' }} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="imagethmb">
                                <div className="imagethmb_inner">
                                    <Image alt="" src={'/assets/partners/moat.svg'} width={0} height={0} style={{ width: '130px', height: '130px' }} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="imagethmb">
                                <div className="imagethmb_inner">
                                    <Image alt="" src={'/assets/partners/singular.svg'} width={0} height={0} style={{ width: '130px', height: '130px' }} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="imagethmb">
                                <div className="imagethmb_inner">
                                    <Image alt="" src={'/assets/partners/adjust.svg'} width={0} height={0} style={{ width: '130px', height: '130px' }} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="imagethmb">
                                <div className="imagethmb_inner">
                                    <Image alt="" src={'/assets/partners/adchat.svg'} width={0} height={0} style={{ width: '130px', height: '130px' }} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="imagethmb">
                                <div className="imagethmb_inner">
                                    <Image alt="" src={'/assets/partners/double-verify.svg'} width={0} height={0} style={{ width: '100px', height: '100px' }} />
                                </div>
                            </div>
                        </li>
                    </ul>


                </div>
                
            </Container>
        </section>
    )
}
