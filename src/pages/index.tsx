import Layout from "../components/Layout";
import Tabela from  '../components/Tabela';
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes =[
    new Cliente('Ana',32,'1'),
    new Cliente('carlos',31,'2'),
    new Cliente('Pedro',18,'3'),
    new Cliente('Bia',23,'4')
  ]

  function clienteSelecionado(cliente:Cliente){
    console.log(cliente.nome);
    
  }
  function clienteExcluido(cliente:Cliente){
    console.log('f ', cliente.nome);
    
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600  
      text-white`
    }>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}
          clienteExcluido={clienteExcluido}
          clienteSelecionado={clienteSelecionado}></Tabela>
      </Layout>
    </div>
  )
}