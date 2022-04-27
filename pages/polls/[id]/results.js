import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Progress,
  Spacer,
} from "@chakra-ui/react";

const PollResults = ({ poll }) => {
  // console.log(poll)
  // const router = useRouter();
  const totalVotes = poll.options.reduce((prev, curr) => prev + curr.votes, 0);

  return (
    <>

      <Flex
        tabIndex={-1}
        align="center"
        justify="center"
        overflow="scroll"
      >
        <Box
          width={400}
          margin={5}
          borderWidth={1}
          borderRadius="lg"
          overflow="hidden"
          p={10}
        >
          <Heading size="xl" color="purple.700">
            {poll.title}
          </Heading>
          <Text size="md">{poll.description}</Text>
          <Stack marginTop={4}>
            {poll.options.map((option, idx) => {
              let val =
                totalVotes === 0
                  ? 0
                  : Math.round((option.votes / totalVotes) * 100);
              return (
                <div key={idx}>
                  <Box borderWidth={1} borderRadius="lg" p={5}>
                    <Flex>
                      <Text> {option.description} </Text>
                      <Spacer />
                      <Text color="gray.500">
                        {" "}
                        {option.votes} votes {val != 0 && `(${val}%)`}
                      </Text>
                    </Flex>
                    <Progress colorScheme="purple" height={7} value={val} />
                  </Box>
                </div>
              );
            })}
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

PollResults.getInitialProps = async ({ query: { ...query } }) => {
  const res = await fetch(`http://localhost:3000/api/polls/${query.id}`);
  const { data } = await res.json();
  return {
    poll: data,
  };
};

export default PollResults;
