import Image from "next/image";
import NavBar from "./components/NavBar";
import FloatingAIChatButton from "./components/FloatingAIChatButton";
import TextInputArea from "./components/TextInputArea";
import paper from "../public/light-paper-fibers.png"

// to run n8n locally run 'n8n start' in the cmd

export default function Home() {
  return (
    <div 
      className="flex flex-col flex-1 min-h-screen 
        h-full w-full bg-base-200">
      <Image
      src={paper}
      alt="Cover Image"
      className="object-cover opacity-25"
      fill/>
      <NavBar/>
      <TextInputArea/>
      
    </div>
  );
}
