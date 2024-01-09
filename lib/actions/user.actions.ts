"use server";

import { CreateUserParams, UpdateUserParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../models/user.model";
import Order from "../models/order.model";
import Event from "../models/event.model";
import { revalidatePath } from "next/cache";


//create a user
export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

//get user by their ID
export async function getUserById(userId : string)
{
    try {
        //first connect to the database
        await connectToDatabase();

        const user = await User.findById({userId});

        if(!user) throw new Error("User not found");
        return JSON.parse(JSON.stringify(user));

    
    } catch (error) {
        handleError(error);
    }

}

//update a user
export async function updateUser(clerkId : string, user : UpdateUserParams)
{
    try {
        await connectToDatabase();

        const updatedUser = await User.findOneAndUpdate({clerkId}, user, {new : true});

        if(!updatedUser) throw new Error("User update failed!");

        return JSON.parse(JSON.stringify(updateUser));
    } catch (error) {
        handleError(error);
    }
}


//delete a user
export async function deleteUser(clerkId: string) {
    try {
      await connectToDatabase()
  
      // Find user to delete
      const userToDelete = await User.findOne({ clerkId })
  
      if (!userToDelete) {
        throw new Error('User not found')
      }
  
      // Unlink relationships
      //delete all the events user had
      await Promise.all([
        // Update the 'events' collection to remove references to the user
        Event.updateMany(
          { _id: { $in: userToDelete.events } },
          { $pull: { organizer: userToDelete._id } }
        ),
        
        //delete the orders the user had
        // Update the 'orders' collection to remove references to the user
        Order.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 } }),
      ])
  
      // Delete user
      const deletedUser = await User.findByIdAndDelete(userToDelete._id)
      revalidatePath('/')
  
      return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
    } catch (error) {
      handleError(error);
    }
  }

