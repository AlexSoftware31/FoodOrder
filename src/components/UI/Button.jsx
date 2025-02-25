export default function Button({ children, textOnly, className, ...props }) {
  let cssName = textOnly ? "text-button" : "button";
  cssName += " " + className;

  return (
    <button className={cssName} {...props}>
      {children}
    </button>
  );
}
