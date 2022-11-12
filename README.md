# Event Tracker

## Description
This project allows the user to add a trainer, update an already existing trainer, delete a trainer, view all trainers and view a specific trainer.

## Technologies Used
MySql, Git, Terminal, Spring, Java, Postman, CSS, Bootstrap, JavaScript

## Lessons Learned
This project really helped me learn how to use the JPARepositories. The JPARepository helped a lot because it allows you to use the methods that they already have, which helps cut down on the typing and allows me to focus on the more complicated methods that I have to make. This project is much simpler than a lot of my other programs but with the simplicity it helped me focus a lot more on the controller. This project really helped me understand how to use the controller, path variable and the various types of mapping.

*UPDATE
In updating this project I learned how to use JavaScript to make a dynamic webpage. This was my first time using JS, this was incredibly beneficial because I was able to focus a lot on how to utilize JS to make a more dynamic webpage. I also was able to incorporate some CSS and Bootstrap to make my webpage a bit more aesthetically pleasing. Overall this project was incredibly helpful in learning how to implement JS with my existing Java project. 




| CRUD Op. | HTTP Verb | URI                  | Request Body | Response Body |
|----------|-----------|----------------------|--------------|---------------|
| Read     | GET       | `/api/trainers`         |              | List of all trainers |
| Read     | GET       | `/api/trainers/{trainerId}`|              | Representation of one trainer |
| Create   | POST      | `/api/trainers`         | JSON for new trainer | JSON of created trainer
| Update   | PUT       | `/api/trainers/{trainerId}`| JSON to update trainer | JSON of updated trainer |
| Delete   | DELETE    | `/api/trainers/{trainerId}`|              | |
