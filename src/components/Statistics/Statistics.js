import StatisticsTitle from './StatisticsTitle';
import StatisticsList from './StatisticsList';

function Statistics({ data }) {
  return (
    <section className="statistics">
      <StatisticsTitle title="Upload stats" />
      <StatisticsList stats={data} />
    </section>
  );
}

export default Statistics;
