type Role = "Admin" | "Viewer" | "Editor";

const canEdit = (role: Role): boolean => {
    if(role == "Admin"){
        return true
    }else if(role == "Editor"){
        return true
    }

    return false
}

console.log(canEdit("Admin"))