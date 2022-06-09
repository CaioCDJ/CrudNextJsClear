import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOutForm from "./useTabelaOutForm";

export default function useClientes(){
    
    const repo:ClienteRepositorio = new ColecaoCliente();

    const {tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = useTabelaOutForm();

    const [cliente,setCliente]= useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);

    // atualizando a tabela
    useEffect(obterTodos,[]);

    function obterTodos(){

      repo.obterTodos().then(cliente=>{
        setClientes(cliente)
        exibirTabela();
      });
    }

    function selecionarCliente(cliente:Cliente){

        setCliente(cliente);
        exibirFormulario();
    }
  
    async function excluirCliente(cliente:Cliente){
      await repo.excluir(cliente);
      obterTodos();
    }

    async function salvarCliente(cliente:Cliente){

      await repo.salvar(cliente);
      obterTodos();

    }

    function novoCliente(cliente:Cliente){
      setCliente(Cliente.vazio());
      exibirFormulario();
    }

    return{
        tabelaVisivel,
        exibirTabela,
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos
    }
}