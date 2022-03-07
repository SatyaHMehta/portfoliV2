import "./portfolioList.scss";

export default function PortfolioList({ title, setSelected, active, id }) {
  return (
    <li
      className={active ? "portfolio active" : "portfolio"}
      onClick={()=>setSelected(id)}
    >
      {title}
    </li>
  );
}
