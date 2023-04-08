import Options from "@/components/icons/Options";
import Times from "@/components/icons/Times";
import trending from "./trending.json";
import TrendingIcon from "@/components/icons/TrendingIcon";
import StarIcon from "@/components/icons/StarIcon";
import WarningIcon from "@/components/icons/WarningIcon";
type Props = {};

export default function Info({}: Props) {
  return (
    <div className="border-l-2 border-l-line fixed right-0 top-0 h-screen w-80 bg-body z-10 p-3">
      <div className="flex justify-end">
        <Times className="w-5 h-5" />
      </div>
      <Heading text="Capabilities" />
      <div className="flex space-x-2">
        <div className="w-1/2 bg-card rounded-md p-2">
          <div className="w-9 h-9 rounded-full bg-brandOrange grid place-items-center">
            <StarIcon className="w-5 h-5 text-blue-900" />
          </div>
          <p className="mt-4 text-sm">
            Privus mater ita fidens stabulaus relaxo
          </p>
        </div>
        <div className="w-1/2 bg-card rounded-md p-2">
          <div className="w-9 h-9 rounded-full grid place-items-center bg-[#3a3a3c]">
            <StarIcon className="w-5 h-5 text-white" />
          </div>
          <p className="mt-4 text-sm">
            Privus mater ita fidens stabulaus relaxo
          </p>
        </div>
      </div>
      <Heading text="Limitations" />
      <div className="flex space-x-2">
        <div className="w-1/2 bg-card rounded-md p-2">
          <div className="w-9 h-9 rounded-full bg-brandOrange grid place-items-center">
            <WarningIcon className="w-5 h-5 text-blue-900" />
          </div>
          <p className="mt-4 text-sm">
            Privus mater ita fidens stabulaus relaxo
          </p>
        </div>
        <div className="w-1/2 bg-card rounded-md p-2">
          <div className="w-9 h-9 rounded-full bg-[#3a3a3c] grid place-items-center">
            <WarningIcon className="w-5 h-5 text-white" />
          </div>
          <p className="mt-4 text-sm">
            Privus mater ita fidens stabulaus relaxo
          </p>
        </div>
      </div>
      <Heading text="Trending Topics" />
      <div className="flex flex-wrap">
        {trending.map((i) => (
          <TrendingItem item={i} key={i.key} />
        ))}
      </div>

      <div className="mt-6 bg-brandBlue rounded-md p-4">
        <div className="flex items-center justify-center font-semibold">
          <div className=""> Upgrade to </div>
          <div className="ml-2 uppercase bg-brandGreen text-blue-900 rounded-md px-2 py-0.5">
            plus
          </div>
        </div>
        <p className="text-sm px-4 mt-3 text-center text-[#a6aeea]">
          Get faster response speed, priority access to new features
        </p>
        <button className="w-full bg-[#3345c5] rounded-md mt-5 py-3 font-semibold border border-[#4b5cd7]">
          Buy ChatGPT PLUS
        </button>
      </div>
    </div>
  );
}

type HeadingProps = {
  text: string;
};
function Heading({ text }: HeadingProps) {
  return (
    <div className="flex items-center justify-between mt-3 mb-1">
      <h3 className="text-md">{text}</h3>
      <Options className="w-7 h-7" />
    </div>
  );
}

type TrendingItemProps = {
  item: {
    key: number;
    text: string;
    isSelected: boolean;
  };
};
function TrendingItem({ item }: TrendingItemProps) {
  return (
    <div className="p-1">
      <div
        className={`rounded-md text-sm font-semibold py-1 px-2 flex items-center  ${
          item.isSelected ? "bg-brandGreen text-blue-900" : "bg-card"
        }`}
      >
        {item.text}
        <TrendingIcon className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
}
