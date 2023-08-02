export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/doors',
      permanent: true,
    },
  };
}

export default function Index() {
  // will be permanently redirected
  return null;
}
