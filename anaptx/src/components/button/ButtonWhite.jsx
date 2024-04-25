import Link from 'next/link';
import Image from 'next/image';
import './style.css'

export default function ButtonWhite( props ) {
    return (
        <Link href={ props.href }>
            <div className='button-white' style={{ width: props.width }}>
                <span className="uppercase">{ props.value }</span>
                {
                    (props.icon) ? <Image alt="" src={ props.icon } width={0} height={0} style={{width:'20px',height:'20px'}} /> : ''
                }
            </div>
        </Link>
    )
}
