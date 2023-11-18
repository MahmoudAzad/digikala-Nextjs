import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  tooltipText: string;
}

const SinglePro_iconsTooltip: React.FC<Props> = ({ Icon, tooltipText }) => {
  return (
    <div className="group relative w-max flex items-center gap-x-2">
      <Icon className="cursor-pointer" />
      <span className="pointer-events-none text-white text-xs font-bold p-3 rounded-md absolute w-max right-0 top-0 mr-7 opacity-0 group-hover:opacity-100 bg-slate-700">
        {tooltipText}
      </span>
    </div>
  );
};

export default SinglePro_iconsTooltip;
