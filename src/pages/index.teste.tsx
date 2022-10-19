
import React, { FormEvent, useContext, useState } from 'react';
import Image from 'next/image';
import { Input } from '../components/ui/Input'
import { Btn } from '../components/ui/Button';
import imgLogin from '../assets/login.svg'
import imgWave from '../assets/wave.png'
import { AuthContext } from '../contexts/AuthContext';
import { canSSRGuest } from '../utils/canSSRGuest';
import Head from 'next/head';
import { toast } from 'react-toastify'
import Link from 'next/link';


export default function Login(){
  const { signIn  } = useContext(AuthContext)


  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (login === '' || senha === '') {
      toast.error('Preencha os campos')
      return;
    }

    setLoading(true);

    let data = {
      login,
      senha
    }

    await signIn(data);

    setLoading(false);


  }
  return (
    <>
      <Head>
        <title>AgendeMais - Login</title>
      </Head>

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
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Bem vindo ao Agende+
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Informe suas credenciais</small>
                </div>

                <form onSubmit={handleLogin}>
                  <div className="relative w-full mb-3">
                  <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <Input
                      placeholder='Digite seu login'
                      type={'text'}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={login}
                      onChange={(e) => setLogin(e.target.value)}
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

                  <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  <div className="text-center mt-6">
                  <Btn
                    type='submit'
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  loading={loading}
                  >
                    Cadastrar
                  </Btn>

                  </div>

              </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/register">
                  <a href="#pablo" className="text-blueGray-200">
                    <small>Create new account</small>
                  </a>
                </Link>
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


export const getServerSideProps = canSSRGuest(async (ctx) => {

  return {
      props: {}
    }
})
