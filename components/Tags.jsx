import React from "react";

const Tags = () => {
  const tags = [
    "Technology",
    "Open Source",
    "JavaScript",
    "Minimalism",
    "Self-help",
    "Animals",
    "Herbivores",
    "HTML",
    "CSS",
    "PHP",
    "Web Technologies",
    "Career",
    "Life",
    "Spirituality",
    "Food",
    "Cooking",
    "Sports",
    "Racing",
    "Mountain Hiking",
    "Cruising",
  ];
  return (
    <div className="pt-6 lg:pt-0">
      <p className="mb-4 font-bold">Tags</p>
      <div className="space-y-4 hidden lg:block">
        {tags.splice(0, 11).map((tag, tagIndex) => (
          <p key={tagIndex} className="text-base ">
            {tag}
          </p>
        ))}
      </div>
      <div className="space-y-2 lg:hidden text-xs">
        {tags.slice(0, 3).map((tag, tagIndex) => (
          <p key={tagIndex} className="text-[0.68rem]">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tags;
