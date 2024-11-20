"use client";

import axios from "axios"
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormUpdate = ({ book_id }) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        "title": '',
        "author": '',
        "published_at": ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let request = {};
        for (const field in formData) {
            if (formData[field]) {
                request[field] = formData[field];
            }
        }
        if (Object.keys(request).length) {
            axios.put("/api/books/" + book_id, request);
        }
        router.push("/details/" + book_id);
    };


    return (
        <div className="inset-0 flex h-[85vh] items-center justify-center z-50">
        <div className="relative bg-[#CAE9F5] rounded-lg w-[90%] md:w-[70%] lg:w-[41%] mx-auto z-10 shadow-2xl overflow-hidden">
            <div className="relative bg-[#333741] rounded-t-lg py-4 px-6 -mx-0 -mt-0 -mb-9">
            <h2 className="relative text-2xl mr-4 font-semibold text-white z-10">
                Update Book
            </h2>
            </div>

            <div className="mt-8 p-6">
            <span className="block text-[#636771] font-bold mb-1">Fill in the values you want to update. Leave the rest blank.</span>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label className="block text-[#333741] font-extrabold mb-1">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full p-2 text-black border-solid border-2 border-[#333741] rounded-lg focus:outline-none"
                    placeholder="Input title"
                />
                </div>
                <div className="mb-4">
                <label className="block text-[#333741] font-extrabold mb-1">Author</label>
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full p-2 text-black border-solid border-2 border-[#333741] rounded-lg focus:outline-none"
                    placeholder="Input author"
                />
                </div>
                <div className="mb-4">
                <label className="block text-[#333741] font-extrabold mb-1">Publication Date</label>
                <input
                    type="text"
                    name="published_at"
                    value={formData.published_at}
                    onChange={handleInputChange}
                    className="w-full p-2 text-black border-solid border-2 border-[#333741] rounded-lg focus:outline-none"
                    placeholder="Input publication date"
                />
                </div>
                <button
                type="submit"
                className="w-full bg-[#333741] text-white py-2 rounded-lg font-semibold border-solid border-2 border-[#333741] hover:bg-white hover:text-[#333741]"
                >
                {!formData.title && !formData.author && !formData.published_at ? "Cancel" : "Submit"}
                </button>
            </form>
            </div>
        </div>
        </div>
    );
};

export default FormUpdate;