import WindowsHeaderBar from '../components/windowsHeaderBar';

const HomeView = () => {
  return (
    <>
      <div className='flex flex-col h-full gap-1 win98-window'>
        <WindowsHeaderBar windowName='JakobKielland.exe' />
        <div className='font-mono text-white bg-black win98-inner-border grow'>
          &gt; Hello world!
        </div>
      </div>
    </>
  );
};

export default HomeView;
