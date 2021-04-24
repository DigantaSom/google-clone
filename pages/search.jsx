import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import SearchResults from '../components/SearchResults';

import Response from '../Response';

const Search = ({ results }) => {
  console.log(results);

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google 2.0 Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export const getServerSideProps = async context => {
  const useDummyData = true;
  const startIndex = context.query.start || '0';

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then(response => response.json());

  // After the Server has rendered, pass the results to the client(Search component)
  return {
    props: {
      results: data
    }
  };
};
