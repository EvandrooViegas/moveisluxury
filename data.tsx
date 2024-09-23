import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiToothLine } from "react-icons/ri";

const icon = <HiOutlineSpeakerphone />
const data = {
  number: "123 456 789",
  name: "Mobiliario",
  email: "mobiliario@gmail.com",
  icon,
  location: ["Lisboa", "Portugal"],
  working_hours: [
    { name: "Segunda-Sexta", hours: "11:30  – 7:30" },
    { name: "Sábado", hours: "10:00 – 19:30" },
    { name: "Domingo", hours: "10:00 – 18:00" },
  ],
  prices: [
    {
      name: "Lorem ipsum dolor",
      price: "50€",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      price: "80€",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Sit amet, consectetur adipiscing elit",
      price: "150€",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    },
    {
      name: "Ut enim ad minima veniam",
      price: "1200€",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet",
    },
    {
      name: "Lorem ipsum dolor sit amet",
      price: "300€",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Ut enim ad minima veniam, quis nostrum exercitationem",
      price: "100€",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    },
  ],

  status: [
    { text: "Quis autem vel eum iure reprehenderit qui ", number: 20 },
    { text: "Ut enim ad minima veniam, quis nostrum", number: 5 },
    { text: "Sed ut perspiciatis unde omnis iste", number: 5 },
    { text: "Nemo enim ipsam voluptatem quia", number: 100 },
  ],
  reviews: [
    {
      name: "Sed ut perspiciatis unde omnis ",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores",
      date: "2024-01-04",
    },
    {
      name: "Sed ut perspiciatis unde omnis ",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores",
      date: "2024-01-04",
    },
    {
      name: "Sed ut perspiciatis unde omnis ",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores",
      date: "2024-01-04",
    },
  ],
  socials: [
    { name: "facebook", url: "google.com" },
    { name: "instagram", url: "google.com" },
    { name: "email", url: "google.com" },
  ],
  services: [
    {
      title: "The standard Lorem Ipsum",
      image_path: "/services/1.jpg",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "The standard Lorem Ipsum",
      image_path: "/services/2.jpg",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },   
    {
      title: "The standard Lorem Ipsum",
      image_path: "/services/3.jpg",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    }, 

  ],
  workers: [
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        img_path: "/workers/1.jpg",
        socials: [
            { name: "facebook", url: "google.com" },
            { name: "instagram", url: "google.com" },
            { name: "email", url: "google.com" },
        ]
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        img_path: "/workers/2.jpg",
        socials: [
            { name: "facebook", url: "google.com" },
            { name: "instagram", url: "google.com" },
            { name: "email", url: "google.com" },
        ]
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        img_path: "/workers/3.jpg",
        socials: [
            { name: "facebook", url: "google.com" },
            { name: "instagram", url: "google.com" },
            { name: "email", url: "google.com" },
        ]
    },
  ],
  skills: [
    {
      icon,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      icon,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      icon,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      icon,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
  ],
  steps: [
    { title: "Lorem ipsum dolor sit amet", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title: "Lorem ipsum dolor sit amet", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title: "Lorem ipsum dolor sit amet", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
  ],
  booking_url: "google.com",
  clients_number: 430,
  about:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
};
export default data;
