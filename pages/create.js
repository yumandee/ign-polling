import NewPollForm from "../components/NewPollForm";
import Head from "next/head";

const CreatePage = () => {
  return (
    <>
      <Head>
        <title>Create Poll</title>
        <meta name="description" content="Create new poll" />
        <link rel="icon" href="/code-foo-logo.svg" />
      </Head>
      <NewPollForm />
    </>
  );
}

export default CreatePage;