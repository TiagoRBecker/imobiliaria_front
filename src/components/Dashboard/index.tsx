import Link from "next/link";
import { dashbordar } from "../Mock";

const Dash = () => {
    return ( 
        <nav className="w-full h-full">
            <ul className="w-full h-full flex flex-col items-center  mt-9 gap-10">
                {dashbordar.map((links:any, index:any)=>(
                    <li className="w-[80%] flex items-center justify-center text-white uppercase" key={index}>
                        <Link href={links.link} className="w-full flex items-center justify-start py-2  pl-10 rounded-md">{links.pathname}</Link>
                    </li>
                ))}
            </ul>
        </nav>
     );
}
 
export default Dash;