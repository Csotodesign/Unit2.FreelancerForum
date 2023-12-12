// Data for freelancers
const freelancerNames = ["Jackie", "Cody", "Al", "Jorge", "Alice", "Emmy"];
const skills = ['Web Development', 'Graphic Design', 'Writing', 'Marketing', 'Video Editing'];


// Function to generate a random freelancer
function generateRandomFreelancer() {
    const name = freelancerNames[Math.floor(Math.random() * freelancerNames.length)];
    const skill = skills[Math.floor(Math.random() * skills.length)];
    const hourlyRate = Math.floor(Math.random() * 50) + 20; // Random hourly rate between 20 and 70
    return { name, skill, hourlyRate };
  }

// Function to display a freelancer
function displayFreelancer(freelancer) {
    console.log(`Name: ${freelancer.name}, Skill: ${freelancer.skill}, Hourly Rate: $${freelancer.hourlyRate}`);
  }

// Function to reflect the average starting price
function updateAveragePrice(freelancers) {
  const totalHourlyRate = freelancers.reduce((sum, freelancer) => sum + freelancer.hourlyRate, 0);
  const averagePrice = totalHourlyRate / freelancers.length;
  const averagePriceElement = document.getElementById('averagePrice');
  averagePriceElement.textContent = `The average Starting Price: $${averagePrice.toFixed(2)}`;
}

// Function to generate random freelancers at intervals
function generateRandomFreelancersAtIntervals(interval, numberOfFreelancers) {
    let counter = 0;
    const intervalId = setInterval(() => {
      const freelancer = generateRandomFreelancer();
      displayFreelancer(freelancer);
      counter++;
  
      if (counter === numberOfFreelancers) {
        clearInterval(intervalId); // Stop the interval after generating the desired number of freelancers
      }
    }, interval);
  }
  

//Generate 5 random freelancers every 2 seconds
generateRandomFreelancersAtIntervals(2000, 5);