import WordPressContainer from '../WordPressContainer';
import FeatureContainer from '../FeatureContainer';

export default function WordPress() {
  return (
    <>
      <div className="container min-vh">  
        <div className='mt-2 pt-2 ps-3 pe-3'>
          <h1 className="title-1">WordPress Projects</h1>
          <FeatureContainer />
          <WordPressContainer />
        </div>
      </div>
    </>
  );
}