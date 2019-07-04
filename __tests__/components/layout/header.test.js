import Header from "../../../src/components/layout/header"

expect.extend(toHaveNoViolations)

describe('<Header />', () => {
  it('should match snapshot', () => {
    const header = mount(
      <ContextMock>
        <Header />
      </ContextMock>
    );
    expect(header).toMatchSnapshot();
  })

  it('should demonstrate this matcher`s usage with react', async () => {
    const html = ReactDOMServer.renderToString(
      <ContextMock>
        <Header />
      </ContextMock>
    )
  
    const results = await axe(html)
  
    expect(results).toHaveNoViolations()
  })
});
