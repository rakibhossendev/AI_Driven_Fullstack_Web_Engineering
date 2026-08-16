type userRole = "Admin" | "Moderator" | "Guest";
interface User{
    name: string,
    role: userRole;
    email: string;
}
interface Admin extends User{
    permissions: string[];
}
interface Moderator extends User{
    moderatorPermission: string[];
}
const Meghla: Admin = {
    name: "Meghla",
    role: "Admin",
    email: "example@gmail.com",
    permissions: ["Mange_Users","Edit Content"]
}