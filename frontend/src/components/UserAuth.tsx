const UserAuth: React.FC = () => {
    
    document.addEventListener('DOMContentLoaded', () => {
        const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement;
        const signupBtn = document.getElementById('signupBtn') as HTMLButtonElement;
        const loginForm = document.getElementById('login') as HTMLFormElement;
        const signupForm = document.getElementById('sign_up') as HTMLFormElement;

        loginBtn.addEventListener('click', () => {
            loginForm.classList.remove('moved');
        });

        signupBtn.addEventListener('click', () => {
            loginForm.classList.add('moved');
            signupForm.classList.remove('moved');
        });
    });

    return (
        <div id="formContainer" className="w-96 h-[32rem] z-20 bg-white border-black border-8 m-auto">
            <div className="w-full h-[80px] bg-black flex items-center justify-center relative">
                <div className="flex justify-center w-1/2 h-full">
                    <button type="button" id="loginBtn" className="w-full cursor-pointer font-bebas px-8 py-4 text-2xl z-10 bg-black text-white hover:underline hover:invert focus:invert">
                        LogIn
                    </button>
                </div>
                <div className="flex justify-center w-1/2 h-full">
                    <button type="button" id="signupBtn" className="w-full cursor-pointer font-bebas px-8 py-4 text-2xl z-10 bg-black text-white hover:underline hover:invert focus:invert">
                        Sign-up
                    </button>
                </div>
            </div>
            <div className="flex overflow-hidden">
                <form id="login" className="flex flex-col pt-8 ml-[71px]">
                    <div className="flex justify-center py-4 pt-4 h-16">
                        <input type="text" placeholder='Username' className="border-b-2 border-black" />
                    </div>
                    <div className="flex justify-center py-4 pt-4 h-16">
                        <input type="text" placeholder='Password' className="border-b-2 border-black" />
                    </div>
                    <div className="flex justify-center pt-8">
                        <button type="submit" className="bg-black text-white px-8 py-2 rounded font-roboto">Log In</button>
                    </div>
                </form>
                <form id="sign_up" className="flex flex-col pt-8 ml-56">
                    <div className="flex justify-center py-4 pt-4 h-16">
                        <input type="text" placeholder='First Name' className="border-b-2 border-black" />
                    </div>
                    <div className="flex justify-center py-4 pt-4 h-16">
                        <input type="text" placeholder='Last Name' className="border-b-2 border-black" />
                    </div>
                    <div className="flex justify-center py-4 pt-4 h-16">
                        <input type="text" placeholder='Username' className="border-b-2 border-black" />
                    </div>
                    <div className="flex justify-center py-4 pt-4 h-16">
                        <input type="text" placeholder='Password' className="border-b-2 border-black" />
                    </div>
                    <div className="flex justify-center pt-8">
                        <button type="submit" className="bg-black text-white px-8 py-2 rounded font-roboto">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserAuth;