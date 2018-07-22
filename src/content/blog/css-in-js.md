---
template: blog-item
title: CSS in Javascript
excerpt: I switched my website back and forth between SCSS and Styled-Components four times. Here are some thoughts on why I kept going back and forth and why I eventually chose what I did.
thumbnail: /images/site-assets/placeholder-thumb.jpg
banner: http://cdn8.bigcommerce.com/s-nkg4mv/images/stencil/1024x1024/products/1938/6665/sd16427-reeses-peanut-butter-big-cup-king-size-16-ct-2__55532.1505957112.jpg?c=2
path: /blog/whatever-whatever
date: '2017-08-15'
category: 
  - ???
tags:
  - scss
  - bem
  - javascript
  - styled-components
  - design systems

published: true
---

SCSS is magical. As someone who came into web development through the front end, seeing things like nesting, variables, and mixins was a game changer for me. With the addition of learing <a href="http://getbem.com/" target="_blank">BEM</a> gone were the days of having a monolithic, hundreds-of-lines-long .css file and I was well on my way to writing maintainable component libraries.

Fast forward a few years and I in the middle of converting my personal site from <a href="https://jekyllrb.com/" target="_blank">Jekyll</a> to <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>. CSS-in-JS is a divisive issue in the web-dev community right now, so I decided to try out <a href="https://www.styled-components.com/" target="_blank">💅Styled-Components</a> in order to have more of an informed opinion on it.

## The Alure of Switching in the First Place

One of the first concept you learn when getting into maintainabilty and best practices is to separate your concerns. You don't want your frontend code mixed in with your backend logic, your content mixed with your display templates, or your styles mixed in with your structral markup.

But is that last part really still true?

One thing React <a href="https://reactjs.org/docs/components-and-props.html" target="_blank">stresses in its documentation</a> is to think in components. This means often times you <em>will</em> have logic on when to display components and onClick handlers in the same file as your JSX. What makes styles different? If you're concern is the overall display, why have these rules live across multiple files?

And to the point of having display logic already in your JSX files, why not go one step further with this? Having to set something to `display: none` because you want to not show it at a certain size always felt less than ideal to me. I'm sure this has performance implications because the browser still has to parse this markup before deciding not to render it, and the markup does still exist on the page. I'm sure if you're in a situation where you have something like a desktop and mobile version of a component, seeing both on the page while using a screenreader is somewhat of an accessibility concern.

In my project I have a config.js file that looks mostly like this:

``` javascript
module.exports = {
	breaks: {
		large: 1200,
		tablet: 768,
		phone: 480
	},
}
```

I did some research around using <a href="https://redux.js.org/" target="_blank">Redux</a> to track browser size as part of my site's overall state, but this seemed like overkill. Instead I settled on using <a href="https://github.com/contra/react-responsive" target="_blank">react-responsive</a> instead. This means that instead of having to render my mobile nav and hide it with `display: none`, I can instead wrap it in a `<MediaQuery>` tag and not have it as part of the page until I need it at all.

``` javascript
<MediaQuery query={`(max-width: ${breaks.tablet}px)`}>
    <Navicon />
</MediaQuery>
```

Using this same configuration style, I was able to pull these values, as well as colors and fonts, directly into styles that lived right next to the markup for the component itself, and use the same SCSS shorthand I was used to.

``` javascript
const StyledSocials = styled.ul`
	.social {
		width: 1.75rem;
		display: block;
		@media(max-width: ${breaks.phone}px) {
			flex: 1;
			width: auto;
		}
	}

	svg {
		fill: ${colors.white};
		@media(max-width: ${breaks.tablet}px) {
			fill: currentColor;
		}
	}
`
```

This also means that if I ever stopped using a component and decided to delete it, this would takes the styles with it instead of leaving them somewhere in the project. I know there's tooling around this, but I personally am always hesitant to delete styles on the off chance I want to use them again in the future, and to be honest I'm not always sure where else in the project I might be unknowingly using that style (I should be doing visual regression testing, I know). 

Recovering a deleted component from a single file is so much easier than have to retrieve markup and styles from multiple files in my git history, so I was much less hesitant to remove unused components and get everything associated with them out of my project once and for all.


## CSS-in-JS sounds great. Why did you switch so many times?

sourcemaps are garbage

bem made scoping never an issue

missing scss fuctions, colors and math

double mental model, never stop having to think about css

shared styles, work stuff


## did it solve the problems

functional pages without styles, are they really the same concern?

conditional rendering, you can still do it but its kind of lame