import React, { Fragment } from "react";

export function DefaultTOCLayout({
  paragraphs = [],
  options = {},
  index,
  title,
  contactInfo = null,
}) {
  return (
    <div className="text-[#666666]">
      <h3 className="font-semibold text-[1.083rem]">
        {index + 1}. {title}
      </h3>
      <div className="flex flex-col">
        {paragraphs.map((p, pIndex) => {
          const isString = typeof p === "string";
          return (
            <Fragment key={`paragraph-index${pIndex}`}>
              {!isString && (
                <span className="text-[#098B81] mt-4">{p.title}</span>
              )}
              <p className="mt-3">{isString ? p : p.text}</p>
            </Fragment>
          );
        })}
      </div>
      {Object.keys(options).length !== 0 && (
        <div>
          {options.title && <span>{options.title}</span>}
          {options.lists.length && (
            <ul className="list-inside list-disc">
              {options.lists.map((list, listIndex) => (
                <li className="mt-4" key={`list-index${listIndex}`}>
                  {list}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {contactInfo !== null && (
        <div className="flex flex-col gap-y-3 mt-4 text-[#098B81]">
          {Object.keys(contactInfo).map((key) => (
            <span key={key}>
              {key === "phone" && "Phone:"}
              {contactInfo[key]}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function ModifiedTOCLayout() {
  return <div></div>;
}
