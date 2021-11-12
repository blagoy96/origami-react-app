import "./NavigationItem.css";
const NavigationItem = (props) => {
  return (
    <li className="listItem">
      <span>{props.children}</span>
    </li>
  );
};

export default NavigationItem;
