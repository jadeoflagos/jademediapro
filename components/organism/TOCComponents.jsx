import React from "react";
import { DefaultTOCLayout } from "../TOCLayout";

export function TermsConditionsMobile({ data = [] }) {
  return (
    <div className=" flex flex-col my-4 gap-y-8">
      {data.map((data, dataIndex) => (
        <DefaultTOCLayout key={data.title} index={dataIndex} {...data} />
      ))}
    </div>
  );
}

export function PrivacyPolicyMobile() {
  return <div></div>;
}
