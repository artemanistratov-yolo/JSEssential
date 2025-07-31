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

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

//Dietary task

let user_Role = "Subscriber";
let access_Level;

if (user_Role === "Employee") {
    access_Level = "Dietary Services";
} else if (user_Role === "Enrolled Member") {
    access_Level = "Dietary Services plus Dietician";
} else if (user_Role === "Subscriber"){
    access_Level = "Dietary Services";
}
else if (user_Role === "Non-Subscriber"){
    access_Level = "Return to page with Subscription";
}
else {
    access_Level = "No access granted";
}
