const ExchangeRate = (props) => {
  return (
    <div className="exchange-rate">
      <p style={{ fontSize: "1.3rem" }}>Exchange Rate</p>
      {!props.exchange ? (
        <h1>0</h1>
      ) : props.loading ? (
        <h1>Converting..</h1>
      ) : (
        <h1>{props.exchange}</h1>
      )}
      <p>
        {props.firstC} to {props.secondC}
      </p>
    </div>
  );
};

export default ExchangeRate;
