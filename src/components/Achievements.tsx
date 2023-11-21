import achivs from "@/constants/achievements"

export const Achievements = () => {
return(
    <section id="Achievements" className=" bg-blue-100 pt-7  pb-8 ">
        <div className="container">
        <h3 className=" text-3xl font-normal">Achievements</h3>
        <ul className=" mt-7 flex  gap-4 flex-wrap  justify-center">
        {achivs.map(acivka => (
            <li key={acivka.id} className=" border border-solid border-black w-80 p-3">
            <h4 className=" items-center flex gap-2">{acivka.name}</h4>
            <p className=" mt-4 text-sm font-normal">{acivka.text}</p>
            </li>
        ))}
        </ul>
        </div>
    </section>
)}

{/* <li className=" border border-solid border-black w-80 p-3">
<h4 className=" items-center flex gap-2">Code Wars  </h4>
<p className=" mt-4 text-sm font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
</li> */}