import Button from "../components/Button";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from  '../components/Tabela';
import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
    exibirTabela,
    tabelaVisivel,
    clientes, 
    cliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    novoCliente
    } = useClientes();

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600  
      text-white`
    }>
      <Layout titulo="Cadastro Simples">
      {tabelaVisivel ? (
        <>
        <div className="flex justify-end">  
          <Button cor="green" className={`mb-4`}
            onClick={novoCliente}>Novo Cliente</Button>
        </div>
          <Tabela clientes={clientes}
            clienteExcluido={excluirCliente}
            clienteSelecionado={selecionarCliente}></Tabela>
      </>
      ):(
        <Formulario 
          cliente={cliente}
          cancelado={exibirTabela}
          clienteMudou={salvarCliente}
        />
      )}
      
      </Layout>

    </div>
  )
}