export default function Feedback({
  feedback,
  totalFeedback,
  percentagePositive,
}) {
  return (
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {totalFeedback} </li>
      <li>Positive: {percentagePositive}%</li>
    </ul>
  );
}
