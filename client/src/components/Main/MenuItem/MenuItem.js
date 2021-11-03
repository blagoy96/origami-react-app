import "./MenuItem.css";
const MenuItem = (props) => {
  return (
    <li className="menuItem">
      <a href="#">{props.children}</a>
    </li>
  );
};

export default MenuItem;
