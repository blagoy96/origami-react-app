import "./FooterItem.css";
const FooterItem = (props) => {
  return (
    <li className="footerItem">
      <a href="#">{props.children}</a>
    </li>
  );
};

export default FooterItem;
