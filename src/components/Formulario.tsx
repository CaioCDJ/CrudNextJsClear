import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Button";
import Entrada from "./Entrada";

interface FormularioProps{
    cliente:Cliente
}

export default function Formulario(props:FormularioProps){

    const id = props.cliente.id  ?? null;
    
    const[nome,setNome] = useState(props.cliente?.nome ?? '')
    const[idade,setIdade] = useState(props.cliente?.idade ?? '')

    return(
        <div>
            {id ? (

                <Entrada texto="Codigo" 
                    somenteLeitura    
                    valor={id}/>
            ):false}
            {}

            <Entrada texto="Nome"
                 valor={nome}
                 valorMudou={setNome}
                 className='mb-5'/>
            <Entrada texto="Idade"
                 valor={idade} 
                 valorMudou={setIdade} 
                 tipo="number"
                 className="mb-5"/>
            <div className="flex justify-end mt-3">

                <Botao cor="blue" className='mr-2'>
                    {id? 'Alterar': 'Salvar'}
                </Botao>
                
                <Botao>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}