import { mentorData } from '../../utils/DummyData';
import MentorBox from '../../components/common/mentor/MentorBox';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Mentors = () => {
  const handleApply = (mentorName: string) => {
    // Handle mentorship application logic here
    alert(`Applied for mentorship with ${mentorName}`);
  };
  const navigate = useNavigate()

  return (
    <section className="w-full h-[89vh] md:px-10 px-4 py-2 md:flex md:gap-10">
      <section className="h-full w-full overflow-y-scroll lg:px-5">
        <section className="w-full">
          <section className='flex mb-2 items-center gap-5'>
            <section className="cursor-pointer text-white">
              <FaArrowLeft onClick={() => navigate(-1)} />
            </section>
            <section className='text-left py-4'>
              <h2 className='text-2xl tracking-wide text-swhite font-bold'>Mentors</h2>
            </section>
          </section>
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {mentorData.map((mentor, index) => (
              <MentorBox
                key={index}
                profilePic={mentor.profilePic}
                firstName={mentor.firstName}
                lastName={mentor.lastName}
                school={mentor.school}
                course={mentor.course}
                noOfMentees={mentor.noOfMentees}
                noOfConnections={mentor.noOfConnections}
                rating={mentor.rating}
                onApply={() => handleApply(`${mentor.firstName} ${mentor.lastName}`)}
              />
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Mentors;
