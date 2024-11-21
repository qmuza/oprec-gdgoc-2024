"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const DetailPanel = ({ book_id }) => {
    const router = useRouter();

    const [bookDetails, setBookDetails] = useState({
        "id": book_id,
        "title": '',
        "author": '',
        "published_at": '',
        "created_at": '',
        "updated_at": ''
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/books/" + book_id);
            setBookDetails(response.data.data);
        };
        try {
            fetchData();
        } catch {
            console.log("oops ga ketemu");
        }
    }, [book_id]);

    function handleClick(action) {
        router.push("/" + action + "/" + book_id);
    };

    return (
        <div className="inset-0 flex h-[85vh] items-center justify-center z-50">
        <div className="relative bg-[#CAE9F5] rounded-lg w-[90%] md:w-[70%] lg:w-[41%] mx-auto z-10 shadow-2xl overflow-hidden">
            <div className="relative flex flex-row justify-between bg-[#333741] rounded-t-lg py-4 px-6 -mx-0 -mt-0 -mb-9">

            <h2 className="relative text-2xl mr-4 font-semibold text-white z-10">
                Book Details
            </h2>
            <a href="/">
                <img src="/homeicon.png" width="30" height="30"></img>
            </a>
            </div>
            
            <div className="flex flex-col border-solid border-2 border-[#333741] m-6 mt-14 p-6 rounded-xl bg-white text-[#636771] text-sm md:text-base">
                <div className="flex flex-row font-bold mb-5">
                    <span className="block w-[38%] md:w-[28%] shrink-0">Title</span>
                    <span className="block w-[4%]">: </span>
                    <span className="block w-[58%] md:w-[68%]">{bookDetails.title}</span>
                </div>
                <div className="flex flex-row font-bold mb-5">
                    <span className="block w-[38%] md:w-[28%]">Author</span>
                    <span className="block w-[4%]">: </span>
                    <span className="block w-[58%] md:w-[68%]">{bookDetails.author}</span>
                </div>
                <div className="flex flex-row font-bold mb-5">
                    <span className="block w-[38%] md:w-[28%]">Published at</span>
                    <span className="block w-[4%]">: </span>
                    <span className="block w-[58%] md:w-[68%]">{bookDetails.published_at}</span>
                </div>
                <div className="flex flex-row font-bold mb-5">
                    <span className="block w-[38%] md:w-[28%]">Created at</span>
                    <span className="block w-[4%]">: </span>
                    <span className="block w-[58%] md:w-[68%]">{bookDetails.created_at}</span>
                </div>
                <div className="flex flex-row font-bold mb-1">
                    <span className="block w-[38%] md:w-[28%]">Updated at</span>
                    <span className="block w-[4%]">: </span>
                    <span className="block w-[58%] md:w-[68%]">{bookDetails.updated_at}</span>
                </div>
            </div>
            <div className="flex justify-between pb-6 px-6">
                    <button onClick={() => handleClick("update")}
                    className="w-[48%] bg-[#333741] text-white py-2 rounded-lg font-semibold border-solid border-2 border-[#333741] 
                    transition ease-in-out hover:scale-105 hover:bg-white hover:text-[#333741]"
                    >
                    Update book
                    </button>
                    <button onClick={() => handleClick("delete")}
                    className="w-[48%] bg-[#333741] text-white py-2 rounded-lg font-semibold border-solid border-2 border-[#333741] 
                    transition ease-in-out hover:scale-105 hover:bg-white hover:text-[#333741]"
                    >
                    Delete book
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailPanel;