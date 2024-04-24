import Link from 'next/link';
import Image from 'next/image';
import './style.css'

export default function ButtonWhite( props ) {
    return (
        <Link href={ props.href }>
            <div className='button-white' style={{ width: props.width }}>
                <span>{ props.value }</span>
                {
                    (props.icon) ? <Image src={ props.icon } width={20} height={20} /> : ''
                }
            </div>
        </Link>
    )
}
