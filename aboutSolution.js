// pages/about.js
import {getServerSideProps} from 'next';
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "../pages/api/auth/[...nextauth]";

export default function AboutPage({session}) {
  if (!session) {
    return (
      <div>
        <h1>Please sign in to view this page</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. You are logged in as {session.user.name}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      session
    }
  };
}
