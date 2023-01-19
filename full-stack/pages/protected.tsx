import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Router from 'next/router';

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') Router.replace('/auth/signin');
  }, [status]);
  return (
    <div>
      This page is Protected for special people. like{'\n'}
      {JSON.stringify(data?.user, null, 2)}
    </div>
  );
};

export default Protected;
