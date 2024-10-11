interface PropAttributes {
  current: number;
  perfect: number;
}

const SetAttribute = ({ current, perfect }: PropAttributes) => {
  return (
    <div className="countTotal">
      &nbsp;Total Count: {current} (Suggested: 43)
      {current === perfect ? (
        <em className="circleSuggestions">•Perfect😊</em>
      ) : current > perfect ? (
        <em className="circleSuggestions">•Reduce by: {current - perfect}</em>
      ) : (
        <em className="circleSuggestions">•Increase by: {perfect - current}</em>
      )}
    </div>
  );
};

export default SetAttribute;
