import Navbar from "../../_components/navbar";
import DetailPanel from "../../_components/detailPanel"

export default async function Details({ params }) {
  const { book_id } = await params;

  return (
    <div>   
      <Navbar />
      <DetailPanel book_id={book_id} />
    </div>
  );
}