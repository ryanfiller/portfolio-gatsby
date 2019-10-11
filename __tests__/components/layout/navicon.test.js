import 'jest-styled-components';

import Navicon from "../../../src/components/layout/navicon"
import { toggleOffCanvas } from "../../../__mocks__/context-mock"

expect.extend(toHaveNoViolations)

const makeComponent = (props) => (
  mount(
    <ContextMock>
      <Navicon />
    </ContextMock>
  )
);

describe('<Navicon />', () => {
  it('should call the toggle function', () => {
    const component = makeComponent();
    component.simulate('click');
    expect(toggleOffCanvas.mock.calls.length).toBe(1)
  })

  it('should be (mostly) assecibility', async () => {
    const component = makeComponent();
    const html = ReactDOMServer.renderToString(component)  
    expect(await axe(html)).toHaveNoViolations()
  })
});
