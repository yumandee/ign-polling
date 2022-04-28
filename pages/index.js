import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

import Link from "next/link";

import React from "react";

const Index = ({ polls }) => {
  return (
    <>
      <Flex flexWrap="wrap" align="center" justify="center">
        {polls.map((poll) => {
          const totalVotes = poll.options.reduce(
            (prev, curr) => prev + curr.votes,
            0
          );
          return (
            <React.Fragment key={poll._id}>
              <Box
                borderWidth={1}
                borderRadius="lg"
                p={6}
                width={300}
                maxWidth={300}
                height={200}
                margin={4}
                key={poll._id}
              >
                <Link href={`/polls/${poll._id}`} passHref>
                  <Heading color="purple.400">
                    <a href={`/polls/${poll._id}`}>{poll.title}</a>
                  </Heading>
                </Link>
                <Text fontSize={20}>{poll.description}</Text>
                <Text color="gray.700">{totalVotes} people have voted. </Text>
              </Box>
            </React.Fragment>
          ); }
        )}
      </Flex>
    </>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/polls');
  const { data } = await res.json();

  
  return {
    polls: data,
  }
}

export default Index;