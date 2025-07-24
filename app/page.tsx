import Image from "next/image";
import NavBar from "./components/NavBar";
import FloatingAIChatButton from "./components/FloatingAIChatButton";
import TextInputArea from "./components/TextInputArea";
import paper from "../public/wooden-floor-background.jpg"

// to run n8n locally run 'n8n start' in the cmd

export default function Home() {
  return (
    
  <div className="flex flex-col flex-1">
    {/* <div className="overflow-hidden flex flex-col flex-grow"> */}
    {/* <NavBar/>
    <Image
      src={paper}
      alt="Cover Image"
      className="object-cover"
      fill
    />
  </div> */}
        {/* <FloatingAIChatButton/> */}
          <TextInputArea/>
    </div>
  );
}
