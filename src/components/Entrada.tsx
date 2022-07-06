interface EntradaProps{
    className?:string
    tipo?:'text' | 'number'
    texto:string
    valor:any
    somenteLeitura?:boolean
    valorMudou?: (valor:any) =>void
}

export default function Entrada(props:EntradaProps){
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2 text-white">{props.texto}</label>
            <input type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={e=>{props.valorMudou?.(e.target.value)}}
                readOnly={props.somenteLeitura} 
                className={`
                    border border-purple-900 rounded-lg
                    focus:outlone-noen bg-stone-900
                    px-4 py-2 text-white
                    ${props.somenteLeitura ? '': 'focus:bg-stone-700'}
                `}/>
        </div>
    )
}
