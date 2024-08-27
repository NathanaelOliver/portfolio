const title = "Nathanael Oliver";
const description =
  "I am a Computer Science Graduate from the University of South Carolina. I enjoy robotics, 3D printing, coding and rock climbing.";

const projects = [
  {
    title: "Vex Robotics AI Object Detection",
    picture: "/portfolio/images/AI_Triball_Detection.png",
    caption: "Image used in training recognition model",
    link: "/portfolio/pdfs/AI_Vision_Report.pdf",
    description:
      "I designed a system to take pictures while mounted on a robot. The camera was connected to a jetson nano which performed object detection and identified game objects. The Jetson would then control the robot to move towards the object and score it in the desired goal.\nThis project involved several technical aspects such as gathering and labeling data, designing and training a model, reducing the complexity of the model to run in real time on a microprocessor.",
  },
  {
    title: "Multi Sense Rescue Machine Learning System",
    picture: "/portfolio/images/Sound_Navigation.gif",
    caption: "Robot Navigating to Sound Source after training",
    link: "/portfolio/pdfs/AI_Audio_Navigation_Report.pdf",
    description:
      "I worked in a team to replicate the work of navigating to multiple sound sources using a binaural microphone and cameras. We used a robot in the sound spaces environment to simulate an environment playing multiple noises and the robot could create a path and navigate to the sound source. This is usefule",
  },
];

export { projects, title, description };
