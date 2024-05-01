import "./Aside.css";
import { List } from "../../List";
import { Link } from "../../Link";

export const Aside = function (...props) {
  const asideItems = ["AsideMenu1", "AsideMenu2", "AsideMenu3", "AsideMenu4"];
  return (
    <aside>
      <h2>Asidebar</h2>
      <List className="nav_list-col-default">
        {asideItems.map((item) => {
          return (
            <Link className="aside-link" href="#">
              {item}
            </Link>
          );
        })}
      </List>
    </aside>
  );
};
