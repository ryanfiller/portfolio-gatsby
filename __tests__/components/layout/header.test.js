import Header from "../../../src/components/layout/header"

expect.extend(toHaveNoViolations)

const component = mount(
  <ContextMock>
    <Header />
  </ContextMock>
);

describe('<Header />', () => {
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  })

  it('should be (mostly) assecibility', async () => {
    const html = ReactDOMServer.renderToString(component)  
    expect(await axe(html)).toHaveNoViolations()
  })
});
