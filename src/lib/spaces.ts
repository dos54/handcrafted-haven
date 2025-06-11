/*===============================================
File: spaces.ts
Author: Steven Thomas
Date: June 07, 2025
Purpose: Functions relating to DigitalOceans and the file bucket.
===============================================*/
import { validateMimeType } from "@/utils/mime";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

// Ensure that all the required keys are present
if (process.env.NODE_ENV !== 'production') {
  const requiredVars = ['DO_SPACES_KEY', 'DO_SPACES_SECRET', 'DO_SPACES_ENDPOINT']
  for (const key of requiredVars) {
    if (!process.env[key]) {
      console.warn(`[WARN] Missing required env variable: ${key}`)
    }
  }
}

// Client object for DigitalOcean spaces
const s3Client = new S3Client({
  forcePathStyle: false,
  endpoint: process.env.DO_SPACES_ENDPOINT as string,
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.DO_SPACES_KEY as string,
    secretAccessKey: process.env.DO_SPACES_SECRET as string,
  }
})

/**
 * Upload a file to DigitalOcean Spaces.
 *
 * @param {Buffer} fileBuffer - The raw file data (e.g., an image).
 * @param {string} fileName - The name to assign to the uploaded file.
 * @param {string} contentType - The MIME type of the file (e.g., 'image/webp', 'image/png').
 * @returns {Promise<string>} The public URL of the uploaded file.
 */
export async function uploadFileToSpaces(fileBuffer: Buffer, fileName: string, contentType: string): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: process.env.DO_SPACES_BUCKET as string,
    Key: fileName,
    Body: fileBuffer,
    ACL: 'public-read',
    ContentType: contentType,
  })

  try {
    await s3Client.send(command)
    return `https://${process.env.DO_SPACES_BUCKET}.${process.env.DO_SPACES_ORIGIN}/${fileName}`
  } catch (err) {
    console.log('Upload failed', err)
    throw err
  }
}

/**
 * Delete a file from DigitalOcean spaces
 * 
 * @param url The URL of the file to be deleted
 */
export async function deleteFileFromSpaces(url: string): Promise<void> {
  const key = new URL(url).pathname.slice(1)
  const command = new DeleteObjectCommand({
    Bucket: process.env.DO_SPACES_BUCKET as string,
    Key: key
  })

  try {
    await s3Client.send(command)
    console.log('Deleted:', key)
  } catch (err) {
    console.error('Delete failed:', err)
    throw err
  }
}