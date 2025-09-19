// Define MajorCredits interface with a brand to distinguish it
interface MajorCredits {
    credits: number;
    brand: "major"; // unique identifier
}

// Define MinorCredits interface with a brand to distinguish it
interface MinorCredits {
    credits: number;
    brand: "minor"; // unique identifier
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "major"
    };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "minor"
    };
}

// Example usage:
const math: MajorCredits = { credits: 3, brand: "major" };
const physics: MajorCredits = { credits: 4, brand: "major" };

const history: MinorCredits = { credits: 2, brand: "minor" };
const art: MinorCredits = { credits: 1, brand: "minor" };

console.log(sumMajorCredits(math, physics)); // { credits: 7, brand: 'major' }
console.log(sumMinorCredits(history, art));  // { credits: 3, brand: 'minor' }
