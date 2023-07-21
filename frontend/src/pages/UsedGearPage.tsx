import NavBar from '../components/NavBar';
import PostForm from '../components/PostForm';
const UsedGearPage = () => {
    return (
        <>
            <div className='absolute top-0 left-0 w-full z-10 bg-black'>
                <NavBar></NavBar>
            </div>
            <div className='bg-blue-500 w-50 h-50 pt-48'>
                <PostForm></PostForm>
            </div>
        </>
    );
}

export default UsedGearPage;
