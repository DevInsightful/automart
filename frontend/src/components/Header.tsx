import { headerImg } from '../assets'

const Header = () => {
    const headerStyles={
        backgroundImage:`url(${headerImg})`
    }
  return<div style={headerStyles} className='h-[70vh] bg-center bg-cover'/>
}

export default Header