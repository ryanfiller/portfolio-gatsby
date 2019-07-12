import 'jest-styled-components';

import Navigation from "../../../src/components/layout/navigation"
import { pages } from '../../../src/config/config';
import { handleNavigate, closeAndNavigate, toggleOffCanvas } from "../../../__mocks__/context-mock";

const defaultClick = handleNavigate;
const overrideClick = closeAndNavigate;
const contactClick = toggleOffCanvas;

expect.extend(toHaveNoViolations)
import 'jest-styled-components'

const makeProps = () => ({
  componentProps: {orientation: 'horizontal'},
  contextProps: {jest: 'is stupid sometimes'}
})

const makeComponent = (props) => (
  mount(
    <ContextMock {...props.contextProps}>
      <Navigation {...props.componentProps} />
    </ContextMock>
  )
);

describe('<Navigation />', () => {
  it('should render all the pages', () => {
    const props = makeProps();
    const component = makeComponent(props);
    expect(component.find('a').length).toBe(pages.length)
  })

  describe('how links should work', () => {
    it('should work with default and explicit urls', () => {
      const links = [
        {name: 'default'},
        {name: 'with override', url: 'override'}
      ]
      const props = makeProps();
      props.componentProps.links = links;
      const component = makeComponent(props);
      expect(component.find('a').at(0).html()).toBe(
        "<a href=\"default\" data-text=\"default\">default</a>"
      );
      expect(component.find('a').at(0).html()).toBe(
        "<a href=\"default\" data-text=\"default\">default</a>"
      );
    })

    it('should be active if the page is current', () => {
      const props = makeProps();
      props.contextProps.currentPage = '/portfolio/'
      const component = makeComponent(props);
      expect(component.find('a').at(0).hasClass('active')).toBe(true);
    })

    it('should do special link for contact', () => {
      const props = makeProps();
      const component = makeComponent(props);
      const links = component.find('a');
      links.at(links.length - 1).simulate('click');
      expect(contactClick.mock.calls.length).toBe(1);
    })

    it('should have a default click', () => {
      const props = makeProps();
      const component = makeComponent(props);
      component.find('a').at(0).simulate('click');
      expect(defaultClick.mock.calls.length).toBe(1);
    })

    it('should take a click override prop', () => {
      const props = makeProps();
      props.componentProps.navFunction = overrideClick;
      const component = makeComponent(props);
      component.find('a').at(0).simulate('click');
      expect(overrideClick.mock.calls.length).toBe(1);
    })
  })

  describe('navigation orientations', () => {
    it('should be horizontal', () => {
      const props = makeProps();
      props.componentProps.orientation = 'horizontal';
      const component = makeComponent(props);
      expect(component).toHaveStyleRule('flex-direction', undefined);
    })

    it('should be vertical', () => {
      const props = makeProps();
      props.componentProps.orientation = 'vertical';
      const component = makeComponent(props);
      expect(component).toHaveStyleRule('flex-direction', 'column');
    })
  })

  it('should be (mostly) assecibility', async () => {
    const props = makeProps();
    const component = makeComponent(props);
    const html = ReactDOMServer.renderToString(component)  
    expect(await axe(html)).toHaveNoViolations()
  })
});
