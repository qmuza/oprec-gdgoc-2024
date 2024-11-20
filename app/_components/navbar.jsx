const Navbar = () => {
    return (
        <nav className="w-full h-[15] flex justify-between bg-[#333741] text-white p-7 font-bold" >
            <div className="flex justify-start items-center">
                <a className="hover:text-[#CAE9F5] font-bold" href="/">Papyrus Publishing</a>
            </div>
            <div className="flex flex-row justify-end items-center space-x-7">
                    <a className="hover:text-[#CAE9F5]" href = "/create">Create New Book</a>
            </div>
        </nav>
    );
};

export default Navbar;