'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import './style.css';

export default function Accordion( props ) {

    const [ accord, setAccord ] = useState(2);
    const data = props.data;

    const handleAccordion = ( id ) => {
        setAccord( id );
    }

    return (
        <div className={ "accordian" + " " + `${props.className}` }>
            <div className="list">
                <ul>
                    {
                        
                        data.map((item, k) => <li key={k} className={ ( accord == k ) ? 'active' : '' } onClick={ () => handleAccordion( k ) }>{ item.name }</li>)

                    }
                </ul>
            </div>
            <div className="details">
                <p className="p">{ data[accord].item.text }</p>
                <img alt="" src={ data[accord].item.image } />
            </div>
        </div>
    )
}
