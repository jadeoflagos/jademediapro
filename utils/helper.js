export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const routesNames = "blog,about,case-study,contact,events,freebies,index,interview,jobs,privacy-policy,product-desc,projects,services,store,terms-and-condition,video-playing".split(",")

export const handleRoutes = (option, type) => {
    let clickedOption = option.toLowerCase();
    const spaceTesting = /\s/g.test(clickedOption);
    const slashTesting = /\//g.test(clickedOption);
    if (spaceTesting) {
        clickedOption = clickedOption.split(" ").join("-");
    } else {
        if (slashTesting) {
            const splitedOption = clickedOption.split("/");
            const link = routesNames.find(route => route.startsWith(splitedOption[0] || route.startsWith(splitedOption[1])));
            console.log({ link })
            if (link) return `/${link}`
        }
    }

    if (routesNames.includes(clickedOption)) {
        console.log({ type, option: clickedOption }, "hereeeee");
        return `/${clickedOption}`;
    }

    return `/${type}`;
};