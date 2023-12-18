// This is a function to check speed and calculate demerit points
function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsPer5KmOver = 1;
    const pointsThresholdForSuspension = 12;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);

        if (demeritPoints > pointsThresholdForSuspension) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

// checking the code
const speed = 100;
checkSpeed(speed);


