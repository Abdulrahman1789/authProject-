import { User } from "../../models/user.model";
import { AppError } from "../../utils";

const getAllUsers = async () => {
    const users = await User.find();
    return users;
};

const getUserById = async (id: string) => {
    const user = await User.findById(id);

    if (!user) {
        throw new AppError("User Not Found", 404);
    }

    return user;
};

const updateUser = async (id: string, payload: any) => {

    const { name, email } = payload;

    const updatedData = {
        name,
        email
    };


    const user = await User.findByIdAndUpdate(
        id,
        payload,
        {
            new: true,
            runValidators: true
        });

    if (!user) {
        throw new AppError("User Not Found", 404)
    }

    return user;
}

const deleteUser = async (id: string) => {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
        throw new AppError("User Not Found", 404);
    }

    return user;
}

export const UserService = {

    getAllUsers,
    getUserById,
    updateUser,
    deleteUser

}
