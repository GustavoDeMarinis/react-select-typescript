import React, { useEffect, useState } from "react";
import Input from "../../atoms/Input/Input";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import { handleFilter } from "../../helpers/helpers";

const SelectInput = () => {
  const [filter, setFilter] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [items, setItems] = useState<string[]>(["Alabarda", "Ecosistema"]);
  const [filteredItems, setfilteredItems] = useState<string[]>([
    "Alabarda",
    "Ecosistema",
  ]);

  useEffect(() => {
    setfilteredItems(handleFilter(filter, items));
  }, [filter, items]);

  return (
    <>
      <Input
        setItems={setItems}
        setFilter={setFilter}
        setDropdown={setDropdown}
        items={items}
        dropdown={dropdown}
      />
      <Dropdown items={filteredItems} dropdown={dropdown} />
    </>
  );
};

export default SelectInput;
