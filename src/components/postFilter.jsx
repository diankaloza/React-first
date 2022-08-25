import React from "react";
import { MyInput } from "./UI/input/myInput";
import { MySelect } from "./UI/select/mySelect";

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Пошук..."
      />
      <MySelect
        defaultValue="Сортування"
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: "title", name: "По назві" },
          { value: "body", name: "По опису" },
        ]}
      ></MySelect>
    </div>
  );
};
