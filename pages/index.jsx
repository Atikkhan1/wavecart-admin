
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-center items-center">
    
    <Link href={'/addProduct'}>
    <button className="w-48 h-16 border-2 p-2 bg-green-600 mt-96">Add product</button>
    </Link>
  </div>
  );
}
