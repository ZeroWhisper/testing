import { useRouter } from 'next/router';

const Marcos = _props => {
  const { query } = useRouter();

  console.log('TESTE', query);

  return <div>TESTE's MARCOS</div>;
};

export default Marcos;