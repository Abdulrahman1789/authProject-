import { User } from "../../models/user.model";

const getAllUsers = async () => {
    const users = await User.find();
    return users;
};

const getUserById = async (id: string) => {
    const user =    await User.findById(id);
    return user;
};

const updateUser = async (id: string, payload: any) => {
    const user = await User.findByIdAndUpdate(
        id, 
        payload, 
        { 
            new: true ,
            runValidators: true
        });
    return user;
}

export const UserService = {

    getAllUsers,
    getUserById,
    updateUser

}
