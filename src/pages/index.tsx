import Head from "next/head";
import { useState } from "react";
import Botão from "../components/Botão";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Client";

export default function Home() {
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  

  const clientes =[
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 25, '2'),
    new Cliente('Pedro', 74, '3'),
    new Cliente('Maria ', 26, '4'),
    new Cliente('Samira', 45, '5'),
    new Cliente('Paulo', 54, '6'),
    new Cliente('Henrique', 34, '7'),
    new Cliente('Elias', 24, '8'),
    new Cliente('Arthur', 24, '9'),
    new Cliente('Larissa', 22, '10'),
    new Cliente('Carlos', 29, '11'),
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  function novoCliente (){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-blue-900 text-white
    `}>
      <Layout title="Cadastro simples">

        {visivel === 'tabela'? (
          <>
            <div className="flex justify-end">  
              <Botão onClick={novoCliente} cor="green" className="mb-4">Novo cliente</Botão>
            </div>
          
             <Tabela 
             clientes={clientes} 
             clienteSelecionado={clienteSelecionado}
             clienteExcluido={clienteExcluido}
             />
          </>
        ): (
          <Formulario 
          cliente={cliente} 
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')}
          />
        )}
     
      </Layout>
    </div>
  );
}
