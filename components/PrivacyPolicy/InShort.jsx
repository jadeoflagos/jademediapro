export default function InShort({ children }) {
  return (
    <p className="mt-4 lg:mt-3">
      <b>In short:</b> <i>{children}</i>
    </p>
  );
}