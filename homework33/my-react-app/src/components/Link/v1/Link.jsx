import "./Link.css";

export const Link = function ({ children, ...props }) {
  return <a {...props}>{children}</a>;
};
