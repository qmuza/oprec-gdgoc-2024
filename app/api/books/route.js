import { NextResponse } from 'next/server';
import  Books  from '../models/books';
import { connectDB } from '../config/db.js';
import { removeAutoGenFields } from '../controllers/cleanDBResult';

await connectDB();

export async function GET(req) {
    const res = await Books.find({}).sort({ id: -1 });

    let formatted = [];
    res.forEach((book) => {
        formatted.push(removeAutoGenFields(book));
    });

    return NextResponse.json({
        "data": formatted
    }, {status: 200});
};

export async function POST(req) {
    try {
        const { title, author, published_at } = await req.json();

        if(!title || !author || !published_at) {
            return NextResponse.json({
                "message": "Incomplete parameters"
            }, {status: 400});
        };
    
        const highestID = await Books.findOne({}).sort({ id: -1 }) || {"id": 0}; //jaga jaga kalo DB masih kosong, harusnya highestID return null, bakal error kalo langsung akses .id
    
        const res = await Books.create({
            "title": title,
            "author": author,
            "published_at": published_at,
            "updated_at": new Date().toISOString(),
            "created_at": new Date().toISOString(),
            "id": highestID.id + 1
        });
    
        return NextResponse.json({
            "message": "Book created successfully",
            "data": removeAutoGenFields(res)
        }, {status: 201});
    } catch {
        return NextResponse.json({
            "message": "Invalid JSON"
        }, {status: 400});
    };
};
