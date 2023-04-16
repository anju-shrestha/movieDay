import AddIcon from '@mui/icons-material/Add'
import {Button} from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {AppState} from '../App'

function Header() {
  const useAppState= useContext(AppState);

  return (
    <div className='sticky top-0 z-10 bg-black text-3xl text-red-500 flex justify-between font-bold p-3 border-b-2 border-gray-500'>
      <Link to={'/'}><span>Movie<span className="text-white">Day</span></span></Link>

      {/* {useAppState.login? */}
      
      <Link to={'/addmovie'}>
        <h1 className='text-lg text-white flex items-center cursor-pointer'>
          <Button><AddIcon className='mr-1' color='inherit'/><span className='text-white'>Add New</span> </Button>
        </h1>
      </Link>
    {/* {/* //   : */}
    {/* //   <Link to={'/login'}> */}
    {/* //   <h1 className='text-lg text-white flex bg-green-600 items-center cursor-pointer'> */}
    {/* //     <Button><span className='text-white font-medium capitalize'>Log IN</span> </Button> */}
    {/* //   </h1> */}
    {/* // </Link> */}
    </div>
  )
}

export default Header
