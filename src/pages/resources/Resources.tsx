import { useState } from 'react';
import { ButtonOutline } from '../../components/shared/buttons/Buttons';
import { CustomSelect } from '../../components/shared/inputs/CustomSelect';
import { resourcesData, schoolOptions } from '../../utils/DummyData';
import Resource from '../../components/common/resource/Resource';



// Filter options array
const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'PDFs', value: 'pdf' },
  { label: 'Videos', value: 'video' },
  { label: 'Audios', value: 'audio' },
  { label: 'Links', value: 'link' }
];

const Resources = () => {
  const [filter, setFilter] = useState('all');

  // Filter resources based on selected filter
  const filteredResources = resourcesData.filter(resource =>
    filter === 'all' ? true : resource.type === filter
  );

  return (
    <section className="w-full h-[89vh] md:px-10 px-4 py-2">
      <section>
        <section className='text-left py-4 mb-5'>
          <h2 className='text-2xl tracking-wide text-swhite font-bold'>Mentors</h2>
        </section>
      </section>
      <section className="w-full flex gap-5">
        {/* Filter Buttons */}
        <section className="w-fit flex flex-col gap-4 mb-4">
          {filterOptions.map(option => (
            <section className="w-32">
              <ButtonOutline
                key={option.value}
                className={`px-4 py-2 rounded ${filter === option.value ? 'bg-bc' : 'bg-bc2'} text-white`}
                onClick={() => setFilter(option.value)}
              >
                {option.label}
              </ButtonOutline>
            </section>
          ))}
        </section>

        {/* Resource Display Section */}
        <section className="h-full w-full overflow-y-scroll">
          <section className="full flex justify-between mb-5">
            <CustomSelect label='Country' options={schoolOptions} handleChange={function (): void {
              throw new Error('Function not implemented.');
            }} />
            <CustomSelect label='School' options={schoolOptions} handleChange={function (): void {
              throw new Error('Function not implemented.');
            }} />
            <CustomSelect label='Faculty' options={schoolOptions} handleChange={function (): void {
              throw new Error('Function not implemented.');
            }} />
            <CustomSelect label='Course' options={schoolOptions} handleChange={function (): void {
              throw new Error('Function not implemented.');
            }} />
            <CustomSelect label='Year' options={schoolOptions} handleChange={function (): void {
              throw new Error('Function not implemented.');
            }} />
          </section>
          <section className="w-full">
            <section className="grid grid-cols-3">
              {filteredResources.map(resource => (
                <Resource resource={resource} />
              ))}
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Resources;
