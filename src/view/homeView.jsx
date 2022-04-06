import LinePrint from '../components/text/linePrint';
import WindowsHeaderBar from '../components/windowsHeaderBar';

const HomeView = () => {
  return (
    <>
      <div className='absolute flex flex-col w-5/6 gap-1 left-6 top-10 h-5/6 win98-window'>
        <WindowsHeaderBar windowName='JakobKielland.exe' />
        <div className='font-mono text-white bg-black win98-inner-border grow'>
          <LinePrint content='Hello World!' />
        </div>
      </div>
    </>
  );
};

export default HomeView;
