function StatisticsTitle({ title }) {
  return { title } > 0 && <h2 className="title">{title}</h2>;
}

export default StatisticsTitle;
