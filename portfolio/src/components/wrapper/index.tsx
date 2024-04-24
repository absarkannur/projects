interface Props {
    className?: string,
    children: React.ReactNode
}

export default function Wrapper( props: Props ) {
    return (
        <section className={ "container mx-auto px-5 " + `${ props.className ? props.className : '' }` }>
            { props.children }
        </section>
    )
}

