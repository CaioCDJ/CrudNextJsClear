import Cliente from '../core/Cliente';
import { IcondeEdicao, IconeLixo } from './Icones';

interface TabelaProps{
    clientes:Cliente[]

    clienteSelecionado?:(cliente:Cliente) => void
    clienteExcluido?:(cliente:Cliente) => void
}

export default function Tabela(props:TabelaProps){

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

    function renderizarCabecalho(){
        return(
            <tr>
                <th className={`text-left p-4`}>Codigo</th>
                <th className={`text-left p-4`}>Nome</th>
                <th className={`text-left p-4`}>Idade</th>
                {exibirAcoes ? <th className={`p-4`}>Ações</th>:false} 
            </tr>
        )
    }

    function renderizarAcoes(cliente:Cliente){
        return(
            <td className='flex justify-center'>
                {props.clienteSelecionado ? (
                    <button className={`flex justify-center 
                        items-center rounded-full 
                        text-green-600 hover:bg-purple-900 
                        p-2 m-1`}
                        onClick={()=> props.clienteSelecionado?.(cliente)}>{IcondeEdicao}</button>
                ) : false}
                {props.clienteExcluido ? (
                    <button className={`
                        flex justify-center items-center 
                        rounded-full text-red-600 
                        hover:bg-purple-900 
                        p-2 m-1`}
                        onClick={()=>props.clienteExcluido?.(cliente)}>{IconeLixo}</button>
                ): false}
                
                
            </td>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente,i)=>{
            return(
                <tr key={cliente.id}
                    className={`${i % 2 == 0 ? 'bg-stone-700' : 'bg-stone-700'}`}>
                    <td className={`text-left p-4 text-white`}>{cliente.id}</td>
                    <td className={`text-left p-4 text-white`}>{cliente.nome}</td>
                    <td className={`text-left p-4 text-white`}>{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente):false}

                </tr>
            )
        })
    }
    return(
        <table className={`w-full overflow-hidden rounded-xl`}>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}
