const learningCard = document.querySelector('#learning');
const learningFile = 'data/learning.json';

async function getAssignments() {
    try {
        const response = await fetch(learningFile);
        if (response.ok) {
          const data = await response.json();
          // console.log(data); 
          getAssignments(data); 
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
};

getAssignments();

function displayActivity(data) {
    data.forEach((element) => {
    console.log(element);
    });
}
// const displayActivity = (activity) => {
//     activity.forEach ((activity) => {
//         let week = document.createElement('li');
//         let activities = document.createElement('p');
//         let assignment = document.querySelector('a');

//         week.textContent = activity;
//         activities.textContent = activity.week;
//         assignment.textContent = activity.activities[i];

//         assignment.setAttribute('href', assignment[i]);

//         activity.appendChild(week);
//         activity.appendChild(activities);
//         activity.appendChild(assignment);
//         learningCard.appendChild(activity);
//     });
// }




// {
//     "week01": ["week01/holygrail.html", "week01/media-query.html", "https://codepen.io/hal22036/pen/OJwXZjK", "week01/chamber-site-plan.html"],
//     "week02": ["week02/design.html", "https://codepen.io/hal22036/pen/dyjOrvo", "week02/bom.html"],
//     "week03": ["week03/images/landscape.webp", "week03/lazyload.html", "https://codepen.io/hal22036/pen/bGjrPVz?editors=1000", "week03/bom.html"],
//     "week04": ["https://codepen.io/hal22036/pen/ZEjrVQE?editors=1100", "week04/images/combinators.png", "week04/tablebuild.html", "week04/form-start/index.html"],
//     "week05": ["https://codepen.io/hal22036/pen/mdjGVKE", "week05/new-ward-members.json", "week05/prophets.html", "week05/weather.html"]
//   }