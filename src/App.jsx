import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      name: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 85,
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      name: "Meta",
      datePosted: "2 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 78,
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      name: "Amazon",
      datePosted: "3 days ago",
      post: "Operations Analyst",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      name: "Apple",
      datePosted: "1 week ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      name: "Netflix",
      datePosted: "10 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 65,
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      name: "Microsoft",
      datePosted: "3 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 80,
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      name: "Tesla",
      datePosted: "4 weeks ago",
      post: "Mechanical Design Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 60,
      location: "Gurugram, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      name: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Research Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 40,
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      name: "Adobe",
      datePosted: "2 weeks ago",
      post: "Product Manager",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 75,
      location: "Noida, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/intel.com",
      name: "Intel",
      datePosted: "10 weeks ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 68,
      location: "Bangalore, India",
    },
  ];

  return (
    <div className="parent">
      <Card />
    </div>
  );
};

export default App;
