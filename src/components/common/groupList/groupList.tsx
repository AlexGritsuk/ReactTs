import { ButtonFilter } from "../../buttonfilter/buttonFilter";
import { GroupListProps } from "./groupList.props";

const GroupList = ({ handleFilter, groups }: GroupListProps): JSX.Element => {
  return (
    <>
      {groups.map((group) => (
        <div key={group.id} onClick={() => handleFilter(group.filters)}>
          <ButtonFilter>{group.title}</ButtonFilter>
        </div>
      ))} 
    </>
  );
};

export default GroupList;
