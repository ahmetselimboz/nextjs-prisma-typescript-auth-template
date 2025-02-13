![Uygulama Ekran Görüntüsü](https://cdn.ahmetselimboz.com/images/Nextjs-Template.jpg)

# Next.js Prisma TypeScript Auth Template

A boilerplate project for building full-stack applications using Next.js, TypeScript, Prisma, MongoDB, Next-Auth.js and Redux.

## Features

- **Next.js** for server-side rendering and static site generation
- **TypeScript** for type-safe JavaScript
- **Prisma** as ORM for database management
- **MongoDB** as the database
- **Tailwind CSS** for utility-first CSS
- **NextAuth.js** for authentication with Google and credentials
- **Redux** for state management

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ahmetselimboz/next-typescript-prisma-mongodb-fullstack-project.git
    cd next-typescript-prisma-mongodb-fullstack-project
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the environment variables:

    Create a `.env` file in the root directory and add your MongoDB connection string and authentication secrets.

    ```plaintext
    DATABASE_URL="your_mongodb_connection_string"
    NEXTAUTH_SECRET="your_nextauth_secret"
    GOOGLE_CLIENT_ID="your_google_client_id"
    GOOGLE_CLIENT_SECRET="your_google_client_secret"
    ```

4. Run Prisma migrations to set up the database schema:

    ```bash
    npx prisma migrate dev
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) to see the application in action.

## Authentication

This project uses NextAuth.js for authentication. It supports both Google and credentials-based authentication.

### Google Authentication

To enable Google authentication, set the `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` environment variables in your `.env` file.

### Credentials Authentication

For credentials authentication, users can sign up and log in with a username and password.

## Project Structure

- `src/` - Application source code
  - `components/` - React components
  - `pages/` - Next.js pages
  - `styles/` - Global styles
  - `redux/` - Redux setup and slices
  - `utils/` - Utility functions
  - `hooks/` - Custom hooks

- `prisma/` - Prisma schema and migrations
- `public/` - Public assets and static files

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [Redux Documentation](https://redux.js.org/introduction/getting-started)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
