import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


// Define the mutation for saving user workout information
export const UserWorkoutInfo = mutation({
    // Define the arguments that the mutation expects
    args: {
      age: v.string(),
      frequency: v.string(),
      gender: v.string(),
      goal: v.string(),
      gym: v.string(),
      height: v.string(),
      weight: v.string(),
      plan: v.optional(v.string()),
      forUser: v.string()
    },
    // Define the handler function for the mutation
    handler: async (ctx, userInfo) => {
      
      await ctx.db.insert("userInfo", {
        // userId,
        age: userInfo.age,
        frequency: userInfo.frequency,
        gender: userInfo.gender,
        goal: userInfo.goal,
        gym: userInfo.gym,
        height: userInfo.height,
        weight: userInfo.weight,
        plan: userInfo.plan,
        forUser: userInfo.forUser

    });
    },
  });

  export const getAllUserWorkouts = query({
    args: {},
    handler: async (ctx) => {
      const userWorkouts = await ctx.db.query("userInfo").collect();
      return userWorkouts;
    },
  });