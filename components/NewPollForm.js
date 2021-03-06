import { Field, FieldArray, Formik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Textarea,
  FormHelperText,
  InputGroup,
  InputRightElement,
  IconButton, useToast
} from "@chakra-ui/react";
import { useState } from "react";

import { FiEye, FiEyeOff, FiX } from "react-icons/fi";
import { useRouter } from "next/router";

const PollSchema = Yup.object().shape({
  title: Yup.string().trim()
    .max(50, 'Title cannot be longer than 50 characters!')
    .required('Please provide a title for your poll.'),
  description: Yup.string().trim()
    .max(200, 'Please keep your description to 200 characters!')
    .required('Please provide a description.'),
  options: Yup.array()
    .of(
      Yup.object().shape({
        description: Yup.string().trim()
      })
    )
    .required('Your poll needs options to be a poll!'),
  optionstext: Yup.string()
    .required('Your poll needs options to be a poll!'),
  password: Yup.string().trim(),
  createdAt: Yup.date(),
  expires: Yup.date()
  
});

const createExpiration = (days) => {
  let date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}

const NewPollForm = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const router = useRouter();
  const toast = useToast();

  const createPoll = async (values) => {
    try {
      const res = await fetch('http://localhost:3000/api/polls', {
        method: 'POST', 
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
      const {data} = await res.json()

      router.push(`/polls/${data._id}`);
      toast({
        title: 'Poll successfully created!', 
        status: 'success',
        duration: 3000, 
        isClosable: true,
        position: 'top',
      })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Flex
      align="center"
      justify="center"
      // h="100%"
      overflow="scroll"
    >
      <Box margin={4} borderWidth={1} borderRadius="lg" overflow="hidden" bg="white" p={6} rounded="md">
        <Formik
          initialValues={{
            title: "",
            description: "",
            options: [],
            optionstext: "",
            password: undefined,
            createdAt: new Date(),
            expires: createExpiration(30),
          }}
          onSubmit={(values) => {
            // same shape as initial values
            let obj;

            let ops = values.optionstext.split(',')
            console.log(ops)
            values.options = [] //clear first
            for (let i = 0; i < ops.length; i++) {
              let desc = ops[i].trim()
              obj = {
                description: desc,
                votes: 0,
              }
              
              if (!(values.options.some(e => e.description.toLowerCase() === desc.toLowerCase()))) {
                values.options.push(obj);
              }
              
            }
            // CREATE POLL
            createPoll(values);
          }}
          validationSchema={PollSchema}
        >
          {({ handleSubmit, errors, touched, values }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                {/* POLL TITLE */}
                <FormControl
                  isRequired
                  isInvalid={!!errors.title && touched.title}
                >
                  <FormLabel htmlFor="title">Poll Title</FormLabel>
                  <Field
                    as={Input}
                    id="title"
                    name="title"
                    type="text"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.title}</FormErrorMessage>
                </FormControl>

                {/* POLL DESCRIPTION */}
                <FormControl
                  isRequired
                  isInvalid={!!errors.description && touched.description}
                >
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Field
                    as={Input}
                    id="description"
                    name="description"
                    type="text"
                    variant="filled"
                    maxLength="200"
                  />
                  <FormErrorMessage>{errors.description}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isRequired
                  isInvalid={!!errors.optionstext && touched.optionstext}
                >
                  <FormLabel htmlFor="options">Poll Options</FormLabel>

                  {/* <FieldArray
                    name="options"
                    render={(arrayHelpers) => (
                      <div>
                        {values.optionstext && values.optionstext.length > 0
                          ? values.options.map((option, index) => (
                              <div key={index}>
                                <Field as={InputGroup} size="md">
                                  <Input
                                    marginBottom="0.5rem"
                                    id={`options.${index}.description`}
                                    name={`options.${index}.description`}
                                    placeholder={`Option ${index + 1}`}
                                    variant="filled"
                                  />
                                  <InputRightElement width="3rem">
                                    <IconButton
                                      icon={FiX}
                                      name="icon-button"
                                      onClick={() => arrayHelpers.remove(index)}
                                      variant="ghost"
                                      aria-label="remove-option"
                                    />
                                  </InputRightElement>
                                </Field>
                              </div>
                            ))
                          : null}
                        <Button onClick={() => arrayHelpers.push("")}>
                          Add an option
                        </Button>
                      </div>
                    )}
                  /> */}
                  <Field
                    as={Textarea}
                    id="optionstext"
                    name="optionstext"
                    type="text"
                    variant="filled"
                    maxLength="200"
                  />
                  <FormErrorMessage>{errors.optionstext}</FormErrorMessage>
                  <FormHelperText>
                    Enter the options for your poll separated by commas. Any duplicates are ignored. 
                  </FormHelperText>
                </FormControl>

                {/* PASSWORD */}
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field as={InputGroup} size="md">
                    <Input
                      id="password"
                      name="password"
                      type={show ? "text" : "password"}
                      variant="filled"
                    />
                    <InputRightElement width="3rem">
                      {show ? (
                        <IconButton
                          name="showpassword"
                          variant="ghost"
                          colorScheme="white"
                          aria-label="Show password"
                          icon={<FiEye />}
                          onClick={handleShow}
                        />
                      ) : (
                        <IconButton
                          name="showpassword"
                          variant="ghost"
                          colorScheme="white"
                          aria-label="Hide password"
                          icon={<FiEyeOff />}
                          onClick={handleShow}
                        />
                      )}
                    </InputRightElement>
                  </Field>
                  <FormHelperText>
                    Set a password to keep unwanted strangers out of your poll.
                  </FormHelperText>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                {/* POLL EXPIRATION DATE */}
                {/* <FormControl isInvalid={!!errors.expires && touched.expires}>
                  <FormLabel htmlFor="expires">Expires in</FormLabel>
                  <Field
                    as={Select}
                    id="expires"
                    name="expires"
                    variant="filled"
                    value="30"
                  >
                    <option value="1">1 day</option>
                    <option value="3">3 days</option>
                    <option value="7">7 days</option>
                    <option value="30">30 days</option>
                  </Field>
                  <FormHelperText>
                    Polls expire in 30 days by default.
                  </FormHelperText>
                  <FormErrorMessage>{errors.expires}</FormErrorMessage>
                </FormControl> */}
                {/* SUBMIT BUTTON */}
                <Button type="submit" colorScheme="purple" isFullWidth>
                  Create Poll
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default NewPollForm;