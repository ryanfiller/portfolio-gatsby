import Header from '../../../src/components/layout/header'
import Logo from '../../../src/components/logo'
import Navigation from '../../../src/components/layout/navigation'
import Navicon from '../../../src/components/layout/navicon'
import { navBreak } from '../../../src/config/styles'

expect.extend(toHaveNoViolations)

const props = {
  
}

const makeComponent = (props) => (
  mount(
    <ContextMock>
      <Header />
    </ContextMock>
  )
);

describe('<Header />', () => {
  it('should match snapshot', () => {
    const component = makeComponent(props);
    expect(component).toMatchSnapshot();
  })

  describe('responsive layout', () => {

    it('should render the logo and nav when large', () => {
      window.testMediaQueryValues = {width: navBreak + 100};
      const component = makeComponent(props);
      expect(component.find(Logo).length).toBe(1);
      expect(component.find(Navigation).length).toBe(1);
      expect(component.find(Navicon).length).toBe(0);
    })

    it('should render the logo and navicon when small', () => {
      window.testMediaQueryValues = {width: navBreak - 100};
      const component = makeComponent(props);
      expect(component.find(Logo).length).toBe(1);
      expect(component.find(Navigation).length).toBe(0);
      expect(component.find(Navicon).length).toBe(1);
    })
  });

  it('should be (mostly) assecibility', async () => {
    const component = makeComponent(props);
    const html = ReactDOMServer.renderToString(component)  
    expect(await axe(html)).toHaveNoViolations()
  })
});
