# Eren's CLI Tool

A fully functional **Command Line Interface (CLI) tool** built using **Node.js and TypeScript**.
This project demonstrates the use of **Object-Oriented Programming**, **API integrations**, and **command-based utilities** using the **Commander.js** library.

---

# Features

• Built using **Node.js + TypeScript**
• Uses **Object-Oriented Programming (OOP)** with classes
• CLI command handling using **Commander.js**
• **Multiple custom CLI commands**
• **API integrations** using Axios
• **Colored terminal output** using Chalk
• **Input validation and error handling**

---

# Project Structure

```
Eren-s-CLI-Tool
│
├── dist
│   └── index.js        # Compiled JavaScript output
│
├── node_modules
│
├── index.ts            # Main CLI source code
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

---

# Installation

Clone the repository:

```
git clone https://github.com/White-Devil2839/Eren-s-CLI-Tool.git
```

Navigate into the project folder:

```
cd Eren-s-CLI-Tool
```

Install dependencies:

```
npm install
```

---

# Build the Project

Compile TypeScript into JavaScript:

```
npx tsc
```

This generates the compiled CLI in:

```
dist/index.js
```

---

# Run the CLI Tool

Link the CLI globally:

```
npm link
```

Now the CLI can be used using the command:

```
mycli <command>
```

---

# Available Commands

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| greet <name>      | Greets a user                      |
| add <a> <b>       | Adds two numbers                   |
| subtract <a> <b>  | Subtracts numbers                  |
| coinflip          | Simulates a coin flip              |
| dice              | Rolls a dice                       |
| fileinfo <file>   | Shows file information             |
| github <username> | Fetch GitHub user information      |
| quote             | Displays a random quote            |
| joke              | Displays a random joke             |
| password          | Generates a random secure password |

---

# Example Usage

```
mycli greet Divyansh

mycli add 5 10

mycli subtract 20 8

mycli coinflip

mycli dice

mycli github torvalds

mycli quote

mycli joke

mycli password

mycli fileinfo package.json
```

---

# API Integrations

This CLI integrates with external APIs using **Axios**.

### GitHub API

Fetches GitHub user information.

```
mycli github <username>
```

### Quote API

Fetches a random inspirational quote.

```
mycli quote
```

### Joke API

Fetches a random joke from the internet.

```
mycli joke
```

---

# Technologies Used

• Node.js
• TypeScript
• Commander.js
• Axios
• Chalk

---

# Author

Divyansh Choudhary
