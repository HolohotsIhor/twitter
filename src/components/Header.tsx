import Menu from './Menu'
import Logo from './Logo'
import LoginBar from './LoginBar'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-black border-b border-white/10 backdrop-blur-sm'>
      <div className='flex items-center justify-between px-4 py-3 max-w-7xl mx-auto'>
        {/* Left side - Logo */}
        <Logo />
        {/* Center - Navigation */}
        <Menu />
        {/* Right side - Login bar */}
        <LoginBar />
      </div>
    </header>
  )
}

export default Header