import 'jest-styled-components';

import Logo from "../../../src/components/logo"

expect.extend(toHaveNoViolations)

// const makeProps = () => ({
//   breakpoint: 'phone',
// })

const props = {
  breakpoint: 'phone',
}

const makeComponent = (props) => (
  mount(
    <ContextMock>
      <Logo {...props}/>
    </ContextMock>
  )
);

describe('<Logo />', () => {
  it('should render the logo svg', () => {
    const component = makeComponent(props);
    // jest can't do svg, assume this works
    expect(component.find('test-file-stub').length).toEqual(1);
  })

  // todo make sure that props work and correct styles are applied

  it('should be (mostly) assecibility', async () => {
    const component = makeComponent(props);
    const html = ReactDOMServer.renderToString(component)  
    expect(await axe(html)).toHaveNoViolations()
  })
});
