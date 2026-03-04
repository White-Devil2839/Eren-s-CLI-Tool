#!/usr/bin/env node

import { Command } from "commander"
import axios from "axios"
import chalk from "chalk"
import fs from "fs"
import path from "path"

const program = new Command()

/* ---------------- COMMAND CLASSES ---------------- */

class GreetCommand {
  execute(name: string) {
    console.log(chalk.green(`Hello ${name}! Welcome to Eren CLI Tool.`))
  }
}

class AddCommand {
  execute(a: string, b: string) {
    const n1 = Number(a)
    const n2 = Number(b)

    if (isNaN(n1) || isNaN(n2)) {
      console.log(chalk.red("Both inputs must be numbers"))
      return
    }

    console.log(chalk.yellow(`Result: ${n1 + n2}`))
  }
}

class PasswordCommand {
  execute() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

    let password = ""

    for (let i = 0; i < 12; i++) {
      password += chars[Math.floor(Math.random() * chars.length)]
    }

    console.log(chalk.yellow(`Generated Password: ${password}`))
  }
}

class SubtractCommand {
  execute(a: string, b: string) {
    const n1 = Number(a)
    const n2 = Number(b)

    console.log(chalk.yellow(`Result: ${n1 - n2}`))
  }
}

class CoinFlipCommand {
  execute() {
    const result = Math.random() < 0.5 ? "Heads" : "Tails"
    console.log(chalk.cyan(`Coin: ${result}`))
  }
}

class DiceCommand {
  execute() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(chalk.yellow(`Dice rolled: ${roll}`))
  }
}

class FileInfoCommand {
  execute(file: string) {
    const fullPath = path.resolve(file)

    if (!fs.existsSync(fullPath)) {
      console.log(chalk.red("File not found"))
      return
    }

    const stats = fs.statSync(fullPath)

    console.log(chalk.green("File Info"))
    console.log("Path:", fullPath)
    console.log("Size:", stats.size, "bytes")
    console.log("Modified:", stats.mtime)
  }
}

/* ---------------- API COMMANDS ---------------- */

class GitHubCommand {
  async execute(username: string) {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      )

      console.log(chalk.green(`User: ${data.login}`))
      console.log("Followers:", data.followers)
      console.log("Public Repos:", data.public_repos)
    } catch {
      console.log(chalk.red("GitHub user not found"))
    }
  }
}

class QuoteCommand {
  async execute() {
    const { data } = await axios.get(
      "https://dummyjson.com/quotes/random"
    )

    console.log(chalk.cyan(`"${data.quote}"`))
    console.log(`— ${data.author}`)
  }
}

class JokeCommand {
  async execute() {
    const { data } = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    )

    console.log(chalk.magenta(data.setup))
    console.log(chalk.yellow(data.punchline))
  }
}

/* ---------------- PROGRAM SETUP ---------------- */

program.version("1.0.0")

program
  .command("greet <name>")
  .description("Greet a user")
  .action((name) => new GreetCommand().execute(name))

program
  .command("add <a> <b>")
  .description("Add two numbers")
  .action((a, b) => new AddCommand().execute(a, b))

program
  .command("subtract <a> <b>")
  .description("Subtract numbers")
  .action((a, b) => new SubtractCommand().execute(a, b))

program
  .command("coinflip")
  .description("Flip a coin")
  .action(() => new CoinFlipCommand().execute())

program
  .command("dice")
  .description("Roll a dice")
  .action(() => new DiceCommand().execute())

program
  .command("fileinfo <file>")
  .description("Show file information")
  .action((file) => new FileInfoCommand().execute(file))

program
  .command("github <username>")
  .description("Fetch GitHub user info")
  .action((username) => new GitHubCommand().execute(username))

program
  .command("quote")
  .description("Get a random quote")
  .action(() => new QuoteCommand().execute())

program
  .command("joke")
  .description("Get a random joke")
  .action(() => new JokeCommand().execute())


program
  .command("password")
  .description("Generate a random password")
  .action(() => new PasswordCommand().execute())

program.parse()