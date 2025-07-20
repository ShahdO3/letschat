import Image from "next/image";
import NavBar from "./components/NavBar";
import FloatingAIChatButton from "./components/FloatingAIChatButton";
import TextInputArea from "./components/TextInputArea";

// to run n8n locally run 'n8n start' in the cmd

export default function Home() {
  return (
  <div className="flex flex-col flex-1">
        {/* <FloatingAIChatButton/> */}
        

          <TextInputArea/>
    </div>
  );
}
