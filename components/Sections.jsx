import styles from "../styles/Home.module.css";
import { isObject, isArray } from "../utils/validators";

const Sections = ({ data = [], pageTitle }) => {
  return (
    <div className={`${styles.sections}`}>
      {data.map((item, itemIndex) => {
        const checkObject = isObject(item.content);
        const checkArray = isArray(item.content);
        const checkIndex = itemIndex === 0 && pageTitle !== "privacy-policy";

        return (
          <div
            key={`${pageTitle}-section-index${itemIndex}`}
            className={`${styles.section} ${
              checkIndex ? styles.noBottomSpace : ""
            }`}
          >
            <span className="font-semibold text-[1.3rem]">
              {item.title === "heading" ? "" : item.title}
            </span>
            <div
              className={`${
                item.underline ? styles.underline : ""
              } max-w-[57.37rem]`}
            >
              {item.content.fullDescription && (
                <p className="mb-[2.56rem]">{item.content.fullDescription}</p>
              )}
              {!checkObject &&
                (checkArray ? (
                  item.content.map((i, iIndex, arr) => (
                    <p
                      className={`${
                        arr.length - 1 !== iIndex ? "mb-[2.314rem]" : "mb-auto"
                      }`}
                      key={`content-item${iIndex}`}
                    >
                      {i}
                    </p>
                  ))
                ) : (
                  <p
                    className={`${
                      item.title === "heading" ? "font-semibold" : ""
                    }`}
                  >
                    {item.content}
                  </p>
                ))}
              {checkObject && (
                <div className={`flex flex-col`}>
                  <span
                    className={`${
                      pageTitle !== "privacy-policy"
                        ? ""
                        : "text-[#502A7A] font-semibold "
                    } mb-[2.56rem]`}
                  >
                    {item.content.title}
                  </span>
                  {item.content.options.map((i) => (
                    <div className="flex items-center leading-relaxed">
                      {pageTitle !== "privacy-policy" ? (
                        ""
                      ) : (
                        <img
                          className="w-3 h-3"
                          src="/vectors/arrow-option.svg"
                          alt="list-icon"
                        />
                      )}
                      <span
                        className={`${
                          pageTitle === "privacy-policy" ? "ml-[1.18rem]" : ""
                        }`}
                      >
                        {i}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sections;
