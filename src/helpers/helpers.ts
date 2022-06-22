import d6Icon from "../assets/d6Icon.svg";
import d8Icon from "../assets/d8Icon.svg";
import d10Icon from "../assets/d10Icon.svg";
import d12Icon from "../assets/d12Icon.svg";
import d20Icon from "../assets/d20Icon.svg";

export const handleFilter = (filter: string, array: string[]) => {
  return array.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );
};

export const handleListofIcons = (index: number) => {
  const iconArray = [d6Icon, d8Icon, d10Icon, d12Icon, d20Icon];

  return index < 5 ? iconArray.at(index) : iconArray.at(index - 5);
};
