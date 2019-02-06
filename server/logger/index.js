import chalk from 'chalk'
const log = console.log

const checkValue = (value) => {
  if (!value) {
    return ''
  } else {
    return value
  }
}

export const red = (message, value) => {
   log(chalk.bgRed(` ${message} `), checkValue(value))
}
export const green = (message, value) => {
   log(chalk.bgGreen(` ${message} `), checkValue(value))
}
export const yellow = (message, value) => {
   // log(chalk.bgYellow(` ${message} `), checkValue(value))
  log(chalk.bgYellow(chalk.black(` ${message} `)), checkValue(value))
}
export const blue = (message, value) => {
   log(chalk.bgBlue(` ${message} `), checkValue(value))
}

export const redf = (message, value) => {
   log(chalk.red(`${message}`), checkValue(value))
}
export const greenf = (message, value) => {
   log(chalk.green(`${message}`), checkValue(value))
}
export const yellowf = (message, value) => {
   log(chalk.yellow(`${message}`), checkValue(value))
}
export const bluef = (message, value) => {
   log(chalk.blue(`${message}`), checkValue(value))
}
export default { red, green, yellow, blue, redf, greenf, yellowf, bluef }
