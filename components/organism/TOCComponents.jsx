import React from "react";
import { DefaultTOCLayout, ModifiedTOCLayout } from "../TOCLayout";

export function TermsConditionsMobile({ data = [] }) {
  return (
    <div className=" flex flex-col my-4 gap-y-8">
      {data.map((item, itemIndex) => (
        <DefaultTOCLayout key={itemIndex} index={itemIndex} {...item} />
      ))}
    </div>
  );
}

export function PrivacyPolicyMobile({ data = [] }) {
  return (
    <div>
      {data.map((item, itemIndex) => (
        <ModifiedTOCLayout key={item.title} index={itemIndex} {...item} />
      ))}
    </div>
  );
}
