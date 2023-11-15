import Image from "next/image"
export const Hero = () => (
    <section className=" pt-40 pb-19 flex">
      <div className=" mr-36">
        <h1 className="  max-w-lg text-4xl font-bold">Hi, I am Nick,
Creative Technologist</h1>
    <p className=" max-w-lg  pt-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    <button className="px-4 py-2 rounded-md bg-primary  text-base font-medium mt-10">Download Resume</button>
    </div>
    <div>
    <Image className=" rounded-full"
  src='/nickAvatar.jpeg'
    width={243}
    height={243}
      alt="Picture of the author"></Image>
      </div>
    </section>
)