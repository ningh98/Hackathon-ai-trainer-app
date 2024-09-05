import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { auth } from "./auth";

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
    },
    // Define the handler function for the mutation
    handler: async (ctx, userInfo) => {
        // Step 1: Get the authenticated user's ID
    // const userId = await auth.getUserId(ctx);

    // // Step 2: Handle unauthenticated calls
    // if (!userId) {
    //   throw new Error("User is not authenticated");
    // }

    
        
    
    
    
      
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

    });
    },
  });