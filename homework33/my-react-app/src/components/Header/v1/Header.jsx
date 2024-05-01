import "./Header.css";
import { List } from "../../List";
import { Link } from "../../Link";

export const Header = function (...props) {
  const headerItems = ["NavMenu1", "NavMenu2", "NavMenu3"];
  return (
    <header>
      <h2>Header</h2>
      <List className="nav_list-row-right">
        {headerItems.map((item) => {
          return (
            <Link className="nav_link" href="#">
              {item}
            </Link>
          );
        })}
      </List>
    </header>
  );
};
