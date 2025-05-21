/*===============================================
File: role.js
Author: Steven Thomas
Date: May 15, 2025
Purpose: Define the Role schema
===============================================*/
import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
})

export default mongoose.models.Role || mongoose.model('Role', RoleSchema)