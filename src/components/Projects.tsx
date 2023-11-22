import projects from "../constants/projects"

export const Projects = () => {
    return <section id="Projects" className="container pt-28 ">
    <h3 className="  text-2xl font-semibold">My Projects</h3>
        <ul className=" gap-7   mt-7">
            {projects.map(({title,text,id,previwe,code}) => {
                return(
                    <li className="  mt-4 flex border-2 border-black border-solid  p-3" key={id}>
                    <div className="  ml-5">
                    <h4 className=" text-lg font-bold">{title}</h4>
                    <p className="">{text}</p>
                    </div>
                    <div className="flex  items-center  justify-end w-full">
                    <a href={previwe}>Previwe</a>/
                    <a href={code}>Code</a>
                    </div>
                </li>
                )
            })}
        </ul>
    </section>
}