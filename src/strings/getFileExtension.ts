export function getFileExtension(originalname: string): string {
  const filename = originalname.toLowerCase();
  const fileExt = filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);

  return fileExt;
}
