
var bio = {
  "name" : "David Olu-Talabi",
  "role" : "Web Developer",
  "contact" : {
  "email": "Davidolutalabi@gmail.com",
  "phone" :"347-278-0656",
  "github" : "@MasterOlu21",
  "location" : "New York"
},
"bioMessage" : "My name is David Olu-Talabi and I am an aspiring programmer, seeking to innovate the world through technology.",
  "skills" : [ "Computer: C++ (2 years)", "CSS (2 years)", "JavaScript (1 year)", "HTML5 (2 years)", "Technical Support(3 years)",
  "Java (Less than 1 year)", "C# (1 year)\n\t General: Organizational Skills (1 year)", "Team Building (2 years)", "Teaching (Less than 1 year)", "Sales (2 years)"
],
  "bioPic" : "/Users/masterolu/Desktop/portfolio/frontend-nanodegree-resume-master/images/Professional Photo.jpg"
};

bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedRole);

  var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);

  var formattedPhone = HTMLmobile.replace("%data%", bio.contact.phone);
  $("#topContacts").append(formattedPhone);
  $("#footerContacts").append(formattedPhone);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
   $("#topContacts").append(formattedGithub);
   $("#footerContacts").append(formattedGithub);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
   $("#topContacts").append(formattedLocation);
   $("#footerContacts").append(formattedLocation);

   var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.bioMessage);
   $("#header").append(formattedMessage);

   var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
   $("#header").append(formattedBioPic);

   if (bio.skills.length > 0) {
  		$("#header").append(HTMLskillsStart);

  		for (skill in bio.skills) {
  			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
  			$("#skills").append(formattedSkill);
       }
     }

}


var work = {
"jobs" : [ {

"position" : "Store Operator",
"employer" : "Google/SMX",
"location" : "Costco",
"dates" : "December 2017 to Present",
"description" : "• Searching and picking up items across multiple shopping outlets for Google Express customers.\n•Packaging, Palletizing, and shipping items for Google Express.\n• Paying and fulfilling my daily quota in sales.\n • Opening and closing the store/maintenance check.\n"
},

{
"position" : "IT/Teacher's Assistant/Mentor",
"employer" : "CUNY YORK COLLEGE",
"location" : "CUNY YORK COLLEGE",
"dates" : "August 2015 to December 2017",
"description" : "• Opened and set up the lab. Running virus scans, and keeping the lab safe clean and secure\n• Helping students and professors with any questions regarding software, projectors,\nlaptops, and CUNY Portal. Fixing any damaged/corrupted Desktops\n• Helping students with research papers, essays and other writings assignments\n"
},

{
"position" : "Technician",
"employer" : "New York Department of Education",
"location" : "Preparatory Academy for Writers",
"dates" : "December 2013 to June 2014",
"description" : "• In charge of maintenance and setup for IPads and MacBook\n• Assisted teachers and students with any questions concerning hardware or software\n• Packing/unpacking and setting up/updating software\n"
}
],

display() {

  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data", work.jobs[job].employer);
    $("#employer").append(formattedEmployer);

  var formattedPosition = HTMLworkTitle.replace("%data", work.jobs[job].position);
    $("#position").append(formattedPosition);

  var formattedEmployerTitle = formattedEmployer + formattedPosition;
    $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data", work.jobs[job].dates);
      $("#dates").append(formattedDates);
      $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription .replace("%data", work.jobs[job].description);
    $("#dates").append(formattedDescription);
    $(".work-entry:last").append(formattedDescription);

  }
}
}



var education = {
  "schools" :  [ {
"name" : "CUNY YORK COLLEGE",
"major" : ["ComputerScience"],
"years": "Fall 2014 to Spring 2018",
"city" : "94-20 Guy R Brewer Blvd, Jamaica, NY 11451"
}
],
"Online Education" :[ {
    "name" : "Udacity.com",
    "title" : "Front End WebDevelopment",
    "Years": "June 2017- June 2018",
    "url" : "https://classroom.udacity.com/nanodegrees/nd001/parts/9d3a4440-1e65-4fc5-9ac1-b40e401ad069"
  }
]
}

var projects = {
  "projects" : [ {

    "title" : "Project 1",
    "dates" : "06/17/2017 to 03/20/2018",
    "description" : "Something Special.",
    "url": " ",
    "images" : [ ""
 ]
  }

],

display()
{
  for(project in projects.projects){
  $("#projects").append(HTMLprojectStart);

  var formattedProjectTitle = HTMLprojectTitle.replace("%data", projects.projects[project].title)
  $(".project-entry:last").append(formattedProjectTitle);

  var formattedProjectDates = HTMLprojectDates.replace("%data", projects.projects[project].dates)
  $(".project-entry:last").append(formattedProjectDates);

  var formattedProjectDescription = HTMLprojectDescription.replace("%data", projects.projects[project].description)
  $(".project-entry:last").append(formattedProjectDescription);

  if (projects.projects[project].images.length > 0) {
					for (image in projects.projects[project].images) {
						var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
						$(".project-entry:last").append(formattedImage);
					}

}
}
  }
}

/*
This is empty on purpose! Your code to build the resume will go here.
 */



bio.display();
work.display();
projects.display();

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase();
  name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}


$(document).click(function(loc) {

var x = loc.pageX;
var y = loc.pageY;

logClicks(x,y);

});
