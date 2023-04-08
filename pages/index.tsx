import Chat from "@/components/Chat";
import ChatHeader from "@/components/ChatHeader";
import ChatHistory from "@/components/ChatHistory";
import ChatInput from "@/components/ChatInput";
import CustomHead from "@/components/common/CustomHead";
import Info from "@/components/Info";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <CustomHead title="GPT PRO" />
      <Sidebar />
      <ChatHistory />
      <ChatHeader />
      <Chat />
      <ChatInput />
      <Info />
    </>
  );
}
