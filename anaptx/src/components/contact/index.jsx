import React from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import ButtonBlue from '../button/ButtonBlue';

import './style.css';

export default function Contact() {
    return (
        <section className="container-flid bg-[var(--light-background)]">
            <Container>
                
                <div className="contact">
                    
                    <div className="address">
                        <div className="box">
                            
                            <h2 className="h2">Let’s connect</h2>
                            <p className="p mb-3">We want to hear from you. Let us know how we can help?</p>

                            <ul>
                                <li className="flex justify-start py-2">
                                    <Image alt="" src={'/assets/common/icon-phone.svg'} width={0} height={0} style={{width:'22px',height: '22px'}} />
                                    <p className="p pl-4">+971 50 764 1465</p>
                                </li>
                                <li className="flex justify-start py-2">
                                    <Image alt="" src={'/assets/common/icon-email.svg'} width={0} height={0} style={{width:'22px',height: '22px'}} />
                                    <p className="p pl-4">sales@anaptyx.ai</p>
                                </li>
                                <li className="flex justify-start py-2">
                                    <Image alt="" src={'/assets/common/icon-map.svg'} width={0} height={0} style={{width:'22px',height: '22px'}} />
                                    <p className="p pl-4">
                                        Dubai Media City, Concord Tower, 9th Floor
                                    </p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="forms">
                        <div className="box">
                            
                            <div className="form-field">

                                <div className="input-wrap">
                                    <label>Your Name</label>
                                    <input type="text" />
                                </div>

                                <div className="input-wrap">
                                    <label>Your Email</label>
                                    <input type="email" />
                                </div>

                            </div>

                            <div className="form-field">

                                <div className="input-wrap">
                                    <label>Your Subject</label>
                                    <input type="text" />
                                </div>

                            </div>

                            <div className="form-field">

                                <div className="input-wrap">
                                    <label>Message</label>
                                    <textarea name="" rows="4" 
                                        placeholder={ 'Write your message here' }></textarea>
                                </div>

                            </div>

                            <div className="form-field mt-4">

                                <div className="input-wrap">
                                    <ButtonBlue
                                        width={200}
                                        href="#"
                                        icon={ '/assets/common/arrow-right.svg' }
                                        value="send message"/>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </Container>
        </section>
    )
}
