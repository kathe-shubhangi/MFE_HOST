import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders', () => {
    const comp = shallow(<App />);
    expect(comp.exists()).toBeTruthy();
  });
});
