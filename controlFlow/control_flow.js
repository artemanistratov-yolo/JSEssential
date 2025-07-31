let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

let isLoggedIn = true;
let userMessage;

if (isLoggedIn === true) {
    if (userRole === "admin") {
        userMessage = "Welcome,Admin!";
    } else {
        userMessage = "Welcome,User!";
    }
} else {
        userMessage = "Please login into the system!";
    }

let userType = "sub"
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Admin";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "sub":
        userCategory = "Sub";
        break;
    default:
        userCategory = "Unknown";
}