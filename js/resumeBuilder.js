/*
This is empty on purpose! Your code to build the resume will go here.
 */
//[string].replace([old],[new])
// biography
var bio = {
	"name": "abdulrahman elhaw ",
	"role": "Web developer",
	"contacts": {
		"mobile"   : "+20-112-3319313",
		"email": "abd.elsayed@hotmail.com",
		"github": "elhaw",
		"twitter":"@aeaue_body2",
		"location":"Egypt",
		"welcomeMessage": "Welcome to my page, hope you enjoy !!",
	},
	"skills": ["HTML", "Linux", "JavaScript", "C programming","CSS"],
	"bioPic": ["images/fry.jpg"],
    "display": "function taking no parameters"
};
// work
var work = {
	"jobs" : [{
		"employer"   : "IT solutions" ,
        "title"      : "Front-end Web developer" ,
        "location"   : "Alexandria", 
        "dates"      : "2016-July till present" ,
        "description": "responsible for implementing visual and interactive"
	},
	{
		"employer"   : "overcoffesolution" ,
        "title"      : "software developer" ,
        "location"   : "Canada", 
        "dates"      : "2020-July till present" ,
        "description": "develop new software tools to automate fabrication "
	}
  ]
};
//education
var education = { 
		"school" : [{
         "name": "Mansoura University", 
         "degree": "Bachelor",
         "location": "Mansoura",
         "major": "computer science",
         "date": "2009-2015",
         "url": "http://www.mans.edu.eg/"
  		},
  		{
  		"name": "Graz University of technology", 
         "degree": "Master",
         "location": "Austria",
         "major": "Software develompment",
         "date": "2018-2019",
         "url": "https://www.tugraz.at/home/"
  		}
  		],
  			"onlinecourses" : [{

  				"title" : "JavaScript",
  				"school":"Udacity",
  				"date" :"2016",
  				"url":"www.lynda.com"

  			},
  			{
  				"title" : "Linux Foundation",
  				"school":"Edx",
  				"date" :"2016",
  				"url":"www.edx.com"
  			}
  			]
};
//projects
var projects = {


	"project" : [{

			"title" : "website portfolio", 
			"date" :"march ,30 2017",
			"description" :"My first portfolio in front-end nano degree",
			"url":["images/197x148.gif","images/197x148.gif"]
  			},
  			{
  			"title" : "Onliine resume", 
			"date" :"march ,30 2017",
			"description" :"The second project is online resume",
			"url":["images/197x148.gif","images/197x148.gif"]
  			}
  			]
};


// biograpghy
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formatedMobile   = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formatedEmail    = HTMLemail.replace("%data%",bio.contacts.email);
var formatedTwitter  = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formatedGithub   = HTMLgithub.replace("%data%",bio.contacts.github);
var formatedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formatedPicture  = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.contacts.welcomeMessage);



// bio place holder
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formatedMobile);
$("#topContacts").append(formatedEmail);
$("#topContacts").append(formatedTwitter);
$("#topContacts").append(formatedGithub);
$("#topContacts").append(formatedLocation);
$("#header").append(formatedPicture);
$("#header").append(formattedMessage);


//skills
var formatedSkillsStart =  HTMLskillsStart;
$("#header").append(formatedSkillsStart);

if (bio.skills.length !== 0 )
{
	for (var i = 0 ; i < bio.skills.length ; i++)
	{
		var formatedSkills = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formatedSkills);
	}
}


// work 
function displayWork(){
	for ( job in work.jobs )
	{

		var formattedworkStart = HTMLworkStart;
		$("#workExperience").append(formattedworkStart);
		var formatedworkEmployer    = HTMLworkEmployer.replace("%data%",work.jobs[job].employer) ;
		var formatedworkTitle       = HTMLworkTitle.replace("%data%",work.jobs[job].title) ;

		$(".work-entry:last").append(formatedworkEmployer + formatedworkTitle);

		var formatedworkDates       = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formatedworkDates);

		var formatedworkLocation    = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formatedworkLocation);

		var formatedworkDescription =  HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formatedworkDescription);

	}
}
displayWork();
//project section
projects.display = function () {
	for (var i = 0 ; i < projects.project.length ; i++)
	{

			var formattedprojectStart = HTMLprojectStart;
			$("#projects").append(formattedprojectStart);
			var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.project[i].title);
			$(".project-entry:last").append(formattedprojectTitle);

			var formatteprojectDates = HTMLprojectDates.replace("%data%",projects.project[i].date);
			$(".project-entry:last").append(formatteprojectDates);

			var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.project[i].description);
			$(".project-entry:last").append(formattedprojectDescription);
			for ( var j = 0 ; j < projects.project[i].url.length ; j++)
			{
				var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.project[i].url[j]);
				$(".project-entry:last").append(formattedprojectImage);
			}
		
	}
}
projects.display();
//education section

for (var i = 0 ; i < education.school.length ; i++)
{
	var formattedschoolStart = HTMLschoolStart;
	$("#education").append(formattedschoolStart);
	var formattedschoolName = HTMLschoolName.replace("%data%",education.school[i]["name"]);
	var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.school[i]["degree"]);
	$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);

	var formattedschoolDates = HTMLschoolDates.replace("%data%",education.school[i]["date"]);
	$(".education-entry:last").append(formattedschoolDates);

	var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.school[i]["location"]);
	$(".education-entry:last").append(formattedschoolLocation);

	var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.school[i]["major"]);
	$(".education-entry:last").append(formattedschoolMajor);
}
//online classes
var formattedonlineClasses = HTMLonlineClasses;
$("#education").append(formattedonlineClasses);

for (var i = 0 ; i < education.onlinecourses.length ; i++)
{
	$("#education").append(formattedschoolStart);
	var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlinecourses[i]["title"]);
	var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlinecourses[i]["school"]);
	$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);

	var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlinecourses[i]["date"]);
	$(".education-entry:last").append(formattedonlineDates);

	var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlinecourses[i]["url"]);
	$(".education-entry:last").append(formattedonlineURL);
}


//footer contact
$("#footerContacts").append(formatedMobile);
$("#footerContacts").append(formatedEmail);
$("#footerContacts").append(formatedTwitter);
$("#footerContacts").append(formatedGithub);
$("#footerContacts").append(formatedLocation);
$("#mapDiv").append(googleMap);
// internationalize
function inName(name) {
var fields = name.split(" ");
var internationalize = fields[0][0].toLocaleUpperCase() + fields[0].slice(1) +" " + fields[1].toLocaleUpperCase() ;


return internationalize;
}
$("#main").append(internationalizeButton);