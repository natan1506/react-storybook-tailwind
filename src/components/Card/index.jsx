import { Check, HeartStraight, DotsThreeVertical } from 'phosphor-react'


export const Card = ({ data }) => {
  return (
    <>
      <a className="flex h-32 rounded-xl overflow-hidden my-2 mx-3 shadow-lg sm:flex hover:bg-gray-100 group">
        <img className="md:w-30 w-full object-cover sm:h-auto sm:w-48" src="https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?w=2000" alt="" />

        <div className="px-6 py-4 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="mb-2 inline-flex items-center justify-start space-x-2 rounded-full bg-purple-50 py-1 pl-1 pr-3">
                <div className="flex items-center justify-center rounded-full bg-white px-2 py-0.5">
                  <span className="text-center text=xs font-medium leading-none text-purple-500">Curso</span>
                </div>
                <span className="text=xs font-medium leading-none text-purple-500">8 horas</span>
              </div>
              <span className="mx-2 text-xs text-gray-500"> Alura</span>
            </div>
            <div className="flex items-center space-x-3 invisible group-hover:visible">
              <button className="flex p-2 hover:bg-purple-100 hover:text-purple-700 rounded-lg space-x-2 justify-between items-center ">
                <Check color="#5925DC" weight="bold"/>
                <span className="text-xs">Marcar como concluído</span> 
              </button>
              <button className="block p-2 hover:bg-purple-100 rounded-md ">
                <HeartStraight color="#5925DC" weight="bold" />
              </button>
              <button className="block p-2 hover:bg-purple-100 rounded-md ">
                <DotsThreeVertical color="#5925DC" weight="bold" />
              </button>
            </div>
          </div>
          <h1 className=" mb-2 text-lg font-semibold">{data.title}</h1>
          <p className="text-base text-gray-700 tru overflow-hidden">{data.subtitle}</p>
        </div>
      </a>
    </>
  )
}
