import sharp from "sharp";
import { uploadFileToSpaces } from "@/lib/spaces";
import { validateMimeType } from "@/utils/mime";
import path from "path";
import slugify from "slugify"

// The maximim size of image allowed
const MAX_SIZE = 100 * 1024 * 1024 // 100 MB

/**
 * Optimize an image and upload it to DigitalOcean
 * @param buffer The image buffer
 * @param originalName Name of the uploaded image
 * @returns The URL of the image as a string
 */
export async function processAndUploadImage(
  buffer: Buffer, 
  originalName: string, 
): Promise<string> {

  if (buffer.length > MAX_SIZE) {
    throw new Error('File exceeds maximum allowed size of 5 MB')
  }

  await validateMimeType(buffer)

  // Might add more here later, such as setting image dimensions or something.
  const optimizedBuffer = await sharp(buffer)
    .webp({ quality: 80 })
    .toBuffer()
  
  const mime = 'image/webp'
  const extension = 'webp'

  const baseName = slugify(path.parse(originalName).name, { lower: true, strict: true })
  const fileName = `${Date.now()}-${baseName}.${extension}`

  return await uploadFileToSpaces(optimizedBuffer, fileName, mime)
}