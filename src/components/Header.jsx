import { Link } from "react-router-dom";
import routes from "../constants/routes.constants";

export default function Header() {
  return (
    <ul>
      {Object.values(routes).map((info) => {
        return (
          <li key={info().route}>
            <Link key={info().route} to={info().route}>
              {info().text}
            </Link>{" "}
          </li>
        );
      })}
    </ul>
  );
}
