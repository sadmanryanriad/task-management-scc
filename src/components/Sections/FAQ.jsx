import { useAos } from "../../hooks/useAos";
import Header from "../miniComponents/Header";

const faqData = [
    {
      question: "How can I collaborate with team members on tasks?",
      answer:
        "You can easily collaborate with your team members by creating tasks and assigning them to specific team members. Our platform supports seamless communication and progress tracking for effective collaboration.",
    },
    {
      question: "What features are available for task management?",
      answer:
        "Our task management platform provides features such as creating tasks with titles, descriptions, deadlines, and priority levels. You can also use drag-and-drop functionality to move tasks across to-do, ongoing, and completed lists for efficient workflow management.",
    },
    {
      question: "Can I customize the priority levels for tasks?",
      answer:
        "Yes, you have the flexibility to customize priority levels for tasks. Whether it's low, moderate, or high priority, you can tailor the task priority according to your project requirements.",
    },
    {
      question: "How do I invite team members to join our workspace?",
      answer:
        "Inviting team members is simple! Navigate to the team management section, and you can easily invite members by entering their email addresses. Once invited, they will receive an email notification to join the collaborative workspace.",
    },
    {
      question: "Can I receive notifications for task updates and deadlines?",
      answer:
        "Absolutely! Our platform supports notifications to keep you informed about task assignments, updates, and upcoming deadlines. Stay connected and updated on the progress of your tasks.",
    },
    {
      question: "Is it possible to integrate third-party tools with the platform?",
      answer:
        "Yes, our task management platform is designed to integrate with various third-party tools and services. Enhance your workflow by connecting your favorite tools for a seamless experience.",
    },
  ];
  

const FAQ = () => {
  useAos();
  return (
    <>
      <div id="faq" className="max-w-7xl mx-auto">
        <section className="">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-10">
              <Header>Frequently Asked Questions</Header>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {faqData.map((faq, index) => (
                <div data-aos="zoom-in" key={index} className="w-full lg:w-1/2 px-4 py-2">
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-300 dark:text-gray-700 rounded-md py-2 px-4">
                      {faq.question}
                    </summary>
                    <p className="px-2 mx-auto py-2">{faq.answer}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
