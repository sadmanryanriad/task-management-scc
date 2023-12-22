import Header from "../miniComponents/Header";

const UserTypesSection = () => {
  const userTypes = [
    "Developers",
    "Corporate Professionals",
    "Bankers",
    "Students",
    "Project Managers",
    "Freelancers",
    "Designers",
    "Entrepreneurs",
    "Teachers",
    "Researchers",
    "Marketing Professionals",
    "Healthcare Workers",
    "Lawyers",
    "Data Analysts",
    "Artists",
    "Scientists",
    "Musicians",
    "Journalists",
    "Travel Enthusiasts",
    "Social Media Influencers",
  ];

    // Generate a random color for each user type
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };

  return (
    <section id="user-types" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <Header>Who Benefits from Our Platform?</Header>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
          {userTypes.map((type, index) => (
            <div data-aos="fade-right"
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-center text-gray-200"
              style={{backgroundColor: getRandomColor()}}
            >
              <p className="text-lg font-medium">{type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
