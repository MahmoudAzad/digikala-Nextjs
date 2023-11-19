import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const SocialNetworks = () => {
  return (
    <div className="flex justify-between items-center col-span-2 lg:block lg:col-span-1">
      <h2 className="mb-2 font-bold">همراه ما باشید!</h2>
      <div className="grid grid-cols-4 gap-x-4 text-4xl text-gray-600 py-2">
        <AiOutlineInstagram />
        <AiOutlineTwitter />
        <AiFillLinkedin />
        <AiOutlineWhatsApp />
      </div>
    </div>
  );
};

export default SocialNetworks;
