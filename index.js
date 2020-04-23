const fs = require("fs");

module.exports = function filesToFileJSON(fileDir) {
  fs.readdir(`${fileDir}`, "utf8", function callback(error, fileList) {
    if (error) console.log(error);
    else {
      let readFileArray = [];
      indexCount = 0;
      fileList.forEach(function (file, index) {
        fs.readFile(`${fileDir}/${file}`, "utf8", function callback(
          error,
          readFile
        ) {
          if (error) console.log(error);
          else {
            indexCount++;
            readFileArray[index] = { [file]: JSON.parse(readFile) };
            if (indexCount === fileList.length) {
              const stringyfyFileArray = JSON.stringify(readFileArray, null, 2);
              fs.writeFile(
                `${fileDir}/F2F JSON FILE.json`,
                stringyfyFileArray,
                function callback(error) {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log(`file has been written, ${fileDir}`);
                  }
                }
              );
            }
          }
        });
      });
    }
  });
}
