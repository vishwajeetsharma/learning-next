import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Alert from "../alert";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Alert type="success">
        Hello
      </Alert>
      <Alert type="error">
        Hello
      </Alert>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
