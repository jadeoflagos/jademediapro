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
    <div>
      <h2 className="mb-4">Tags</h2>
      <div className="space-y-4">
        {tags.map((tag, tagIndex) => (
          <p key={tagIndex}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default Tags;
