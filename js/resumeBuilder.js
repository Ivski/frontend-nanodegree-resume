var work = [
   {
      "employer":"AdCash Ltd",
      "title":"Lead Android Developer",
      "location":"London",
      "dates":"03/2015-present",
      "description":"More from Mobile"
   },
   {
      "employer":"KweekWeek",
      "title":"Senior Android Developer",
      "location":"London",
      "dates":"11/2014-03/2015",
      "description":"Event Discovery"
   },
   {
      "employer":"Palringo",
      "title":"Android Developer",
      "location":"Ipswich",
      "dates":"01/2014-10/2014",
      "description":"Messenger"
   }
];

var projects = [  
   {  
      "title":"",
      "dates":"",
      "description":"",
      "images":[  

      ]
   }
];

var bio = {
	"name" : "Iva Nedeleva",
	"role" : "Lead Android Developer",
	"welcomeMessage" : "Android fan during the day, Rock fan during the night.",
	"pic" : "images/profile_image.png",
	"contacts" : {
		"mobile" : "07429085207",
		"email" : "iva@sliideapp.com",
		"location" : "London"
	},
	"skills" : ["android", "OOP", "design patterns"]
};

var education = [
	{"schools" : [
		{"school": {
			"name" : "University of Plovdiv",
			"location" : "Plovdiv, Bulgaria",
			"degree" : "MS",
			"major" : "Software Engineering",
			"dates" : "2012-2013",
			"url" : "https://uni-plovdiv.bg/"
		}},
		{"school": {
			"name" : "University of Plovdiv",
			"location" : "Plovdiv, Bulgaria",
			"degree" : "BS",
			"major" : "Computer Science",
			"dates" : "2009-2012",
			"url" : "https://uni-plovdiv.bg/"
		}}
	]},
	{"onlineCourses" : [
		{"onlineCourse" : {
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/javascript-basics--ud804"
		}},
		{"onlineCourse" : {
			"title" : "Advanced Android App Development",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/advanced-android-app-development--ud855"
		}},
		{"onlineCourse" : {
			"title" : "Android Performance",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/android-performance--ud825"
		}},
		{"onlineCourse" : {
			"title" : "Material Design for Android Developers",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/material-design-for-android-developers--ud862"
		}},
		{"onlineCourse" : {
			"title" : "UX Design for Mobile Developers",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/ux-design-for-mobile-developers--ud849"
		}}
	]}
];

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLbioPic.replace("%data%", bio.pic));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

if (bio.skills.length != 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}


function displayWork() {
	for (job in work) {
		$("#workExperience").append(HTMLworkStart);
		var employer = HTMLworkEmployer.replace("%data%", work[job].employer);
		var title = HTMLworkTitle.replace("%data%", work[job].title);
		$(".work-entry:last").append(employer + title);

		var dates = HTMLworkDates.replace("%data%", work[job].dates);
		$(".work-entry:last").append(dates);

		var city = HTMLworkLocation.replace("%data%", work[job].location);
		$(".work-entry:last").append(city);

		var description = HTMLworkDescription.replace("%data%", work[job].description);
		$(".work-entry:last").append(description);
	}
}
displayWork();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});