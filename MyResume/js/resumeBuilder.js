
var bio = {
  "name" : "David Olu-Talabi",
  "role" : "Software/Web Developer",
  "contacts" : {
  "email": "Davidolutalabi@gmail.com",
  "mobile" :"347-278-0656",
  "github" : "@MasterOlu21",
  "location" : "New York"
},
"welcomeMessage" : "My name is David Olu-Talabi and I am an aspiring programmer,seeking to innovate the world through technology.",
  "skills" : [ "Computer: C++ (2 years)", "CSS (2 years)", "JavaScript (1 year)", "HTML5 (2 years)", "Technical Support(3 years)",
  "Java (Less than 1 year)", "C# (1 year)","General: Organizational Skills (1 year)", "Team Building (2 years)", "Teaching (Less than 1 year)", "Sales (2 years)"
],
  "biopic" : "images/Professional Photo.jpg"
};

bio.display = function(){
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts, footerContacts").append(formattedEmail);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts, footerContacts").append(formattedMobile);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
   $("#topContacts, footerContacts").append(formattedGithub);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
   $("#topContacts, footerContacts").append(formattedLocation);

   var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
   $("#header").append(formattedMessage);

   var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
   $("#header").append(formattedbioPic);

   if (bio.skills.length > 0) {
  		$("#header").append(HTMLskillsStart);

  		for (var i = 0; i < bio.skills.length; i++) {
  			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
  			$("#skills").append(formattedSkill);
       }
     }

}


var work = {
"jobs" : [ {

"title" : "Store Operator",
"employer" : "Google/SMX",
"location" : "Costco",
"dates" : "December 2017 to Present",
"description" : "• Searching and picking up items across multiple shopping outlets for Google Express customers.\n•Packaging, Palletizing, and shipping items for Google Express.\n• Paying and fulfilling my daily quota in sales.\n • Opening and closing the store/maintenance check.\n"
},

{
"title" : "IT/Teacher's Assistant/Mentor",
"employer" : "CUNY YORK COLLEGE",
"location" : "CUNY YORK COLLEGE",
"dates" : "August 2015 to December 2017",
"description" : "• Opened and set up the lab. Running virus scans, and keeping the lab safe clean and secure\n• Helping students and professors with any questions regarding software, projectors,\nlaptops, and CUNY Portal. Fixing any damaged/corrupted Desktops\n• Helping students with research papers, essays and other writings assignments\n"
},

{
"title" : "Technician",
"employer" : "New York Department of Education",
"location" : "Preparatory Academy for Writers",
"dates" : "December 2013 to June 2014",
"description" : "• In charge of maintenance and setup for IPads and MacBook\n• Assisted teachers and students with any questions concerning hardware or software\n• Packing/unpacking and setting up/updating software\n"
}
]

};
work.display = function() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for (var i = 0; i < work.jobs.length; i++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}



var education = {
  "schools" :  [ {
"name" : "CUNY YORK COLLEGE",
"degree": "BS in Computer Science",
"majors" : ["Computer Science"],
"dates": "Fall 2014 to Spring 2018",
"location" : "94-20 Guy R Brewer Blvd, Jamaica, NY 11451"
}
],
"onlineCourses" :[ {
    "school" : "Udacity.com",
    "title" : "Front End WebDevelopment",
    "dates": "June 2017- June 2018",
    "url" : "https://classroom.udacity.com/nanodegrees/nd001/parts/9d3a4440-1e65-4fc5-9ac1-b40e401ad069"
  }
]
};

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for (var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for (var i = 0; i < education.onlineCourses.length; i++) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
}

var projects = {
  "projects" : [ {

    "title" : "ShoeJackCity",
    "dates" : "06/17/2017 to 03/20/2018",
    "description" : "Sneaker Website",
    //"url": " ",
    "images" : [ "images/ShoeJackCity.jpg"
 ]
  }

]
};
projects.display = function()
{
  if(projects.projects.length > 0) {
		for (var i = 0; i < projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title)
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
}
bio.display();
work.display();
education.display();
projects.display();

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase();
  name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);
$(document).click(function(loc) {

var x = loc.pageX;
var y = loc.pageY;

logClicks(x,y);

});
