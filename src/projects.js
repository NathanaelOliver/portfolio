const title = "Nathanael Oliver";
const description =
  "I am a Computer Science Graduate from the University of South Carolina. I enjoy robotics, 3D printing, coding and rock climbing.";

const projects = [
  {
    title: "Vex Robotics AI Object Detection",
    picture: "https://via.placeholder.com/150",
    caption: "Caption 1",
    link: "https://example.com",
    description:
      "I designed a system to take pictures while mounted on a robot. The camera was connected to a jetson nano which performed object detection and identified game objects. The Jetson would then control the robot to move towards the object and score it in the desired goal.\nThis project involved several technical aspects such as gathering and labeling data, designing and training a model, reducing the complexity of the model to run in real time on a microprocessor.",
  },
];

export { projects, title, description };
