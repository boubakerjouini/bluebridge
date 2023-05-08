import { useRouteError } from 'react-router-dom'
import { BiErrorAlt } from 'react-icons/Bi'
import { AiOutlineArrowLeft } from 'react-icons/Ai'
const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className=" h-screen flex flex-col justify-center align-middle items-center">
      <BiErrorAlt className="text-[10rem]  text-purple-600" />
      <h1 className="text-[5rem] font-bold -mt-3 mb-5 text-purple-600">Oops!</h1>
      <p className="bg-gray-100 p-4 min-w-[40vw] rounded-xl">
        <p className=" font-semibold mb-4">Sorry, an unexpected error has occurred.</p>

        <i>{error.statusText || error.message}</i>
      </p>

      <a href="/" className="font-bold mt-5 text-purple-600 ">
        <AiOutlineArrowLeft className="inline-block mr-2" />
        Go back home
      </a>
    </div>
  )
}

export default ErrorPage
