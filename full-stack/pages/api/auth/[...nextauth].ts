import NextAuth from 'next-auth';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // performing login logic
        // finding user from db
        if (email === 'john@gmail.com' && password !== '1234') {
          throw new Error('invalid credentials');
        }
        //if everything is fine
        return { id: '1234', name: 'john Doe', email: 'john@gmail.com' };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
};

export default NextAuth(authOptions);
