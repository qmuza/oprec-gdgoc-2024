"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const BookList = () => {
    const router = useRouter();

    const [allBookDetails, setAllBookDetails] = useState([{
        "id": 0,
        "title": 'Loading books...',
        "author": 'Please wait',
        "published_at": '',
        "created_at": '',
        "updated_at": ''
    }]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/books");
            setAllBookDetails(response.data.data);
        };
        try {
            fetchData();
        } catch {
            console.log("oops ga ketemu");
        }
    }, []);

    function handleClick(target_id) {
        router.push("/details/" + target_id);
    };

    return (
        <div className="inset-0 flex h-[85vh] items-center justify-center z-50">
            <div className="relative bg-[#CAE9F5] rounded-lg w-[90%] md:w-[80%] lg:w-[50%] mx-auto z-10 shadow-2xl overflow-hidden">
                <div className="relative bg-[#333741] rounded-t-lg py-4 px-6 -mx-0 -mt-0 -mb-9">
                    <h2 className="relative text-2xl mr-4 font-semibold text-white z-10">
                        Book List
                    </h2>
                </div>
                <div className={`flex flex-col m-6 mt-14 overflow-y-scroll max-h-[400px] md:max-h-[500px]`}>
                    {allBookDetails.map((book, index) => (
                        <div key={book.id} className={`flex flex-row p-5 ${index % 2 ? "bg-[#ececec]" : "bg-white" } text-[#636771] text-lg`}>
                            <div className="flex-flex-col space-y-1 w-[70%] pr-2 text-sm md:text-lg">
                                <span className="block self-center font-bold mb-1">{book.title}</span>
                                <span className="block self-center font-bold mb-1">{book.id ? "by" : ""} {book.author}</span>
                            </div>
                            <button onClick={() => handleClick(book.id)}
                                className="w-[30%] bg-[#333741] text-white py-2 rounded-lg font-semibold border-solid border-2 border-[#333741] 
                                transition ease-in-out hover:scale-105 hover:bg-[#CAE9F5] hover:text-[#333741]"
                                >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookList;