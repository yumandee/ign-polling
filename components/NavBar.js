import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100" align="center">
      <Box marginLeft={5} fontSize="3xl" color="purple.300" fontWeight="bold">
        <Link href="/" passHref paddingLeft="2">
          Polly
        </Link>
      </Box>
      <Spacer />
      <Link href="/" passHref>
        <Button variant="ghost" color="purple.400" marginRight={1}>
          {" "}
          Polls{" "}
        </Button>
      </Link>
      <Link href="/create" passHref>
        <Button variant="outline" color="purple.400" marginRight={1}>
          {" "}
          Create{" "}
        </Button>
      </Link>
    </Flex>
  );
}

export default NavBar;