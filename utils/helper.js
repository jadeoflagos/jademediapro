import { serviceData } from "../data/ServicePage/ServicePage";
import { projectData } from "../data/ProjectPage";

export const scrollToArea = (area) => {
  if (!area) return;

  if (area === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  document.readyState === "complete"
    ? setTimeout(() => {
        const documentRef = document.getElementById(area);
        if (documentRef)
          documentRef.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 1000)
    : (window.onload = () => {
        document
          .getElementById(area)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      });
};

export const routesNames =
  "blog,about,case-study,contact,events,freebies,index,interview,jobs,privacy-policy,product-desc,projects,services,store,terms-and-condition,video-playing".split(
    ","
  );

export const handleRoutes = (option, type) => {
  const optionLowerCase = option.toLowerCase();
  let clickedOption = optionLowerCase;
  const spaceTesting = /\s/g.test(clickedOption);
  const slashTesting = /\//g.test(clickedOption);
  if (spaceTesting) {
    clickedOption = clickedOption.split(" ").join("-");
  } else {
    if (slashTesting) {
      const splitedOption = clickedOption.split("/");
      const link = routesNames.find((route) =>
        route.startsWith(splitedOption[0] || route.startsWith(splitedOption[1]))
      );
      console.log({ link });
      if (link) return `/${link}`;
    }
  }

  if (routesNames.includes(clickedOption)) {
    console.log({ type, option: clickedOption }, "hereeeee");
    return `/${clickedOption}`;
  }

  if (type === "services" || type === "projects") {
    const arrayToMap = type === "services" ? serviceData : projectData;
    const arrayTitle = arrayToMap.map((item) => item.title.toLowerCase());
    const optionToTest = slashTesting
      ? optionLowerCase.split("/")[0]
      : clickedOption.startsWith("graphic")
      ? optionLowerCase.split(" ")[1]
      : optionLowerCase;
    const query = arrayTitle.find((title) => title.includes(optionToTest));

    if (query) {
      const queryIndex = arrayTitle.indexOf(query);
      return `/${type}?id=${queryIndex}`;
    }
  }
  if (type === "about") {
    const hashLink = spaceTesting
      ? optionLowerCase.replace(/\s/g, "-")
      : optionLowerCase;

    return `/${type}#${hashLink}`;
  }

  return `/${type}`;
};
