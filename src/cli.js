import arg from "arg";
import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";
import { createGatsbyWeb } from "./main";
const { version } = require("../package.json");
function parseArgumentsIntoOptions(rawArgs) {
  try {
    const args = arg(
      {
        "--git": Boolean,
        "--yes": Boolean,
        "--install": Boolean,
        "--version": Boolean,
        "--help": Boolean,
        "-g": "--git",
        "-y": "--yes",
        "-i": "--install",
        "-v": "--version",
        "-h": "--help"
      },
      {
        argv: rawArgs.slice(2)
      }
    );
    if (args._.length == 0) {
      console.log(
        chalk.yellow(
          `Using default ${chalk.green("my-gatsby-web")} as project name`
        )
      );
    } else if (args._.length > 1) {
      console.error(
        "%s Project name contain no [space], please use [-] instead!",
        chalk.red.bold("ERROR")
      );
      process.exit(1);
    } else if (
      !/^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
        args._[0]
      )
    ) {
      console.error(
        `%s Project name only accept ${chalk.yellow("a-z, 0-9, - * . _ ~")}`,
        chalk.red.bold("ERROR")
      );
      process.exit(1);
    }

    if (args["--help"]) {
      console.log(`
    ${chalk.green("create-gatsby-web")} <project_name>${chalk.yellow(
        " <options>"
      )} 

    ${chalk.yellow("--help, -h")} ......... ${chalk.cyan(
        "show help menu for command"
      )}
    ${chalk.yellow("--git, -g")} .......... ${chalk.cyan(
        "initialize a git repository"
      )}
    ${chalk.yellow("--install, -i")} ...... ${chalk.cyan(
        "install dependencies"
      )}
    ${chalk.yellow("--version, -v")} ...... ${chalk.cyan("check CLI version")}
    ${chalk.yellow("--yes, -y")} .......... ${chalk.cyan(
        "init project with default options: Javascript, no git, no install dependencies"
      )}
    `);
      process.exit(0);
    }
    if (args["--version"]) {
      console.log(chalk.green(`v${version}`));
      process.exit(0);
    }
    return {
      skipPrompts: args["--yes"] || false,
      git: args["--git"] || false,
      template: args._[0],
      runInstall: args["--install"] || false,
      targetDirectory: args._[0] || "my-gatsby-web"
    };
  } catch (err) {
    if (err.code === "ARG_UNKNOWN_OPTION") {
      return {
        err: err.message
      };
    } else {
      throw err;
    }
  }
}
async function promptForMissingOptions(options) {
  try {
    if (options.err) {
      throw options.err;
    }
    const defaultTemplate = "JavaScript";
    const dafaultPackageManager = "yarn";
    if (options.skipPrompts) {
      return {
        ...options,
        template: options.template || defaultTemplate
      };
    }

    const questions = [];
    if (!options.template) {
      questions.push({
        type: "list",
        name: "template",
        message: "Please choose which project template to use",
        choices: ["JavaScript", "TypeScript"],
        default: defaultTemplate
      });
    }

    if (!options.git) {
      questions.push({
        type: "confirm",
        name: "git",
        message: "Initialize a git repository?",
        default: false
      });
    }

    if (options.runInstall) {
      questions.push({
        type: "list",
        name: "packageManager",
        message: "Please choose your prefer package manager",
        choices: ["yarn", "npm"],
        default: dafaultPackageManager
      });
    }

    const answers = await inquirer.prompt(questions);
    return {
      ...options,
      template: options.template || answers.template,
      git: options.git || answers.git,
      pacakgeManager: answers.packageManager
    };
  } catch (err) {
    console.error(`%s ${err}`, chalk.red.bold("ERROR"));
    console.log(`
    ${chalk.green("create-gatsby-web")} <project_name>${chalk.yellow(
      " <options>"
    )} 

    ${chalk.yellow("--help, -h")} ......... ${chalk.cyan(
      "show help menu for command"
    )}
    ${chalk.yellow("--git, -g")} .......... ${chalk.cyan(
      "initialize a git repository"
    )}
    ${chalk.yellow("--install, -i")} ...... ${chalk.cyan(
      "install dependencies"
    )}
    ${chalk.yellow("--version, -v")} ...... ${chalk.cyan("check CLI version")}
    ${chalk.yellow("--yes, -y")} .......... ${chalk.cyan(
      "init project with default options: Javascript, no git, no install dependencies"
    )}
    `);
    process.exit(1);
  }
}

export async function cli(args) {
  console.log(chalk.cyan(figlet.textSync("Create")));
  console.log(chalk.cyan(figlet.textSync("Gatsby")));
  console.log(chalk.cyan(figlet.textSync("Web")));
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createGatsbyWeb(options);
}
