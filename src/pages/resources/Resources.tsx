import { useState } from 'react';
import { ButtonOutline, ButtonBg } from '../../components/shared/buttons/Buttons';
import { CustomSelect } from '../../components/shared/inputs/CustomSelect';
import { resourcesData, schoolOptions } from '../../utils/DummyData';
import Resource from '../../components/common/resource/Resource';
import { FaArrowLeft, FaFilter, FaTimes } from 'react-icons/fa'; // Import the close icon
import { useNavigate } from 'react-router-dom';

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'PDFs', value: 'pdf' },
  { label: 'Videos', value: 'video' },
  { label: 'Audios', value: 'audio' },
  { label: 'Links', value: 'link' }
];

const Resources = () => {
  const [filter, setFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredResources = resourcesData.filter(resource =>
    filter === 'all' ? true : resource.type === filter
  );

  const navigate = useNavigate();

  return (
    <section className="w-full h-[89vh] md:px-10 pb-20 overflow-y-scroll px-4 py-2">
      <section className='flex items-center justify-between mb-5'>
        <section className='flex items-center gap-5'>
          <section className="cursor-pointer text-white">
            <FaArrowLeft onClick={() => navigate(-1)} />
          </section>
          <section className='text-left py-4 flex-1'>
            <h2 className='text-2xl tracking-wide text-swhite font-bold'>Resources</h2>
          </section>
        </section>
        <section className="w-fit">
          <ButtonBg
            className="flex items-center gap-2 bg-bc text-white px-4 py-2 rounded"
            onClick={() => setShowFilters(true)}
          >
            <FaFilter />
            <span>Filter</span>
          </ButtonBg>
        </section>
      </section>

      {/* Resource Display Section */}
      <section className="w-full h-full overflow-y-scroll">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredResources.map((resource, i) => (
            <Resource key={i} resource={resource} />
          ))}
        </section>
      </section>

      {/* Filter Modal */}
      {showFilters && (
        <section className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-10 items-center overflow-x-scroll">
          <section className="relative bg-bgray px-5 py-10 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 shadow-lg">
            {/* Close Icon */}
            <FaTimes
              className="absolute top-4 right-4 text-lg cursor-pointer text-gray-200 hover:text-gray-300"
              onClick={() => setShowFilters(false)}
            />
            <section className="mb-4">
              <h3 className="text-lg text-swhite font-bold mb-3">Filter Options</h3>
              <section className='grid grid-cols-5 gap-2'>
                {filterOptions.map(option => (
                  <ButtonOutline
                    key={option.value}
                    className={`w-full px-4 py-2 rounded ${filter === option.value ? 'bg-bc text-white' : 'bg-bc2 text-gray-700'} mb-2`}
                    onClick={() => setFilter(option.value)}
                  >
                    {option.label}
                  </ButtonOutline>
                ))}
              </section>
            </section>
            <section className="flex flex-col gap-4 mb-5">
              <section className="grid grid-cols-2 gap-2">
                <CustomSelect label='Country' options={schoolOptions} handleChange={() => { }} />
                <CustomSelect label='School' options={schoolOptions} handleChange={() => { }} />
              </section>
              <section className="grid grid-cols-2 gap-2">
                <CustomSelect label='Country' options={schoolOptions} handleChange={() => { }} />
                <CustomSelect label='School' options={schoolOptions} handleChange={() => { }} />
              </section>
              <section className="grid grid-cols-2 gap-2">
                <CustomSelect label='Country' options={schoolOptions} handleChange={() => { }} />
                <CustomSelect label='School' options={schoolOptions} handleChange={() => { }} />
              </section>
              <section className="grid grid-cols-2 gap-2">
                <CustomSelect label='Country' options={schoolOptions} handleChange={() => { }} />
                <CustomSelect label='School' options={schoolOptions} handleChange={() => { }} />
              </section>
            </section>
            <ButtonBg
              className="w-full bg-bc text-white py-2 rounded"
              onClick={() => setShowFilters(false)}
            >
              Apply Filters
            </ButtonBg>
          </section>
        </section>
      )}
    </section>
  );
};

export default Resources;
