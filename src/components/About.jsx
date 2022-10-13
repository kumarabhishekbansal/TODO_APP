import React from "react";

const About = () => {
  return (
    <>
      <div className="about_parent w-50 my-5">
        <div className="about_div w-100 text-center">
          <h2 className="headabout"> About This Website </h2>
          <h4 className="paraabout">
            ToDo List App is a kind of app that generally used to maintain our
            day-to-day tasks or list everything that we have to do, with the
            most important tasks at the top of the list, and the least important
            tasks at the bottom. It is helpful in planning our daily schedules.{" "}
          </h4>
          <h2 className="headabout">Features of Todo Website</h2>
          <h4 className="paraabout">
            In this version of the ToDo list, the user will be getting
            four options: Create (add) a new task or adding a new ToDo in the
            ToDo List App. See all the tasks or View all the ToDos that were
            added to the app. Delete any ToDo from the list of ToDos. Exit from
            the app.
          </h4>
        </div>
      </div>
    </>
  );
};

export default About;
