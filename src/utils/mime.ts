/*===============================================
File: mime.ts
Author: Steven Thomas
Date: June 07, 2025
Purpose: Validate that the MIME type of a file is an allowed type
===============================================*/

import { fileTypeFromBuffer } from 'file-type'

// To allow more types, add the MIME type to this list
const allowedTypes = ['image/png', 'image/jpeg', 'image/webp']

/** 
 * Ensure that the MIME type in the file matches a type in the allowedTypes list
 * @param {Buffer} buffer The file buffer to be checked
 */
export async function validateMimeType(buffer: Buffer): Promise<void> {
  const type = await fileTypeFromBuffer(buffer)
  if (!type || !allowedTypes.includes(type.mime)) {
    throw new Error(`Invalid MIME type: ${type?.mime || 'unknown'}`)
  }
}