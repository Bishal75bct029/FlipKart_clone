const getImageExtension = (fileName) =>{
    return fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);
  }
module.exports = getImageExtension  