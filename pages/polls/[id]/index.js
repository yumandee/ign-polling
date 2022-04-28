import { useState, useEffect, useRef } from 'react'; 
import { useRouter } from 'next/router';
import { Box, Flex, Heading, Text, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, FormControl, FormLabel, Input, ModalFooter, Button, FormErrorMessage, Checkbox } from '@chakra-ui/react';

const Poll = ({ poll }) => {
  // console.log(poll.options)
  const [isOpen, setIsOpen] = useState(true);
  const finalRef = useRef();
  const initialRef = useRef();
  const router = useRouter();
  const [password, setPassword] = useState(undefined);
  const [wrongPassword, setWrongPassword] = useState(false);
  let newVotes = [];

 
  const handleChange = (e) => {
    setWrongPassword(false);
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    if (password === poll.password) {
      setIsOpen(false);
    } else {
      setWrongPassword(true);
    }
  }

  const handleCheck = (e, idx) => {
    // console.log(e.target.value, 'checked?', idx)
    e.target.checked
      ? newVotes.push(idx)
      : newVotes = newVotes.filter(vote => vote !== idx)
  }

  const vote = async () => {
    // console.log(newVotes)
    const res = await fetch(`http://localhost:3000/api/polls/${router.query.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify([router.query.id, newVotes]),

    });

    // const { data } = await res.json();

    
    router.push(`/polls/${poll._id}/results`)
  }


  return (
    <>
      {poll.password && (
        <Modal
          isCentered
          closeOnOverlayClick={false}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
        >
          <ModalOverlay backdropFilter="auto" backdropBlur="5px" />
          <ModalContent>
            <ModalHeader> This poll is password protected! </ModalHeader>
            <ModalBody pb={6}>
              <Text>
                {" "}
                Ask your poll master for the password to participate.{" "}
              </Text>
              <FormControl isInvalid={wrongPassword}>
                <FormLabel></FormLabel>
                <Input
                  ref={initialRef}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <FormErrorMessage>
                  {`That wasn't the right password.`}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="ghost"
                marginRight={4}
                onClick={() => router.push("/")}
              >
                Return Home
              </Button>
              <Button
                variant="outline"
                onClick={handleSubmit}
                colorScheme="purple"
              >
                Enter Poll
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      <Flex
        ref={finalRef}
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
              return (
                <div key={idx}>
                  <Box borderWidth={1} borderRadius="lg" p={5}>
                    <Checkbox name={idx} onChange={() => handleCheck(event, idx)}>
                      <Text> {option.description} </Text>
                    </Checkbox>
                  </Box>
                </div>
              );
            })}
          </Stack>
          <Flex marginTop={3} justifyContent="center">
            <Button marginRight={2} variant="solid" colorScheme="purple" color="white" onClick={() => vote()}> Vote </Button>
            <Button variant="outline" colorScheme="purple" onClick={()=>router.push(`/polls/${poll._id}/results`)}> Results </Button>

          </Flex>
        </Box>
      </Flex>
    </>
  );
}

Poll.getInitialProps = async ({ query: { ...query } }) => {
  const res = await fetch(`http://localhost:3000/api/polls/${query.id}`); 
  const { data } = await res.json();

  return {
    poll: data,
  }
}

export default Poll;