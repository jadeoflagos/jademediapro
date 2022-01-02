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

export function ModifiedTOCLayout({
  title,
  paragraphs = [],
  options = {},
  additionalData = [],
  index,
  contactInfo = null,
}) {
  return (
    <div className="text-[#666666]">
      <h3 className="font-semibold text-[1.083rem]">
        {index + 1}. {title}
      </h3>
      <div className="flex flex-col">
        {paragraphs.map((p, pIndex) => {
          return (
            <Fragment key={`paragraph-index${pIndex}`}>
              <div className="mt-4">
                <span
                  className={`text-[#77459B] font-semibold ${
                    p.boldText ? "block mb-3" : ""
                  }`}
                >
                  {p.colouredText}
                </span>
                {p.boldText && (
                  <span className="font-bold text-[#666666] ">
                    {p.boldText}{" "}
                  </span>
                )}
                <p className="inline"> {p.text}</p>
              </div>
              {p.miniParagraph &&
                p.miniParagraph.map((i, iIndex) => (
                  <p key={iIndex} className="mt-3">
                    {i}
                  </p>
                ))}
            </Fragment>
          );
        })}
      </div>
      {Object.keys(options).length !== 0 && (
        <div className="mt-3">
          {options.title && <span>{options.title}</span>}
          {options.lists.length && (
            <ul className="ml-3 list-inside list-disc">
              {options.lists.map((list, listIndex) => (
                <li className="mt-2" key={`list-index${listIndex}`}>
                  {list}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {additionalData.map((data, dataIndex) => (
        <div key={dataIndex} className="flex flex-col mt-4">
          <span className="text-[#77459B] font-semibold">
            {data.colouredText}
          </span>
          <div className="mt-3">
            {data.boldText && (
              <span className="font-bold text-[#666666]">{data.boldText}</span>
            )}
            <p className="inline"> {data.text}</p>
          </div>
        </div>
      ))}
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
