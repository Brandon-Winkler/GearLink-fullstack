import NavBar from '../components/NavBar';
import UserAuth from '../components/UserAuth';
import authImage from "../assets/authImage.jpg"

const LoginSignupPage = () => {
    return (
        <>
            <div className='relative z-30'>
                <div className='top-0 left-0 w-full bg-black'>
                    <NavBar></NavBar>
                </div>
            </div>
            <div className='relative'>
                <img src={authImage} className='w-screen h-screen object-cover' alt='Authentication' />
                <div className='absolute top-0 left-0 w-full h-full z-20'>
                    <div className="pt-32">
                        <UserAuth></UserAuth>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginSignupPage;