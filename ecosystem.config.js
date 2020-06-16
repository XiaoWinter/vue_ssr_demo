const path = require("path")

modules.exports = [{
  script: path.resolve(__dirname,'echo.js') ,
  error_file: path.resolve(__dirname,'err.log') , 
  out_file:path.resolve(__dirname,'out.log') , 
  log_file: path.resolve(__dirname,'combined.log') ,
  time: true
}]