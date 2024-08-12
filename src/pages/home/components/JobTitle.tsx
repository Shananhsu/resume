import { useTranslation } from "react-i18next";

//英文職稱
const jobNameEn = ["F", "r", "o", "n", "t", "-", "E", "n", "d"];

//中文職稱
const jobNameZh = ["前", "端", "工", "程", "師"];

// 計算名字跳動取得 className
const getClassName = (index: number) => {
  const animations = [
    "animate-bounce-slow",
    "animate-bounce-delay-1",
    "animate-bounce-delay-2",
  ];
  return animations[index % animations.length];
};

// 生成隨機顏色
const generateRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// 生成不重複的顏色列表
const generateUniqueColors = (count: number): string[] => {
  const colors = new Set<string>();
  while (colors.size < count) {
    colors.add(generateRandomColor());
  }
  return Array.from(colors);
};

const JobTitle = () => {
  const { i18n } = useTranslation();
  const name = i18n.language === "en" ? jobNameEn : jobNameZh;
  const colors = generateUniqueColors(name.length);
  return (
    <div className="flex justify-center py-2">
      {name.map((item, index) => (
        <p
          key={index}
          className={`mx-2 text-2xl ${getClassName(index)}`}
          style={{ color: colors[index] }}
        >
          {item}
        </p>
      ))}
    </div>
  );
};
export default JobTitle;
