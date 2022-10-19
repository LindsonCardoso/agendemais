import './cadastro.module.scss';
import React, { FormEvent } from 'react';
import { Input } from '../../components/ui/Input'
import { Btn } from '../../components/ui/Button';
import {
   useState
} from 'react';
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

    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2  lg:w-2/4">
      <div className="fixed hidden lg:block inset-0 h-full img_index" >
            <Image
              src={imgWave}
              alt=''
            />
          </div>

          <div className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto">
            <Image
              src={imgLogin}
              alt=""
            />
          </div>
      </div>

      <div className="m-10  md:w-1/2 w-full lg:w-1/3">
        <h2 className=" text-3xl font-bold mb-5 text-primarycolor text-center">
          Plataforma de agendamento, ganhe mais fazendo pouco!
        </h2>
        <p className='`mt-8 justify-center items-center text-center'>
          Cadastre seu négocio e tenha Controle, eficiência e agilidade na palma da sua mão
          para você e seus clientes
        </p>
        <form onSubmit={handleCadastro}>
          <div className="flex  flex-col mt-3">
            <i className="fa fa-user absolute text-primarycolor mt-5 ml-2 text-xl"></i>
            <Input
              placeholder='Informe seu nome'
              type={'text'}
              className="px-4 py-3 rounded-lg bg-gray-200 mt-2
                pl-8 border-b-2 font-display
                focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="flex  flex-col mt-3">
            <i className="fa fa-phone absolute text-primarycolor mt-6 ml-2 text-xl"></i>
            <Input
              placeholder='Infome seu celular'
              type={'tel'}
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-200 mt-2
                pl-8 border-b-2 font-display
                focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"

            />
          </div>

          <div className="flex  flex-col mt-3">
            <i className="fa fa-box absolute text-primarycolor mt-6 ml-2 text-xl"></i>

            <Input
              placeholder='Informe seu email'
              type={'email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-200 mt-2
                pl-8 border-b-2 font-display
                focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"

            />
          </div>

          <div className="flex  flex-col mt-3">
            <i className="fa fa-lock absolute text-primarycolor mt-6 ml-2 text-xl"></i>
            <Input
              placeholder='Digite sua senha'
              type={'password'}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-200 mt-2
                pl-8 border-b-2 font-display
                focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
            />
          </div>

          <Btn
            type='submit'
            loading={loading}
            className="
              w-full  bg-primarycolor
              text-white rounded-lg px-4 py-3 mt-6

              "
          >
            Cadastrar
          </Btn>




        </form>
        <Link href={'/'}>
          <a className="items-center mt-5 text-gray-600 font-bold cursor-pointer" >
            {'>'} Ir para tela de login
          </a>

        </Link>

      </div>
    </div>
  );
}
