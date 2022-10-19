import { useState, createContext, ReactNode, useEffect } from 'react';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { api } from '../services/apiClient';
import Router from 'next/router';


import {toast } from 'react-toastify'

type AuthContextData = {
  user: UserProps | undefined;
  isAuthenticated: boolean;
  signIn: (credentials: SingInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
}

type UserProps = {
  id: string;
  nome?: string;
  login?: string;
  email?: string;
}

type SingInProps = {
  email?: string;
  login?: string;
  senha: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

type SignUpProps = {
  nome: string;
  celular: string;
  email: string;
  senha: string;
}

export const AuthContext = createContext({} as AuthContextData)

export async function signOut() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  try {
    destroyCookie(undefined, '@agendemais.token')
    Router.push("/");
  } catch {
    console.log('erro ao deslogar')
  }
}

export function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<UserProps>();

  //controlando se esta autenticado ou nao
  const isAuthenticated = !!user;


  useEffect(() => {

    //pegar o cookie
    const { '@agendemais.token': token } = parseCookies()


    if (token) {
      console.log('ok');

      let data = {
        id: '1',
        nome: 'lindson',
        login: 'lindson',
        email: 'l@i'
      }

      const { id, login, email } = data;

      setUser({
        id,
        login,
        email
      })


    }

  }, [])



  //funcao de login
  async function signIn({login, senha}: SingInProps) {
    try {
      /*const response = await api.post('/login', {
        name: login,
        password
      })*/

      //const { id, name, token } = response.data;
      let token = 'testeste@teste'
      //gerar cookies
      setCookie(undefined, '@agendemais.token', token, {
        maxAge: 60 * 60 * 24 * 30, //expirar em um mes
        path: '/' //quais caminhos terao acesso ao cookie
      })

      setUser({
        id: '1',
        nome: 'lindson',
        login: 'lindson',
        email: 'l@i'
      })
      //passar para proximas req o token
      //api.defaults.headers['Authorization'] = `Bearer ${token}`

      // home
      // eslint-disable-next-line react-hooks/rules-of-hooks

      toast.success("Bem vindo ao Agende+ 👋")
      Router.push("/home");

    } catch (err) {
      toast.error("Error ao acessar!")
      console.log(err)
    }

  }

  async function signUp({nome, celular, email, senha }:  SignUpProps){

    //console.log(nome)
    try {
     /*
     const response = await api.post('/cadastrar', {
        nome,
        celular,
        email,
        senha
      })
      */
      //alert('ok')
      console.log(nome, celular, email, senha)


      toast.success("Conta criada com sucesso!")
      Router.push('/')


    } catch (err) {
      toast.error("Error ao cadastrar!")
      console.log(err + "Error ao cadastrar")
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signOut,
        signUp
      }}>
      {children}
    </AuthContext.Provider>
  )
}
