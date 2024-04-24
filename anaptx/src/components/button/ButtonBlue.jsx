import Link from 'next/link';
import Image from 'next/image';
import './style.css'

export default function ButtonBlue( props ) {
    return (
        <Link href={ props.href }>
            <div className='button-blue' style={{ width: props.width }}>
                <span>{ props.value }</span>
                {
                    (props.icon) ? <Image src={ props.icon } width={20} height={20} /> : ''
                }
            </div>
        </Link>
    )
}
