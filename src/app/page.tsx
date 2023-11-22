import { Hero } from "../components/Hero"

import {Achievements} from "../components/Achievements"
import { Projects } from "../components/Projects"
import { AsteroidsGame } from "@/components/AsteroidsGame"
import { ContactsList } from "@/components/ContactsList";

export default  function  Home() {
  return (
    <>
    <Hero></Hero>
    <Achievements></Achievements>
    <AsteroidsGame></AsteroidsGame>
    <Projects></Projects>
    <ContactsList></ContactsList>

 </>
  )
}
