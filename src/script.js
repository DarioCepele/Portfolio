function mail()
{
  //var input = document.getElementById("userInput").value;
  //alert(input);
  const fs = require('fs');
  //let data = '\r Email: ' + input + ' \r\n';
  let data = "Learning how to write in a file.";
  
  fs.writeFile("ma.txt", data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("books.txt", "utf8"));
    }
  });
}