"use client"
import { useSearchParams } from "next/navigation";

const Search = () => {
    const searchParams = useSearchParams()
    const city = searchParams.get("city")
    const cat = searchParams.get("cat")
  
    return (  
    <section>
     <h1>Voce esta na rota de busca</h1>
     <p>{city}</p>
     <p>{cat}</p>
    </section>);
}
 
export default Search;