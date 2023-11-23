import Image from "next/image"
export const Hero = () => (
    <section className="container pt-40  pb-16 flex">
      <div className=" mr-36">
        <h1 className="  max-w-lg text-4xl font-bold">Hi, I am Nick</h1>
    <p className=" max-w-lg  pt-10">I am a goal-oriented and responsible person looking for a frontd end developer position. I have experience with JavaScript, React,
Redux, HTML/CSS, SASS/SCSS and Node.js. I am well versed in BEM
methodology, cross-browser and responsive web development. I
am ready to accept new challenges, improve my skills and gain new
experience as a developer. I get along well with people and can
talk to them about different topics. I look forward to being part of
a professional team
</p>
   <a href="cv_mykola_vladymyrskiy (1) (3).pdf" download> <button className="px-4 py-2 bg-red-400 text-white text-lg font-medium mt-10">Download Resume</button></a>
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