import {
  FaApple,
  FaAndroid,
  FaFire,
  FaGitAlt,
  FaGithub,
  FaGooglePlay,
  FaJs,
  FaLink,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMobile,
  FaPalette,
  FaReact,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiPython,
  SiRedux,
  SiSelenium,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBroadcast } from "react-icons/tb";

const iconMap = {
  javascript: <FaJs color="#FFCA28" />,
  typescript: <SiTypescript color="#3178c6" />,
  react: <FaReact color="#61dafb" />,
  redux: <SiRedux color="#764abc" />,
  firebase: <FaFire color="#FFCA28" />,
  firestore: <FaFire color="#FF6F00" />,
  api: <TbApi color="#4CAF50" />,
  websocket: <TbBroadcast color="#4353FF" />,
  link: <FaLink color="#00BCD4" />,
  nodejs: <SiNodedotjs color="#68a063" />,
  python: <SiPython color="#3776ab" />,
  git: <FaGitAlt color="#F05032" />,
  selenium: <SiSelenium color="#43B02A" />,
  mobile: <FaMobile color="#2196F3" />,
  palette: <FaPalette color="#FF4081" />,
  linkedin: <FaLinkedin size={18} />,
  github: <FaGithub size={18} />,
  googlePlay: <FaGooglePlay size={18} />,
  apple: <FaApple size={18} />,
  android: <FaAndroid color="#3DDC84" />,
  location: <FaMapMarkerAlt color="#F87171" />,
};

export type IconKey = keyof typeof iconMap;

export function getIcon(key: string, fallbackSize?: number) {
  const icon = iconMap[key as IconKey];

  if (!icon) {
    return null;
  }

  if (fallbackSize && icon.props?.size === undefined) {
    return { ...icon, props: { ...icon.props, size: fallbackSize } };
  }

  return icon;
}
