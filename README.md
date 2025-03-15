# Personalized Greeting API

This is a simple Express-based API built with TypeScript/Node.js that provides a personalized greeting message.

## Features

- Provides a welcome message at the root URL `/`
- Generates a personalized greeting message at `/greet-{name}`
- Extracts the first three letters of the provided name for the greeting
- Built using Express.js and TypeScript

## File Structure

```
├── README.md
├── package-lock.json
├── package.json
├── personalized_greeting.iml
├── src
│   └── index.ts
└── tsconfig.json

```

## Installation & Setup

### Prerequisites

Ensure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

### Clone the Repository

```bash
git clone https://github.com/your-username/personalized_greeting.git
cd personalized_greeting

```

### Install Dependencies

```bash
npm install

```

### Run the Server

```bash
npx ts-node src/index.ts

```

The server will start running at `http://localhost:3000`

## API Endpoints

### Root Endpoint

- **URL:** `/`
- **Method:** `GET`
- **Response:**

```json
{
  "message": "Welcome to the Greeting API! The task is to implement /greet-{name} to get a personalized greeting."
}

```

### Personalized Greeting Endpoint

- **URL:** `/greet-{name}`
- **Method:** `GET`
- **Response Example:**

```json
{
  "message": "Hello! I am Joh.. Cheers 🥂"
}

```

(where `{name}` is truncated to the first three characters)

## Configuration

The TypeScript configuration is stored in `tsconfig.json`, specifying compilation options such as output directory and module resolution.

## Dependencies

- **Express.js** - Web framework for Node.js
- **TypeScript** - Statically typed JavaScript
- **ts-node** - TypeScript execution environment

## License

This project is licensed under the ISC License.

## Author

Your Name (Update this section with your details)

# Visualization

![mermaid-diagram-2025-03-16-024731.svg](attachment:73493038-97be-4435-88cd-062ccd59f769:mermaid-diagram-2025-03-16-024731.svg)
https://www.notion.so/1b72958950ce80bf8c98e96e8875be9c?pvs=4#1b72958950ce804eb631e5b3b3223acf
