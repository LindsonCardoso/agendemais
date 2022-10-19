import './cadastro.module.scss';
import React, { FormEvent } from 'react';
import { Input } from '../../components/ui/Input'
import { Btn } from '../../components/ui/Button';
import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//import { AuthContext } from '../../contexts/AuthContext';
import imgLogin from '../../assets/login.svg'
import imgWave from '../../assets/wave.png'


export default function Cadastro() {
  //const { signUp } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [celular, setCelular] = useState('')
  //const [login, setLogin] = useState('')
  const [nome, setNome] = useState('')

  async function handleCadastro(event: FormEvent) {
    event.preventDefault();

    if (nome === '' || senha === '') {
      alert('dados vazios')
      return;
    }

    setLoading(true);

    let data = {
      nome,
      senha,
      celular,
      email
    }

    setLoading(false);
  }

  return (

    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/register_bg_2.png')",
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-blueGray-500 text-sm font-bold">
                      Plataforma de agendamento, ganhe mais fazendo pouco!
                      </h6>
                    </div>
                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                      <small>
                        Cadastre seu négocio e tenha Controle, eficiência e agilidade na palma da sua mão
                        para você e seus clientes
                      </small>
                    </div>
                    <form onSubmit={handleCadastro}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Name
                        </label>
                        <Input
                          placeholder='Informe seu nome'
                          type={'text'}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Infome seu celular
                        </label>
                        <Input
                          placeholder='Infome seu celular'
                          type={'tel'}
                          value={celular}
                          onChange={(e) => setCelular(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>

                        <Input
                          placeholder='Informe seu email'
                          type={'email'}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Senha
                        </label>
                        <Input
                          placeholder='Digite sua senha'
                          type={'password'}
                          value={senha}
                          onChange={(e) => setSenha(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>

                      <div className="text-center mt-6">
                        <Btn
                          type='submit'
                          loading={loading}
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        >
                          Cadastrar
                        </Btn>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>


  );
}
