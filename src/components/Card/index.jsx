export const Card = ({data}) => {
  return (
    <>
      <a className="flex h-32 rounded-xl overflow-hidden my-2 mx-3 shadow-lg sm:flex hover:bg-gray-100">
        <img className="md:w-30 w-full object-cover sm:h-auto sm:w-48" src="https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?w=2000" alt="" />

        <div className="px-6 py-4 w-full">
          <div></div>
          <h1 className=" mb-2 text-lg font-semibold">{data.title}</h1>
          <p className="text-base text-gray-700 tru overflow-hidden">{data.subtitle}</p>
        </div>
      </a>
    </>
  )
}
