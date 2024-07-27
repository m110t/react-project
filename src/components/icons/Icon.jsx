import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons';

export function Icon() {
    return (
        <div className='position-absolute move'>
          <FontAwesomeIcon icon={faPlus} />
          
        </div>
      );
}