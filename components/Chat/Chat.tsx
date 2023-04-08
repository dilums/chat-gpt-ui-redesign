import data from "./data.json";
import GPTLogo from "@/components/icons/GPTLogo";
import Pencil from "@/components/icons/Pencil";
import ThumbsUp from "@/components/icons/ThumbsUp";
import ThumbsDown from "@/components/icons/ThumbsDown";
type Props = {};

export default function Chat({}: Props) {
  return (
    <div className=" " style={{ marginLeft: "384px", marginRight: "320px" }}>
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-40">
        {data.map((i) => (
          <Item item={i} key={i.key} />
        ))}
      </div>
    </div>
  );
}

type ItemProps = {
  item: {
    key: number;
    text: string;
    isUser: boolean;
  };
};

function Item({ item }: ItemProps) {
  return (
    <div className="py-2" key={item.key}>
      <div className="bg-item rounded-md flex p-2">
        <div className="shrink-0 w-10">
          <div className="w-10 h-10 grid place-items-center">
            {item.isUser ? (
              <div
                className="w-8 h-8 rounded-full bg-center bg-cover"
                style={{ backgroundImage: 'url("/avatar.jpg")' }}
              ></div>
            ) : (
              <div className="w-8 h-8 grid place-items-center bg-brandGreen rounded-full">
                <GPTLogo className="w-6 h-6 text-blue-900" />
              </div>
            )}
          </div>
        </div>
        <div className=" w-full">
          <div className="px-3 h-10 flex items-center justify-between grow text-brandGray ">
            <div className="text-sm"> 12 Mar </div>
            {item.isUser ? (
              <div className="inline-flex items-center">
                <button className="w-7 h-7 rounded-md grid place-items-center">
                  <Pencil className="w-5 h-5 " />
                </button>
              </div>
            ) : (
              <div className="inline-flex items-center space-x-2">
                <button className="w-7 h-7 rounded-md grid place-items-center">
                  <ThumbsUp className="w-5 h-5 " />
                </button>
                <button className="w-7 h-7 rounded-md grid place-items-center">
                  <ThumbsDown className="w-5 h-5 " />
                </button>
              </div>
            )}
          </div>
          <div
            className={`px-3 pb-3 ${
              item.isUser ? "text-white" : "text-brandGray"
            }`}
          >
            {item.text}
          </div>
        </div>
      </div>
    </div>
  );
}
