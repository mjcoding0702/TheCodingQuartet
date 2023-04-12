window.onload = function () {
  document.getElementById("sports_btn").click(); 
};

function showMe(linkName) {
  const sports = document.getElementById('plus_sports')
  const people = document.getElementById('plus_people')
  const food = document.getElementById('plus_food')
  const nature = document.getElementById('plus_nature')
  const urban = document.getElementById('plus_urban')
  const renders = document.getElementById('plus_renders')
  const business = document.getElementById('plus_business')
  const pill = document.getElementById('pill')

  switch (linkName) {
    case 'plus_sports':
      // execute sports function
      document.querySelectorAll('#plus_people, #plus_food, #plus_nature, #plus_urban, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
      sports.style.display = 'grid';
      pill.style.transform = 'translateX(1%)';
      pill.style.padding = '17px 35px';
      break;
    case 'plus_people':
      // execute people function
      document.querySelectorAll('#plus_sports, #plus_food, #plus_nature, #plus_urban, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
      people.style.display = 'grid';
      pill.style.transform = 'translateX(113%)';      
      pill.style.padding = '17px 33px';
      break;
    case 'plus_food':
      // execute food function
      document.querySelectorAll('#plus_people, #plus_sports, #plus_nature, #plus_urban, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
      food.style.display = 'grid';
      pill.style.transform = 'translateX(240%)';
      pill.style.padding = '17px 30px';
      break;
    case 'plus_nature':
      // execute nature function
      document.querySelectorAll('#plus_people, #plus_food, #plus_sports, #plus_urban, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
      nature.style.display = 'grid';
      pill.style.transform = 'translateX(316%)';
      pill.style.padding = '17px 33px';
      break;
    case 'plus_urban':
      // execute urban function
      document.querySelectorAll('#plus_people, #plus_food, #plus_nature, #plus_sports, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
      urban.style.display = 'grid';
      pill.style.transform = 'translateX(424%)';
      pill.style.padding = '17px 33px';
      break;
    case 'plus_renders':
      // execute renders function
      document.querySelectorAll('#plus_people, #plus_food, #plus_nature, #plus_urban, #plus_sports, #plus_business').forEach(el => el.style.display = 'none');
      renders.style.display = 'grid';
      pill.style.transform = 'translateX(475%)';
      pill.style.padding = '17px 37px';
      break;
    case 'plus_business':
      // execute business function
      document.querySelectorAll('#plus_people, #plus_food, #plus_nature, #plus_urban, #plus_renders, #plus_sports').forEach(el => el.style.display = 'none');
      business.style.display = 'grid';
      pill.style.transform = 'translateX(498%)';
      pill.style.padding = '17px 43px';
      break;
    default:
      console.log('Invalid link name.');
  }
}

// function showMe(linkName) {
//   //grabing the Id of the divs
//   const sports = document.getElementById('plus_sports')
//   const people = document.getElementById('plus_people')
//   const food = document.getElementById('plus_food')
//   const nature = document.getElementById('plus_nature')
//   const urban = document.getElementById('plus_urban')
//   const renders = document.getElementById('plus_renders')
//   const business = document.getElementById('plus_business')
//   const pill = document.getElementById('pill')

//   switch (linkName) {
//     case 'plus_sports':
//       // execute sports function
//       document.querySelectorAll('#plus_people, #plus_food, #plus_nature, #plus_urban, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
//       sports.style.display = 'grid';
//       pill.style.left = '0px';
//       pill.style.padding = '17px 35px';
//       break;
//     case 'plus_people':
//       // execute people function
//       document.querySelectorAll('#plus_sports, #plus_food, #plus_nature, #plus_urban, #renders, #business').forEach(el => el.style.display = 'none');
//       people.style.display = 'grid';
//       pill.style.left = '75px';
//       pill.style.padding = '17px 33px';
//       break;
//     case 'plus_food':
//       // execute food function
//       document.querySelectorAll('#plus_people, #plus_sports, #plus_nature, #plus_urban, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
//       food.style.display = 'grid';
//       pill.style.left = '147px'
//       pill.style.padding = '17px 30px';
//       break;
//     case 'plus_nature':
//       // execute nature function
//       document.querySelectorAll('#plus_people, #plus_food, #plus_sports, #plus_urban, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
//       nature.style.display = 'grid';
//       pill.style.left = '214px'
//       pill.style.padding = '17px 33px';
//       break;
//     case 'plus_urban':
//       // execute urban function
//       document.querySelectorAll('#plus_people, #plus_food, #plus_nature, #plus_sports, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
//       urban.style.display = 'grid';
//       pill.style.left = '286px'
//       pill.style.padding = '17px 33px';
//       break;
//     case 'plus_renders':
//       // execute renders function
//       document.querySelectorAll('#plus_people, #plus_food, #plus_nature, #plus_urban, #plus_sports, #plus_business').forEach(el => el.style.display = 'none');
//       renders.style.display = 'grid';
//       pill.style.left = '359px'
//       pill.style.padding = '17px 37px';
//       break;
//     case 'plus_business':
//       // execute business function
//       document.querySelectorAll('#plus_people, #plus_food, #plus_nature, #plus_urban, #plus_renders, #plus_sports').forEach(el => el.style.display = 'none');
//       business.style.display = 'grid';
//       pill.style.left = '438px'
//       pill.style.padding = '17px 43px';
//       break;
//     default:
//       console.log('Invalid link name.');
//   }
// }