const App = () => {
  return (
    <main>
      <h2>Spending - Last 7 days</h2>
      <div className="chart">
        <ul>
          <li>mon</li>
          <li>tue</li>
          <li>wed</li>
          <li>thu</li>
          <li>fri</li>
          <li>sat</li>
          <li>sun</li>
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
