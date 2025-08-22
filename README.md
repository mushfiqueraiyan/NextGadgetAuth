# Next.js Full-Stack App with NextAuth.js

A modern full-stack web application built with Next.js 15 (App Router), featuring a public-facing site, product management dashboard, and secure authentication using NextAuth.js. The application includes a complete API for product management handled by Next.js Route Handlers, eliminating the need for a separate backend server.

## ✨ Features

- **Next.js 15** with App Router for modern React development
- **NextAuth.js** for secure authentication and session management
- **Product Management** with full CRUD operations
- **Protected Dashboard** for authenticated users
- **Responsive Design** with a public-facing site
- **API Routes** for seamless data management

## 🚀 Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [NextAuth.js](https://next-auth.js.org/) - Authentication library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.0 or later
- npm or yarn package manager
- Git

## 🛠️ Setup & Installation

Follow these steps to get the project up and running on your local machine:

### 1. Clone the Repository

```bash
git clone [your-repo-url]
cd [your-project-folder]
```

### 2. Install Dependencies

Install all necessary packages including Next.js, NextAuth.js, Prisma, and other project dependencies:

```bash
npm install
```

### 3. Run the Development Server

Start the application in development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
├── app/                    # Next.js App Router directory
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth.js API routes
│   │   └── products/      # Product management API
│   ├── dashboard/         # Protected dashboard pages
│   ├── login/             # Authentication pages
│   ├── products/          # Public product pages
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── public/               # Static assets

```

## Routes Overview

| Route                     | Description                                                        | Authentication Required |
| ------------------------- | ------------------------------------------------------------------ | ----------------------- |
| `/`                       | **Landing Page**: Hero section, product highlights, and navigation | ❌ No                   |
| `/login`                  | **Login Page**: User authentication with database verification     | ❌ No                   |
| `/products`               | **Product List**: Display all products from the API                | ❌ No                   |
| `/products/[id]`          | **Product Details**: Individual product information                | ❌ No                   |
| `/dashboard/add-product`  | **Protected Dashboard**: Add new products (authenticated only)     | ✅ Yes                  |
| `/api/auth/[...nextauth]` | **NextAuth.js API**: Authentication request handling               | ❌ No                   |
| `/api/products`           | **Products API**: GET and POST operations for products             | ❌ No                   |
| `/api/products/[id]`      | **Product Details API**: GET single product data                   | ❌ No                   |

## API Endpoints

### Products API

- `GET /api/products` - Fetch all products
- `POST /api/products` - Create a new product
- `GET /api/products/[id]` - Fetch a single product by ID

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Deploy to Vercel

1. Push your code to a Git repository
2. Import your project to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

## Support

If you encounter any issues or have questions:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [NextAuth.js documentation](https://next-auth.js.org/)
3. Open an issue in this repository
4. Check existing issues for similar problems

Made with ❤️ using Next.js and NextAuth.js
