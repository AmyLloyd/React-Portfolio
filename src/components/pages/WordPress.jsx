import WordPressContainer from '../WordPressContainer';

export default function WordPress() {
  return (
    <>
      <div className="container min-vh">  
        <div className='mt-2 pt-2 ps-3 pe-3'>
          <h1>WordPress Projects</h1>
          <WordPressContainer />
        </div>
      </div>
    </>
  );
}