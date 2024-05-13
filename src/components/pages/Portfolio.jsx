import PortfolioContainer from '../PortfolioContainer';

export default function Portfolio() {
  return (
    <>
      <div className="container min-vh">  
        <div className='mt-2 pt-2 ps-3 pe-3'>
          <h1>Portfolio</h1>
          <PortfolioContainer />
        </div>
      </div>
    </>
  );
}