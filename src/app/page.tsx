import { Hero } from "../components/Hero"
import { ModalAuth } from "@/components/modal"
import {Achievements} from "../components/Achievements"
import { Projects } from "../components/Projects"
import { AsteroidsGame } from "@/components/AsteroidsGame"
export default function Home() {
  return (
    <>
    <ModalAuth></ModalAuth>
    <Hero></Hero>
    <Achievements></Achievements>
    <AsteroidsGame></AsteroidsGame>
    <Projects></Projects>
 </>
  )
}
