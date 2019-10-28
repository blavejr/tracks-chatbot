// These functions will be responsible for all file IO
// Promise lib is experimental and not for production
const { promises: fs } = require('fs');
const ENCODING = 'utf-8';

const deleteFile = async filePath => {
  return fs.unlink(filePath);
};

const readFile = async filePath => {
  return fs.readFile(filePath, ENCODING);
};

const createFile = async (filePath, data) => {
  return fs.writeFile(filePath, data, ENCODING);
};

const addToFile = async (filePath, data) => {
  return fs.appendFile(filePath, data, ENCODING);
};

module.exports = {
  deleteFile,
  readFile,
};
