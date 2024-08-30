import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";
 
// Define the tasks table schema
const tasksTable = defineTable({
    text: v.string(),         // The task description
    isCompleted: v.boolean(), // Completion status
  });

const schema = defineSchema({
  ...authTables,
  // Your other tables...
  tasks: tasksTable,

});
 
export default schema;