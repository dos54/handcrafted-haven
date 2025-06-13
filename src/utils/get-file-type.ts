import { fileTypeFromBuffer } from 'file-type';

export async function getFileType(buffer: Buffer): Promise<{ mime: string; extension: string }> {
  const type = await fileTypeFromBuffer(buffer);

  if (!type) {
    throw new Error('Could not determine file type');
  }

  return { mime: type.mime, extension: type.ext };
}
