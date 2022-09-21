import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';

const TopFilter = (props) => {
  return (
    <>
      <div>
        <button>추쳔순</button>
        <button>거리순</button>
        <button>낮은 가격 순</button>
        <button>높은 가격 순</button>
      </div>
      <button>
        <FontAwesomeIcon icon={faMap} size='sm' />
        지도
      </button>
    </>
  );
};

export default TopFilter;
