import fileUpload from 'express-fileupload';

export async function postFileService(file: fileUpload.FileArray) {
  const fileData = file.teste as fileUpload.UploadedFile;
  const uploadPath = process.cwd() + '/uploads/' + fileData.name;
  let response = { success: true, msg: 'success' };
  try {
    await fileData.mv(uploadPath);
  } catch (error) {
    response = { success: false, msg: 'error write file' };
  }
  return response;
}
