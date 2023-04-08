// import Sidebar from "components/Sidebar"
import GPTLogo from "@/components/icons/GPTLogo";
import LogoutIcon from "@/components/icons/LogoutIcon";
import ThemeIcon from "@/components/icons/ThemeIcon";
import ChatIcon from "@/components/icons/ChatIcon";
import UsersIcon from "@/components/icons/UsersIcon";
import DashboardIcon from "@/components/icons/DashboardIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="bg-black fixed left-0 top-0 h-screen w-16 z-10 flex flex-col items-center pt-4">
      <div className="w-10 h-10 bg-brandGreen rounded-full shrink-0 grid place-items-center">
        <GPTLogo className="w-6 h-6 text-blue-900" />
      </div>
      <div className="grow flex flex-col space-y-4 pt-24">
        <button className="w-10 h-10 rounded-md grid place-items-center text-brandGray">
          <DashboardIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-md grid place-items-center text-white bg-brandBlue">
          <ChatIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-md grid place-items-center text-brandGray">
          <UsersIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-md grid place-items-center text-brandGray">
          <SettingsIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="shrink-0 pb-4 flex flex-col space-y-4">
        <button className="w-10 h-10 rounded-md grid place-items-center text-white">
          <ThemeIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-md grid place-items-center text-white bg-card">
          <LogoutIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
