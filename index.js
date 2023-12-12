// Data for freelancers
const freelancerNames = ["Jackie", "Cody", "Al", "Jorge", "Alice", "Emmy"];
const skills = ['Web Development', 'Graphic Design', 'Writing', 'Marketing', 'Video Editing'];


// Function to generate a random freelancer
function generateRandomFreelancer() {
    const name = freelancerNames[Math.floor(Math.random() * freelancerNames.length)];
    const skill = skills[Math.floor(Math.random() * skills.length)];
    const hourlyRate = Math.floor(Math.random() * 50) + 20; // Random starting price between 20 and 70
    return { name, skill, hourlyRate };
  }

// Function to display and render the random freelancers
function displayFreelancer(freelancer) {
    const freelancersList = document.getElementById('freelancersList');
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${freelancer.name}, Occupation: ${freelancer.skill}, Starting Price: $${freelancer.hourlyRate}`;
    freelancersList.appendChild(listItem);
  }

// Function to reflect the average starting price
function updateAveragePrice(freelancers) {
  const totalHourlyRate = freelancers.reduce((sum, freelancer) => sum + freelancer.hourlyRate, 0);
  const averagePrice = totalHourlyRate / freelancers.length;
  const averagePriceElement = document.getElementById('averagePrice');
  averagePriceElement.textContent = `The average starting price is $${averagePrice.toFixed(2)}`;
}

// Function to generate random freelancers at intervals
function generateRandomFreelancersAtIntervals(interval, numberOfFreelancers) {
    let counter = 0;
    const freelancers = [];

    const intervalId = setInterval(() => {
      const freelancer = generateRandomFreelancer();
      displayFreelancer(freelancer);
      freelancers.push(freelancer);
      updateAveragePrice(freelancers);

      counter++;

      if (counter === numberOfFreelancers) {
        clearInterval(intervalId);
      }
    }, interval);
  }
  

//Generate 5 random freelancers every 1 seconds
generateRandomFreelancersAtIntervals(1000, 3);