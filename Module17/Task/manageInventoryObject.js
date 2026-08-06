function manageInventoryObject(obj, action) {

    // Validation
    if (typeof obj !== "object" || obj === null || Array.isArray(obj) || typeof action !== "string") {
        return "Invalid";
    }
    // Keys
    if (action === "keys") {
        return Object.keys(obj);
    }
    // Values
    if (action === "values") {
        return Object.values(obj);
    }
    // Entries
    if (action === "entries") {
        return Object.entries(obj);
    }
    // Delete Property
    if (action.startsWith("delete:")) {
        const propertyName = action.split(":")[1];
        const newObject = { ...obj };
        delete newObject[propertyName];
        return newObject;
    }
    // Seal
    if (action === "seal") {
        return Object.seal(obj);
    }
    // Freeze
    if (action === "freeze") {
        return Object.freeze(obj);
    }
    return "Invalid";
}