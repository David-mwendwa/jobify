import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu tempor ligula. Cras nec nisl vitae nisl molestie varius vel
            accumsan neque. Maecenas consectetur turpis sed dictum vestibulum
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
