import StatisticsTitle from './StatisticsTitle';
import StatisticsList from './StatisticsList';

function Statistics({ title, data }) {
  return (
    <section className="statistics">
      {{ title } && <StatisticsTitle title={title} />}
      <StatisticsList stats={data} />
    </section>
  );
}

export default Statistics;
