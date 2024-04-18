function calculateSpeed(distance, time) {
    // Check if time is not zero to avoid division by zero
    if (time === 0) {
        return "Time taken cannot be zero.";
    }

    // Calculate speed by dividing distance by time
    const speed = distance / time;

    // Return the calculated speed
    return speed;
}

const distanceCovered = 100; // in meters
const timeTaken = 10; // in seconds
const speed = calculateSpeed(distanceCovered, timeTaken);
console.log("Speed:", speed, "m/s"); 

