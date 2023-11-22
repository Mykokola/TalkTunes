import { ContactType } from "@/types/contactsType"
import { useEffect,useState } from "react";
import getData from "@/utils/getContacts"


export const ContactsList = async  () =>{
    const data = await getData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   (async () => {
    //       const result = await getData();
    //       setData(result);
    //   })()
    // },[]);
    return(
    <section className="container pt-28">
    <h3 className=" text-2xl font-semibold">Contacts List</h3>
    <ul className="  mt-11 border-2 border-black border-solid">
        {data&& data.map(({id,name,number}:ContactType) => (
                    <li key={id} className="flex   justify-between p-1 last:border-b-0 border-b-2 border-black border-solid">
                    <p>{name}</p>
                    <p>{number}</p>
                </li>
        ))}
    </ul>
    </section>
)}
