"use client";

import axios from "axios"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const FormDelete = ({ book_id }) => {
    const router = useRouter();
    const [booktitle, setBookTitle] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/books/" + book_id);
            setBookTitle(response.data.data.title);
        };
        try {
            fetchData();
        } catch {
            router.push("/")
        }
    }, [book_id]);

    function handleClick(confirmation) {
        if (confirmation) {
            axios.delete("/api/books/" + book_id);
            router.push("/");
        } else {
            router.push("/details/" + book_id)
        };
    };

    return (
        <div className="inset-0 flex h-[85vh] items-center justify-center z-50">
        <div className="relative bg-[#CAE9F5] rounded-lg w-[90%] md:w-[70%] lg:w-[41%] mx-auto z-10 shadow-2xl overflow-hidden">
            <div className="relative bg-[#333741] rounded-t-lg py-4 px-6 -mx-0 -mt-0 -mb-9">

            <h2 className="relative text-2xl mr-4 font-semibold text-white z-10">
                Delete Book
            </h2>
            </div>

            <div className="mt-8 p-6">
                <span className="block text-[#333741] font-bold text-lg mb-1">Are you sure you want to delete {booktitle || "this book"}?</span>
                <div className="flex justify-between mt-5">
                    <button onClick={() => handleClick(true)}
                    className="w-[47%] bg-[#333741] text-white py-2 rounded-lg font-semibold border-solid border-2 border-[#333741] hover:bg-white hover:text-[#333741]"
                    >
                    Yes
                    </button>
                    <button onClick={() => handleClick(false)}
                    className="w-[47%] bg-[#333741] text-white py-2 rounded-lg font-semibold border-solid border-2 border-[#333741] 
                    transition ease-in-out hover:scale-105 hover:bg-white hover:text-[#333741]"
                    >
                    No
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FormDelete;