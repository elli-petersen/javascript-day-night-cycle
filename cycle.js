/**
 * Day/Night Gradient Cycle
 * Requires jQuery
 */

// Get the current hour; JS runs on the 24-hour clock
var hour = new Date().getHours();

// Assign the jQuery object #sky to an easy-to-use variable
var sky  = $("#sky");

/*
 * Now we'll create objects for each block of time, and store them in an array
 * And define a CSS class for each timeBlock
 */
var timeBlocks = [
	{ // Night starts at 9pm/21:00 and ends at 5am/5:00
  	start: 21,
    end:   5,
    class: "night",
  },
  { // Dawn starts at 6am/6:00 and ends at 10am/10:00
  	start: 6,
    end:   10,
    class: "dawn",
  },
  { // Day starts at 11am/11:00 and ends at 4pm/16:00
  	start: 11,
    end:   16,
    class: "day",
  },
  { // Dusk starts at 5pm/17:00 and ends at 8pm/20:00
  	start: 17,
    end:   20,
    class: "dusk",
  }
]


/**
 * 1. Start by looping through the objects in the timeBlocks array
 * 2. Select the current timeBlock
 * 3. Check if the current hour is within each timeBlock
 * 4. If it is, add the relevant class to #sky
 */
 
for ( var i = 0; i < timeBlocks.length; i++ ) { /* 1 */
	var timeOfDay = timeBlocks[i]; /* 2 */
  
  if ( timeOfDay.start <= hour && hour <= timeOfDay.end ) { /* 3 */
		sky.addClass(timeOfDay.class); /* 4 */
  }
}