const throwError = (error) => {
throw Error(`\x1b[31m${error}\x1b[0m`)
}
const warning = (warning) => {
   console.log("\x1b[33m%s\x1b[0m", "warning! " , warning)
}

module.exports = {throwError , warning}