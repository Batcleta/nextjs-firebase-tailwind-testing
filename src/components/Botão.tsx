interface BotãoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: ( ) => void 
}

function Botão(props: BotãoProps) {
    return (
        <button onClick={() => props.onClick?.()} className={`
            bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `} >
            {props.children}
        </button>
    )
}

export default Botão
