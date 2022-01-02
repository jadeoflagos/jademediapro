import React from "react";

const TableOfContent = ({ items = [] }) => {
  return (
    <div className="my-8">
      <h3 className="font-semibold text-[1.08rem]">TABLE OF CONTENTS</h3>
      <ol className="list-inside list-decimal  text-[#666666]">
        {items.map((i) => (
          <li key={i} className="mt-4">
            {i}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TableOfContent;
