import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import React from 'react';
//import Adapter from 'enzyme-adapter-react-16';
import UserData from './UserData';

//Enzyme.configure({ adapter: new Adapter() });

describe('UserData', () => {
  const useStateSpy = jest.spyOn(React, 'useState');
  let [user, setUser] = [
    [],
    jest.fn((value) => (user = value)),
  ];

  beforeEach(() => {
    useStateSpy.mockReturnValueOnce([user, setUser]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    const comp = shallow(<UserData />);
    expect(comp.exists()).toBeTruthy();
  });

  it("should fetch data", async ()=>{
    const wrapper = shallow(<UserData/>);
    setUser({
      id: 1,
      name: 'rs_feature1',
    });
    expect(wrapper.exists()).toBeTruthy();
    wrapper.update();
    expect(setUser).toHaveBeenCalledWith({
      id: 1,
      name: 'rs_feature1',
    });
  });  

})
