// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
/*
This is empty on purpose! Your code to build the resume will go here.
 */
//[string].replace([old],[new])
// biography
var bio = {
    "name": "abdulrahman elhaw ",
    "role": "Web developer",
    "contacts": {
        "mobile": "+20-112-3319313",
        "email": "abd.elsayed@hotmail.com",
        "github": "elhaw",
        "twitter": "@aeaue_body2",
        "location": "Egypt",
    },
    "welcomeMessage": "I'm passionate Software Developer. I love programming language of different prospective\
     whether compiled or interpreted, but I'm currently focusing on learning front-end web development.",
    "skills": ["C programming","Linux","JavaScript",  "HTML",  "CSS"],
    "biopic": ["images/personal-image.jpg"],
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formatedPicture = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


        $("#header").prepend(formattedName, formattedRole);
        $("#topContacts").append(formatedMobile, formatedEmail, formatedTwitter, formatedGithub, formatedLocation);
        $("#header").append(formatedPicture, formattedMessage);
        //append multiple elements like this is to include all of the elements as arguments to a single .append()
        $("#footerContacts").append(formatedMobile, formatedEmail, formatedTwitter, formatedGithub, formatedLocation);
        //skills
        var formatedSkillsStart = HTMLskillsStart;
        $("#header").append(formatedSkillsStart);
        if (bio.skills.length !== 0) {
            for (var i = 0; i < bio.skills.length; i++) {
                var formatedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formatedSkills);
            }
        }
    }

};
// work
var work = {
    "jobs": [//{
            // "employer": "IT solutions",
            // "title": "Front-end Web developer",
            // "location": "Alexandria",
            // "dates": "2016-July till present",
            // "description": "responsible for implementing visual and interactive"
        // }
    ],
    "display": function() {
        for (var i = 0; i < work.jobs.length; i++) {
            var formattedworkStart = HTMLworkStart;
            $("#workExperience").append(formattedworkStart);
            var formatedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formatedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

            $(".work-entry:last").append(formatedworkEmployer + formatedworkTitle);

            var formatedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formatedworkDates);

            var formatedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry:last").append(formatedworkLocation);

            var formatedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formatedworkDescription);
        }

    }
};
//education
var education = {
    "schools": [{
            "name": "Mansoura University",
            "degree": "Bachelor",
            "location": "Mansoura",
            "majors": ["Electronic and Communication Engineering"],
            "dates": "2009-2015",
            "url": "http://www.mans.edu.eg/"
        }
    ],
    "onlineCourses": [{

            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "url": "www.udacity.com"

        },
        {
            "title": "Linux Foundation",
            "school": "Edx",
            "dates": "2016",
            "url": "www.edx.com"
        }
    ],
    "display": function() {
        var formattedschoolStart = HTMLschoolStart;

        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(formattedschoolStart);
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);

            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedschoolDates);

            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedschoolLocation);
            for (var j = 0; j < education.schools[i].majors.length; j++) {
                var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                $(".education-entry:last").append(formattedschoolMajor);
            }
        }
        //online classes
        var formattedonlineClasses = HTMLonlineClasses;

        $("#education").append(formattedonlineClasses);

        for (i = 0; i < education.onlineCourses.length; i++) {
            $("#education").append(formattedschoolStart);
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);

            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            $(".education-entry:last").append(formattedonlineDates);

            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedonlineURL);
        }
    }
};
//projects
var projects = {


    "projects": [{

            "title": "website portfolio",
            "dates": "march ,30 2017",
            "description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework.\
                The page is fully responsive and works on mobile, tablet, and desktop browsers.",
            "images": ["images/portfolio.jpg"]
        },
        {
            "title": "Online resume",
            "dates": "march ,30 2017",
            "description": "Using jQuery, developed an interactive resume application that reads all data from a JSON\
             file and then dynamically modifies the DOM to display the information. Further customized the project by \
             personalizing the design using CSS.",
            "images": ["images/ineteractive-resume.jpg", "images/resume-map.jpg"]
        },
        {
            "title": "Website Optimization",
            "dates": "july ,15 2017",
            "description": "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it\
             runs at 60fps and achieves a PageSpeed score of at least 90.",
            "images": ["images/website-optmization.JPG"]
        }
    ],
    "display": function() {
        for (var i = 0; i < projects.projects.length; i++) {

            var formattedprojectStart = HTMLprojectStart;
            $("#projects").append(formattedprojectStart);
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedprojectTitle);

            var formatteprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formatteprojectDates);

            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedprojectDescription);
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedprojectImage);
            }

        }
    }
};


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);




// internationalize
function inName(name) {
    var fields = name.split(" ");
    var internationalize = fields[0][0].toLocaleUpperCase() + fields[0].slice(1) + " " + fields[1].toLocaleUpperCase();


    return internationalize;
}
$("#main").append(internationalizeButton);