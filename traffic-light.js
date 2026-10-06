// Traffic light 
function checkTrafficLight(color) {
    switch (color.toLowerCase()) {
        case "red":
            console.log("Stop");
            break;
        case "yellow":
            console.log("Get Ready");
            break;
        case "green":
            console.log("Go");
            break;
        default:
            console.log("Invalid color");
    }
}

// Example usage:
checkTrafficLight("green");