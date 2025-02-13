const validateImage = (url: string): boolean => {
  const imageExtensions = /\.(jpeg|jpg|png|gif|webp|bmp|tiff|svg)(\?[^ ]*)?$/i;
  if (imageExtensions.test(url)) {
      // Check if the URL has a valid protocol and structure
      const urlPattern = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
      return urlPattern.test(url);
  }
  return false;
};
export default validateImage;
