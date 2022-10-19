import React, { useState} from "react";
import { Btn } from "../ui/Button";
import { Input } from "../ui/Input";
import ApiCep from "../../services/apiCep";
// components

export default function CardSettings() {

  const [cpf, setCpf] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')
  const [rua, setRua ] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')


  const handleDadosCep = (e) => {
    const cep = e.target.value;
    ApiCep.SearchCep(cep)
    .then(res => {
      let rua   =res.data.logradouro
      let bairro = res.data.bairro
      let cidade = res.data.localidade
      let estado = res.data.uf
      setRua(rua)
      setBairro(bairro)
      setCidade(cidade)
      setEstado(estado)
      //console.log("DADOS de endereço" + JSON.stringify(endereco))

    }).catch(err => {
      console.log(err)
    })
  }


  async function Cadastro() {

    console.log('es')
  }

  return (
    <>

      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form onSubmit={Cadastro} >
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Dados
          </h6>
          <div className="flex flex-wrap">

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Nome completo
                </label>
                <Input
                  type="text"
                  className=" w-full bg-blueGray-200
                      px-4 py-2 rounded-lg mt-2
                      pl-8 border-b-2 font-display
                      focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                  value={nome}
                  onChange={(e)=> setNome(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Telefone
                </label>
                <Input
                  type="tel"
                  className="w-full
                    bg-blueGray-200
                      px-4 py-2 rounded-lg mt-2
                      pl-8 border-b-2 font-display
                      focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                      value={telefone}
                  onChange={(e)=> setTelefone(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <Input
                  type="email"
                  className="w-full
                    bg-blueGray-200
                      px-4 py-2 rounded-lg mt-2
                      pl-8 border-b-2 font-display
                      focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                      value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
            </div>

            {/*

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  nome do seu negócio
                </label>
                <Input
                  type="text"
                  className=" bg-blueGray-100 w-full px-4 py-2 rounded-lg mt-2
                    pl-8 border-b-2 font-display
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Tipo de estabelecimento
                </label>

                <Select
                  bg={'gray.100'}
                  py={2}
                  mt={2}

                  placeholder='--- Tipo de Estabelecimento ---'>
                  <option value='option1'>Barbearia</option>
                  <option value='option2'>Bronzeamento</option>
                  <option value='option3'>Condominio</option>
                  <option value='option1'>Estetica e beleza</option>
                  <option value='option2'>Saude </option>
                  <option value='option3'>Lava Jato</option>
                  <option value='option1'>Petshop</option>
                </Select>
              </div>
            </div>
            */}

          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Endereço
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-3/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  CEP
                </label>
                <Input
                    type="text"
                    className=" bg-blueGray-200 w-full px-4 py-2 rounded-lg mt-2
                     border-b-2 font-display
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                    onBlur={(e) => {handleDadosCep(e)}}
                />
              </div>
            </div>

            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                >
                  Cidade
                </label>
                <Input
                  type="text"
                  className=" bg-blueGray-200  w-full px-4 py-2 rounded-lg mt-2
                     border-b-2 font-display
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                  value={cidade || ""}
                  onChange={(e) => ''}
                />
              </div>
            </div>

            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                >
                  Bairro
                </label>
                <Input
                  type="text"
                  className=" bg-blueGray-200 w-full px-4 py-2 rounded-lg mt-2
                     border-b-2 font-display
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                    value={bairro|| ""}
                    onChange={(e) => ''}
                />
              </div>
            </div>

            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                >
                  rua
                </label>
                <Input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg  mt-2
                    border-b-2 font-display bg-blueGray-200
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                    value={rua|| ""}
                    onChange={(e) => ''}


                />
              </div>
            </div>

            <div className="w-full lg:w-2/12 px-2">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                >
                  Número
                </label>
                <Input
                  type="text"
                  className="w-full bg-blueGray-200
                    px-4 py-2 rounded-lg mt-2
                    border-b-2 font-display
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                    value={numero|| ""}
                  onChange={(e) => setNumero(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full lg:w-2/12 px-2">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"

                >
                  Complemento
                </label>
                <Input
                  type="text"
                  className="w-full bg-blueGray-200
                    px-4 py-2 rounded-lg mt-2
                    border-b-2 font-display
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                  value={complemento|| ""}
                  onChange={(e) => setComplemento(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full lg:w-1/12 px-2">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Estado
                </label>
                <Input
                  type="text"
                  className=" w-full px-4 py-2 rounded-lg mt-2
                    border-b-2 font-display bg-blueGray-200
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                  value={estado}
                  onChange={(e) => ''}
                />
              </div>
            </div>


            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <Btn
                  type='submit'
                  className="
                    w-full  bg-primarycolor
                    text-white rounded-lg px-4 py-3 mt-6
                    "
                >

                  Salvar
                </Btn>
              </div>

            </div>
          </div>
        </form>
      </div>

    </>
  );
}
