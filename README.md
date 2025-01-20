# NextAuth Session Issue in Next.js 13

This repository demonstrates a bug where the NextAuth session is not correctly passed to a protected route after a successful login in a Next.js 13 application.

## Bug Description

The `AboutPage` component attempts to access the session using `unstable_getServerSession`. However, the session variable consistently remains null, even after a successful login, preventing authorized users from accessing the page. This issue occurs despite following the official NextAuth documentation for integrating with Next.js 13.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Log in using a test account. (If the problem persists after the first steps, please check that your next-auth.js configuration is correct.)
5. Navigate to `/about`. The page will show "Please sign in to view this page" instead of the protected content.

## Solution

The solution involves checking for serverSide props (using `getServerSideProps` instead of `unstable_getServerSession` in the page). The `getServerSideProps` function retrieves the session during the server-side rendering process, eliminating the need for client-side session fetching. This approach ensures the session is available before the component renders.