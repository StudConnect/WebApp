import FollowSuggestion from "../../components/common/followSuggestion/FollowSuggestion";
import { users } from "../../utils/DummyData";

const Search = () => {
  return (
    <section className="w-full h-[89vh] md:px-10 px-4 py-2 md:flex md:gap-10">
      <section className="h-full w-full md:w-2/3 overflow-y-scroll lg:px-5">
        
      </section>
      <section className="w-full hidden md:w-1/3 h-full overflow-y-scroll gap-10 md:flex flex-col">
        <FollowSuggestion users={users} />
      </section>
    </section>
  )
}

export default Search