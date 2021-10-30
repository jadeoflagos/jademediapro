import styles from "../styles/Home.module.css";
import { isObject, isArray } from "../utils/validators";

const Sections = ({ data = [], pageTitle }) => {
  return (
    <div className={`${styles.sections}`}>
      {data.map((item, itemIndex) => {
        const checkObject = isObject(item.content);
        const checkArray = isArray(item.content);

        return (
          <div
            key={`${pageTitle}-section-index${itemIndex}`}
            className={`${styles.section}`}
          >
            <span className="font-semibold">{item.title}</span>
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
                  item.content.map((i, iIndex) => (
                    <p key={`content-item${iIndex}`}>{i}</p>
                  ))
                ) : (
                  <p>{item.content}</p>
                ))}
              {checkObject && (
                <div className={`flex flex-col`}>
                  <span className="text-[#502A7A] font-semibold mb-[2.56rem]">
                    {item.content.title}
                  </span>
                  {item.content.options.map((i) => (
                    <div className="flex">
                      <img src="/vectors/arrow-option.svg" alt="list-icon" />
                      <span>{i}</span>
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
