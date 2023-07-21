import './index.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import WelcomeVid from './assets/welcome.mp4'

function App() {

  return (
    <>
      <div className='max-w relative'>
          <video className='max-w' autoPlay loop>
            <source src={WelcomeVid} type="video/mp4" />
          </video>
        <div className='absolute inset-0 flex flex-row justify-center items-center'>
          <h1 className='font-dm font-semibold text-5xl text-white'>WELCOME TO</h1>
          <h1 className='font-dm font-semibold text-5xl pl-10px text-FitYellow' style={{ marginLeft: '10px' }}>GEAR LINK.</h1>
        <div className='absolute flex-col justify-center items-center'>
          <p className='pt-20 font-dm font-semibold text-3xl text-white'>Your Ulitmate Desitnation for All Things Fitness Equipment</p>
        </div>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full z-10 hover:bg-black transition-all duration-300'>
        <NavBar></NavBar>
      </div>
      <h1 className="text-center font-roboto py-10 text-2xl">Uploads</h1>
      <SideBar></SideBar>
    </>
  )
}

export default App
