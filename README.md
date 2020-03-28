# My Fitness Tracker App

The following web application allows you to enter and track your daily workouts.  

# Summary

    * Homepage - On the homepage, a user can see a quick summary of their last workout for the current day.  From here, the user can choose to either start a new workout or continue or add to an exhisting workout.

    * New Workout - On this page, the user can select from two types of workouts: cardio or resistance.  If the user selects resistance, he/she will be prompted to enter a name for their workout, along with how much weight they lifted, number of sets, number of reps, and total duration in minutes.  If the user selects cardio, he/she will be prompted to enter a name for their workout, along with the total distance in miles and and total duration in minutes.  Once the details have been entered, clicking the "add exercise" button will create a new entry in the Mongo DB with all the created information.  Clicking the complete button will return the use to the homepage.

    * Continue Workout - The interface of this page is laid out the same as the Add New Workout page.  The only difference here is when the "add exercise" button is clicked, the most recent exercise entry in the database is updated by adding new exercises to an existing workout instead of adding an entire new entry for a new workout.

    * Stats Page - On this page, a user can see visual graphs that track their workous in terms of duration and pounds lifed.  The pounds lifted graph also color codes the workouts based on which days they were performed.  And lastly, there are pie charts graphs to track the same statistics in an alternative layout.


# Technologies Used

    * Node JS
    * HTML
    * CSS
    * Mongo DB

# Node Dependencies 

    * Express
    * Compression
    * Mongoose
    * Morgan

# NPM Scripts to Run

    * Seed - node seeders/seed.js
    * Start - node server.js