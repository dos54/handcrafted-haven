/*===============================================
File: index.js
Author: Steven Thomas
Date: May 15, 2025
Purpose: Handle mongodb connections. General connection logic, etc.
===============================================*/
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) throw new Error('MONGODB_URI not defined in .env')

// I am caching the connection to avoid constantly re-connection on every hot reload.
let cached = global.mongoose || { conn: null, promise: null }

export async function connectToDatabase() {
  if (cached.conn) return cached.conn
  
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false
    })
  }

  cached.conn = await cached.promise
  console.log('Connected to MongoDB')
  global.mongoose = cached
  return cached.conn
}

export async function pingDatabase() {
  const conn = await connectToDatabase()
  let result = await conn.connection.db.admin().ping()
  console.log('Ping result', result)
}