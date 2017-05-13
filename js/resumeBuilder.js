/*
This is empty on purpose! Your code to build the resume will go here.
 */
//[string].replace([old],[new])
// biography
var bio = {
	"name": "Abdulrahman",
	"role": "Web developer",
	"contacts": {
		"mobile"   : "+20-11-233-19313",
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
	"jobs" : {
		"employer"   : "IT solutions" ,
        "title"      : "Front-end Web developer" ,
        "location"   : "Alexandria", 
        "dates"      : "2016-July till present" ,
        "description": "responsible for implementing visual and interactive"
	},
	     "display": "function taking no parameters"
};

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

  				"title" : "LInux Foundation",
  				"school":"Lynda",
  				"date" :"2016",
  				"url":"www.lynda.com"

  			}


};
var formattedschoolStart = HTMLschoolStart;
var formattedschoolName = HTMLschoolName.replace("%data%",education.school["name"]);
var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.school["degree"]);
var formattedschoolDates = HTMLschoolDates.replace("%data%",education.school["date"]);
var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.school["location"]);
var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.school["major"]);
$("#education").append(formattedschoolStart);
$(".education-entry").append(formattedschoolName);
$(".education-entry").append(formattedschoolDegree);
$(".education-entry").append(formattedschoolDates);
$(".education-entry").append(formattedschoolLocation);
$(".education-entry").append(formattedschoolMajor);

var formattedonlineClasses = HTMLonlineClasses;
var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlinecourses["title"]);
var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlinecourses["school"]);
var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlinecourses["date"]);
var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlinecourses["url"]);

$("#education").append(formattedonlineClasses);
$(".education-entry").append(formattedonlineTitle);
$(".education-entry").append(formattedonlineSchool);
$(".education-entry").append(formattedonlineDates);
$(".education-entry").append(formattedonlineURL);




var projects = {

	"titles" : ["website portfolio", "title2"],
	"dates" :["march ,30 2017","date2"],
	"description" :["My first portfolio in front-end nano degree","second"],
	"url":["images/portfolio.jpg","/images/fry.jpg"]

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


// // work experience
var formattedworkStart = HTMLworkStart;
var formatedworkEmployer    = HTMLworkEmployer.replace("%data%",work.jobs.employer) ;
var formatedworkTitle       = HTMLworkTitle.replace("%data%",work.jobs.title) ;
var formatedworkDates       = HTMLworkDates.replace("%data%",work.jobs.dates);
var formatedworkLocation    = HTMLworkLocation.replace("%data%",work.jobs.location);
var formatedworkDescription =  HTMLworkDescription.replace("%data%",work.jobs.description);
//project section

var formattedprojectStart = HTMLprojectStart;
var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.titles[0]);
var formatteprojectDates = HTMLprojectDates.replace("%data%",projects.dates[0]);
var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.description[0]);
var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.url[0]);
//education section



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
	var formatedSkillsStart =  HTMLskillsStart;
var formatedSkills1 = HTMLskills.replace("%data%",bio.skills[0]);
var formatedSkills2 = HTMLskills.replace("%data%",bio.skills[1]);
var formatedSkills3 = HTMLskills.replace("%data%",bio.skills[2]);
var formatedSkills4 = HTMLskills.replace("%data%",bio.skills[3]);
var formatedSkills5 = HTMLskills.replace("%data%",bio.skills[4]);

$("#header").append(formatedSkillsStart);
$("#skills").append(formatedSkills1);
$("#skills").append(formatedSkills2);
$("#skills").append(formatedSkills3);
$("#skills").append(formatedSkills4);
$("#skills").append(formatedSkills5);
}

// work place holder
$("#workExperience").append(formattedworkStart);
$(".work-entry").append(formatedworkEmployer);
$(".work-entry").append(formatedworkTitle);
$(".work-entry").append(formatedworkDates);
$(".work-entry").append(formatedworkLocation);
$(".work-entry").append(formatedworkDescription);

//projects section
$("#projects").append(formattedprojectStart);
$(".project-entry").append(formattedprojectTitle);
$("project-entry").append(formatteprojectDates);
$(".project-entry").append(formattedprojectDescription);
$(".project-entry").append(formattedprojectImage);
