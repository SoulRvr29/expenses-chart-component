import chartData from "./data.json";

const App = () => {
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let currentDay = days[new Date().getDay()];

  return (
    <main>
      <h2>Spending - Last 7 days</h2>
      <div className="chart">
        <ul>
          {chartData.map((data) => (
            <li key={data.day}>
              <div className="amount">${data.amount}</div>
              <div
                className={`bar ${data.day == currentDay && "currentDay"}`}
                style={{
                  maxHeight: `${data.amount * 3}px`,
                }}
              ></div>
              {data.day}
            </li>
          ))}
        </ul>
      </div>
      <div className="summary">
        <div className="total">
          <p>Total this month</p>
          <div className="price">$478.33</div>
        </div>
        <div className="difference">
          <div className="percent">+2.4%</div>
          <p>from last month</p>
        </div>
      </div>
    </main>
  );
};

export default App;
