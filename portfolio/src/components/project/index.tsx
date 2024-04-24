// Styles
import './style.css'

export default function Project( props: any ) {
    return (
        <div>
            <h1 className="font-sans text-[30px] font-[600]">{ props.data.name }</h1>
            <h3 className="font-sans text-[26px] font-[400]">{ props.data.description_short }</h3>
        </div>
    )
}
