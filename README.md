# MyBou

A proof-of-concept of my idealised version of the MyUoB website (WIP).

People complain that MyUoB can be unreliable and slow, while also having a non-modern UI.

This project is an attempt to reimagine what MyUoB _should_ be like.

Although I have written code to allow for signing in with a Microsoft Account (as you would for MyUoB, Canvas etc), this app isn't currently authorised by the admins. As a result, the code would only allow you to sign in using your personal email, and **not** your uni email. So, this webapp is **not** a functional replacement for MyUoB (yet 😉).

Until this app is sufficiently featured and tested, I am not planning on getting permission to integrate this app with real data. As a result, I have made a mock back-end, which emulates the attendance-recording feature of MyUoB.

# Technical Details

Frontend:

- Typescript, Next.js.
- API route set up for authentication; this is currently not in use, but will be to pull email/calendar data.
- The server side of the Next.js app is a backend-for-frontend (BFF). Database code is instead written in the C# backend, see below. This is to separate the 'app' (MyBou) from the (mock)

Backend:

- C#, ASP.NET Core.
- Currently limited to handling attendance. When spinning up the database, it is first cleared, then populated with timetabled lectures today. This is just to guarantee that you'll see something on the frontend.

# Running the app:

## Backend

You'll need to set an environmental variable for the database password (DB_PWD). e.g. on Windows:

```shell
set DB_PWD=password

```

Then:

```shell
# Starting from project root:
cd backend
dotnet run
```

## Frontend

```shell
# Starting from project root:
cd frontend
pnpm install
pnpm run dev
```
