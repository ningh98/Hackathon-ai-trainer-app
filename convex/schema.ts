import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";
 
// Define the tasks table schema
const tasksTable = defineTable({
    text: v.string(),         // The task description
    isCompleted: v.boolean(), // Completion status
  });




const userInfoTable = defineTable({
    // userId: v.id("users"),
    age: v.string(),
    frequency: v.string(),
    gender: v.string(),
    goal: v.string(),
    gym: v.string(),
    height: v.string(),
    weight: v.string(),
    plan: v.optional(v.string())

})



const schema = defineSchema({
  ...authTables,
  // Your other tables...
  tasks: tasksTable,
  userInfo:userInfoTable,
  

});
 
export default schema;