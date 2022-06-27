export default function PrivacyPolicySection({
  title,
  children,
  underline,
  className,
}) {
  return (
    <div
      className={
        "lg:flex w-full pl-[3%] px-[5%] mb-4 lg:mb-[4rem] lg:px-[8.5%] " +
        (className ?? "")
      }
    >
      <h3 className="font-semibold text-[1.4rem] md:mb-[3rem] lg:w-[30%] lg:text-[1.65rem]">
        {title}
      </h3>
      <div className="text-[0.89rem] text-[#424242] lg:text-black lg:text-[0.98rem] lg:ml-[auto] lg:w-[60%]">
        <div className="lg:text-justify lg:mb-3">{children}</div>
        {underline && (
          <hr className="hidden lg:block h-[3px] bg-black m-0 p-0" />
        )}
      </div>
    </div>
  );
}