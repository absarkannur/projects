'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import './style.css';

export default function AccordionMobile( props ) {

    const [ accord, setAccord ] = useState(2);
    const data = props.data;

    const handleAccordion = ( id ) => {
        setAccord( id );
    }

    return (
        <div className={ "accordian-mobile" + " " + `${props.className}` }>
            <div className="list">
                <ul>
                    {
                        
                        data.map((item, k) => 
                        <li key={k} className={ ( accord == k ) ? 'active' : '' } onClick={ () => handleAccordion( k ) }>
                            <h2 className="h2">{ item.name }</h2>
                            <div className={ ( accord == k ) ? 'details show' : 'details' }>
                                <p className="p">{ data[accord].item.text }</p>
                                <img alt="" src={ data[accord].item.image } />
                            </div>
                        </li>)

                    }
                </ul>
            </div>
        </div>
    )
}
