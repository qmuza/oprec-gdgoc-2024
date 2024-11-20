import Navbar from "../../_components/navbar";
import FormUpdate from "../../_components/formUpdate";

export default async function Update({ params }) {
  const { book_id } = await params;

  return (
    <div>
      <Navbar />
      <FormUpdate book_id={book_id} />
    </div>
  );
}