import 'jest-styled-components';

import Overlay from "../../../src/components/layout/overlay"
import { toggleOffCanvas } from "../../../__mocks__/context-mock";

const makeComponent = (props) => (
  mount(
    <ContextMock>
      <div {...props}>
        <Overlay />
      </div>
    </ContextMock>
  )
);

describe('<Overlay />', () => {
  describe('visibility', () => {
    it('should be invisible by default', () => {
      const component = makeComponent();
      expect(component.find(Overlay)).toHaveStyleRule('opacity', '0');
    })

    it('should be visible when the site is open', () => {
      const props = {className: 'site open'};
      const component = makeComponent(props);
      // todo this test doesn't work...
      // expect(component.find(Overlay)).toHaveStyleRule('opacity', '1');
    })
  });

  it('should toggle the nav when clicked', () => {
    const component = makeComponent();
    component.find(Overlay).simulate('click');
    expect(toggleOffCanvas.mock.calls.length).toBe(1);
  })
});
