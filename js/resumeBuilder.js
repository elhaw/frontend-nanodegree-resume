/*
This is empty on purpose! Your code to build the resume will go here.
 */
//[string].replace([old],[new])
// biography
var bio = {
	"name": "Abdulrahman",
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
	"bioPic": "images/fry.jpg",
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
		"employer"   : "IT solutions" ,
        "title"      : "Front-end Web developer" ,
        "location"   : "Alexandria", 
        "dates"      : "2016-July till present" ,
        "description": "responsible for implementing visual and interactive"
	}
  ]
};
//education
var education = { 
		"school" : {
         "name": "Mansoura University", 
         "degree": "Bachelor",
         "location": "Mansoura",
         "major": ["computer science"],
         "date": "2009-2015",
         "url": ""
  		},
  			"onlinecourses" : {

  				"title" : "JavaScript",
  				"school":"Udacity",
  				"date" :"2016",
  				"url":"www.lynda.com"

  			}
};
//projects
var projects = {

	"titles" : ["website portfolio", "title2"],
	"dates" :["march ,30 2017","date2"],
	"description" :["My first portfolio in front-end nano degree","second"],
	"url":["images/portfolio.jpg","/images/fry.jpg"]

};
var formattedschoolStart = HTMLschoolStart;
var formattedschoolName = HTMLschoolName.replace("%data%",education.school["name"]);
var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.school["degree"]);
var formattedschoolDates = HTMLschoolDates.replace("%data%",education.school["date"]);
var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.school["location"]);
var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.school["major"]);


var formattedonlineClasses = HTMLonlineClasses;
var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlinecourses["title"]);
var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlinecourses["school"]);
var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlinecourses["date"]);
var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlinecourses["url"]);


//education
var formatedSkillsStart =  HTMLskillsStart;
var formatedSkills1 = HTMLskills.replace("%data%",bio.skills[0]);
var formatedSkills2 = HTMLskills.replace("%data%",bio.skills[1]);
var formatedSkills3 = HTMLskills.replace("%data%",bio.skills[2]);
var formatedSkills4 = HTMLskills.replace("%data%",bio.skills[3]);
var formatedSkills5 = HTMLskills.replace("%data%",bio.skills[4]);



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


// // work experience
var formattedworkStart = HTMLworkStart;
$("#workExperience").append(formattedworkStart);



// work place holder
for (var i = 0 ; i < work.jobs.length ; i++)
{
var formatedworkEmployer    = HTMLworkEmployer.replace("%data%",work.jobs[i].employer) ;
$(".work-entry").append(formatedworkEmployer);

var formatedworkTitle       = HTMLworkTitle.replace("%data%",work.jobs[i].title) ;
$(".work-entry a").append(formatedworkTitle);

var formatedworkDates       = HTMLworkDates.replace("%data%",work.jobs[i].dates);
$(".work-entry").append(formatedworkDates);

var formatedworkLocation    = HTMLworkLocation.replace("%data%",work.jobs[i].location);
$(".work-entry").append(formatedworkLocation);

var formatedworkDescription =  HTMLworkDescription.replace("%data%",work.jobs[i].description);
$(".work-entry").append(formatedworkDescription);

}
//project section

var formattedprojectStart = HTMLprojectStart;
var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.titles[0]);
var formatteprojectDates = HTMLprojectDates.replace("%data%",projects.dates[0]);
var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.description[0]);
var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.url[0]);
//education section


$("#education").append(formattedschoolStart);
$(".education-entry").append(formattedschoolName);
$(" #education a").append(formattedschoolDegree);
$(".education-entry").append(formattedschoolDates);
$(".education-entry").append(formattedschoolLocation);
$(".education-entry").append(formattedschoolMajor);


$("#education").append(formattedonlineClasses);
$("h3").append(formattedonlineTitle);
$(" #education h3 a").append(formattedonlineSchool);
$("h3").append(formattedonlineDates);
$("h3").append(formattedonlineURL);


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

if (bio.skills.length !== 0 )
{

$("#header").append(formatedSkillsStart);
$("#skills").append(formatedSkills1);
$("#skills").append(formatedSkills2);
$("#skills").append(formatedSkills3);
$("#skills").append(formatedSkills4);
$("#skills").append(formatedSkills5);
}


//projects section
$("#projects").append(formattedprojectStart);
$(".project-entry").append(formattedprojectTitle);
$(".project-entry").append(formatteprojectDates);
$(".project-entry").append(formattedprojectDescription);
$(".project-entry").append(formattedprojectImage);

//add the map
$("#mapDiv").append(googleMap);


//footer contact
$("#footerContacts").append(formatedMobile);
$("#footerContacts").append(formatedEmail);
$("#footerContacts").append(formatedTwitter);
$("#footerContacts").append(formatedGithub);
$("#footerContacts").append(formatedLocation);