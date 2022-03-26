import { FaRegWindowMaximize } from 'react-icons/fa';
import { FaRegWindowMinimize } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

const WindowsHeaderBar = () => {
  return (
    <div className='flex items-center justify-end w-full h-5 bg-navy-blue'>
      <p className='flex-grow ml-1 text-sm text-white'>JakobKielland.exe</p>
      <div className='win98-button group'>
        <FaRegWindowMinimize
          className='m-auto group-active:translate-x-[1px] group-active:translate-y-[1px]'
          size={'0.65em'}
        />
      </div>
      <div className='win98-button group'>
        <FaRegWindowMaximize
          className='m-auto group-active:translate-x-[1px] group-active:translate-y-[1px]'
          size={'0.65em'}
        />
      </div>
      <div className='mx-[3px] win98-button group'>
        <GrClose
          className='m-auto group-active:translate-x-[1px] group-active:translate-y-[1px]'
          size={'0.7em'}
        />
      </div>
    </div>
  );
};

export default WindowsHeaderBar;
