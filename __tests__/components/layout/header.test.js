import Header from '../../../src/components/layout/header'
import Logo from '../../../src/components/logo'
import Navigation from '../../../src/components/layout/navigation'
import Navicon from '../../../src/components/layout/navicon'
import { defaultTheme } from "../../../src/config/styles.js"
import { navBreak } from '../../../src/config/styles'

expect.extend(toHaveNoViolations)
import 'jest-styled-components'

const makeComponent = (props) => (
  mount(
    <ContextMock {...props}>
      <Header />
    </ContextMock>
  )
);

describe('<Header />', () => {

  describe('should render the light or dark nav', () => {
    it('should render dark nav by default', () => {
      const component = makeComponent();
      expect(component).toHaveStyleRule('background-color', defaultTheme.dark);
    })

    it('should render the light nav via the theme provider', () => {
      const props = {theme: defaultTheme}
      props.theme.darkNav = false
      const component = makeComponent(props);
      expect(component.find(Header)).toHaveStyleRule('background-color', defaultTheme.light);
    })
  })

  // describe('responsive layout', () => {
  //   it('should render the logo and nav when large', () => {
  //     window.testMediaQueryValues = {width: navBreak + 100};
  //     const component = makeComponent();
  //     expect(component.find(Logo).length).toBe(1);
  //     expect(component.find(Navigation).length).toBe(1);
  //     expect(component.find(Navicon).length).toBe(0);
  //   })

  //   it('should render the logo and navicon when small', () => {
  //     window.testMediaQueryValues = {width: navBreak - 100};
  //     const component = makeComponent();
  //     expect(component.find(Logo).length).toBe(1);
  //     expect(component.find(Navigation).length).toBe(0);
  //     expect(component.find(Navicon).length).toBe(1);
  //   })
  // });

  it('should match snapshot', () => {
    const component = makeComponent();
    expect(component).toMatchSnapshot();
  })

  it('should be (mostly) assecibility', async () => {
    const component = makeComponent();
    const html = ReactDOMServer.renderToString(component)  
    expect(await axe(html)).toHaveNoViolations()
  })
});
