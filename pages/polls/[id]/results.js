import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Results from "../../../components/Results";
const PollResults = ({ initialPoll }) => {
  const [result, setResult] = useState(initialPoll);

  const router = useRouter();
  useEffect(()  => {
    const interval = setInterval( async () => {
      const res = await fetch(
        `http://localhost:3000/api/polls/${router.query.id}`
      );
      const { data } = await res.json();
      
      setResult(data)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Results poll={result} />
  );
};

PollResults.getInitialProps = async ({ query: { ...query } }) => {
  const res = await fetch(`http://localhost:3000/api/polls/${query.id}`);
  const { data } = await res.json();
  return {
    initialPoll: data,
  };
};



export default PollResults;
