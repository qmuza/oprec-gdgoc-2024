import axios from "axios";
import Navbar from "../../_components/navbar";
import FormDelete from "../../_components/formDelete";

export default async function Delete({ params }) {
  const { book_id } = await params;

  return (
    <div>
      <Navbar />
      <FormDelete book_id={book_id}/>
    </div>
  );
}