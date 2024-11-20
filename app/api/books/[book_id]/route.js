import { NextResponse } from 'next/server';
import  Books  from '../../models/books';
import { connectDB } from '../../config/db.js';
import { removeAutoGenFields } from '../../controllers/cleanDBResult';

await connectDB();

export async function PUT(req, { params }) {
    const { book_id } = await params;

    try {
        const newValues = await req.json();
        newValues.updated_at = new Date().toISOString(); //set value dari request + updated_at jadiin saat ini

        const res = await Books.findOneAndUpdate({
            id: book_id
        }, {
            $set: newValues
        }, { returnDocument: 'after'});
    
        if (res) {
            return NextResponse.json({
                "message": "Book updated successfully",
                "data": removeAutoGenFields(res)
            }, {status: 200});
        } else {
            return NextResponse.json({
                "message": "Book not found"
            }, {status: 404});
        };
    } catch {
        return NextResponse.json({
            "message": "Invalid JSON"
        }, {status: 400});
    };
};

export async function DELETE(req, { params }) {
    const { book_id } = await params;

    const res = await Books.findOneAndDelete({
        id: book_id
    });

    if (res) {
        return NextResponse.json({
            "message": "Book deleted successfully"
        }, {status: 200});
    } else {
        return NextResponse.json({
            "message": "Book not found"
        }, {status: 404});
    };
};

export async function GET(req, {params}) {
    const { book_id } = await params;

    const res = await Books.findOne({
        id: book_id
    });

    if (res) {
        return NextResponse.json({
            "data": removeAutoGenFields(res)
        }, {status: 200});
    } else {
        return NextResponse.json({
            "message": "Book not found"
        }, {status: 404});
    };
};
