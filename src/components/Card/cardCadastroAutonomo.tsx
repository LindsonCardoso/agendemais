import { Heading, Highlight, Select } from "@chakra-ui/react";
import React from "react";
import { Btn } from "../ui/Button";
import { Input } from "../ui/Input";

// components

export default function CardCadastroEmpresa() {
  return (
    <>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Dados pessoais
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-2">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Nome do negócio
                </label>
                <Input
                  type="text"
                  className=" w-full
                  bg-blueGray-100
                      px-4 py-2 rounded-lg mt-2
                      pl-8 border-b-2 font-display
                      focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-2">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                >
                  Nome fantasia
                </label>
                <Input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg mt-2
                      pl-8 border-b-2 font-display  bg-blueGray-100
                      focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-2">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                >
                  Telefone
                </label>
                <Input
                  type="tel"
                  className=" w-full px-4 py-2 rounded-lg mt-2
                    pl-8 border-b-2 font-display  bg-blueGray-100
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-2">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Tipo de atendimento
                </label>

                <Select
                  bg={'gray.100'}
                  py={2}
                  mt={2}

                  placeholder='--- Tipo de atendimento ---'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </div>
            </div>
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
                  className=" w-full px-4 py-2 rounded-lg mt-2
                     border-b-2 font-display  bg-blueGray-100
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                  defaultValue="999999999"
                />
              </div>
            </div>

            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Cidade
                </label>
                <Input
                  type="email"
                  className="  w-full px-4 py-2 rounded-lg mt-2
                     border-b-2 font-display  bg-blueGray-100
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                />
              </div>
            </div>

            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Bairro
                </label>
                <Input
                  type="text"
                  className=" w-full px-4 py-2 rounded-lg mt-2
                     border-b-2 font-display  bg-blueGray-100
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"

                />
              </div>
            </div>

            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  rua
                </label>
                <Input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg  mt-2
                    border-b-2 font-display  bg-blueGray-100
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
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
                  className="w-full
                    px-4 py-2 rounded-lg mt-2
                    border-b-2 font-display  bg-blueGray-100
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
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
                  className="w-full
                    px-4 py-2 rounded-lg mt-2
                    border-b-2 font-display  bg-blueGray-100
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
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
                  type="email"
                  className=" w-full px-4 py-2 rounded-lg mt-2
                    border-b-2 font-display  bg-blueGray-100
                    focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"

                />
              </div>
            </div>


            <div className="w-full lg:w-12/12 px-2">
              <div className="relative w-full mb-3">
                <Btn
                  type='submit'
                  className="
                    w-full  bg-primarycolor
                    text-white rounded-lg px-4 py-3 mt-6
                    "
                >

                  Adicionar
                </Btn>



              </div>

            </div>
          </div>
        </form>
      </div>
    </>
  );
}
