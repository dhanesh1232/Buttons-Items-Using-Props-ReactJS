const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <div className="innerBg">
      <h1 className="head">Social Buttons</h1>
      <div className="buttonContainer">
        <Button buttonText="Like" className="like-button" />
        <Button buttonText="comment" className="comment" />
        <Button buttonText="Share" className="share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
