const NavBar: React.FC = () => {
    return (
        <nav className='h-24 z-10 sticky top-0'>
            <div className='flex justify-center items-center h-full'>
            <ul className='flex items-center gap-[3vw]'>
                <li><a href='/' type='button' className='bg-transparent font-bebas hover:underline text-3xl text-white hover:text-FitYellow'>Home</a></li>
                <li><a href='/used-gear' type='button' className='bg-transparent font-bebas hover:underline text-3xl text-white hover:text-FitYellow'>Post Used Gear</a></li>
                <li><a href='/login-signup' type='button' className='bg-transparent font-bebas hover:underline text-3xl text-white hover:text-FitYellow'>Login/Sign-Up</a></li>
            </ul>
            </div>
        </nav>
    );
};

export default NavBar;