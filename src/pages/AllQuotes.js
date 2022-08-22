import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "p1", authot: "Padam", text: "Learning React is fun" },
  { id: "p2", authot: "Padam Karki", text: "Learning React is Awesome" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
