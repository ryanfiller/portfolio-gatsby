---
template: blog-item
title: You got CSS in my Javascript
excerpt: I switched my website back and forth between SCSS and Styled-Components four times. Here are some thoughts on why I kept going back and forth and why I eventually chose what I did.
thumbnail: /images/site-assets/placeholder-thumb.jpg
banner: http://cdn8.bigcommerce.com/s-nkg4mv/images/stencil/1024x1024/products/1938/6665/sd16427-reeses-peanut-butter-big-cup-king-size-16-ct-2__55532.1505957112.jpg?c=2
path: /blog/whatever-whatever
date: '2017-08-15'
category: 
  - code
tags:
  - scss
  - bem
  - javascript
  - styled-components
  - design systems

published: true
---

SCSS is magical. As someone who came into web development through the front end, seeing things like nesting, variables, and mixins was a game changer for me. With the addition of learning <a href="http://getbem.com/" target="_blank">BEM</a> gone were the days of having a monolithic, hundreds-of-lines-long .css file and I was well on my way to writing maintainable component libraries.

Fast forward a few years and I was in the middle of converting my personal site from <a href="https://jekyllrb.com/" target="_blank">Jekyll</a> to <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>. CSS-in-JS is a divisive issue in the web-dev community right now, so I decided to try out <a href="https://www.styled-components.com/" target="_blank">💅&nbspStyled-Components</a> in order to have more of an informed opinion on it.

The internet probably doesn't need another hot take on which approach is better, but here comes one anyways.

## The Alure of Switching in the First Place

One of the first concept you learn when getting into maintainability and best practices is to separate your concerns. You don't want your frontend code mixed in with your backend logic, your content mixed with your display templates, or your styles mixed in with your structural markup.

But is that last part really still true?

One thing React <a href="https://reactjs.org/docs/components-and-props.html" target="_blank">stresses in its documentation</a> is to think in components. This means often times you <em>will</em> have logic on when to display components and onClick handlers in the same file as your JSX. What makes styles different? If you're concern is the overall display, why have these rules live across multiple files?

And to the point of having display logic already in your JSX files, why not go one step further with this? Having to set something to `display: none` because you want to not show it at a certain size always felt kind of lame to me. I'm sure this has performance implications because the browser still has to parse this markup before deciding not to render it, and the markup does still exist on the page. I'm also pretty sure if you're in a situation where you have both a desktop and mobile version of a component in the markup, seeing both on the page while using a screenreader is somewhat of an accessibility concern.

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

## Why switch back and forth so many times?

In coding, I often face choice paralysis. I spend so much time doing research to make sure I won't have to start over midway through a project, and in an effort to learn to avoid that I ended up doing the opposite. I decided to pick something new and go with it, and I ended up jumping between branches and copying a lot of code every time I would run into a new barrier or big solution.

The first and most obvious frustration was debugging. The way Styled-Components (and I think most css-in-js libraries?) handle the issue of scoping is to generate machine-readable classnames and apply them to the JSX elements. That means in the browser, you end up with a lot of nonsense as far as human-readability is concerned.

<img src="/images/uploads/css-in-js-gabbyandryandotcom.jpg" alt="dev tools screenshot" class="full" />

You <em>can</em> add your own classes to things, but if you're correctly leveraging the power of scoping styles correctly and making components you shouldnt have to.

``` javascript 
const Container = styled.div`  
	max-width: 40rem;
`;

const Img = styled.img`
	width: 100%;
`;

const Hover = styled.img`
	width: 100%;
	opacity: 0;
	transition: .125s;

	&:hover {
		opacity: 1;
	}
`;

const Image = () => (
	<Container>
		<Hover src="../images/heads-hover.png" />
		<Img src="../images/heads.png" />
	</Container>
)
```

<img src="/images/uploads/css-in-js-devtools.png" alt="dev tools screenshot" class="right" />

This is great and actually very readable in the code itself, but it makes debugging in the browser very hard. I'm sure there are ways to set up sourcemaps for this, but since SCSS compiles down to regular CSS this works by default. It's easy enough to track down a top level bug since its probably obvious which component the style is coming from, but specificity is still a problem when components are nested. Rather than being self-documented in the browser, this required keeping the location of styles in mind while working, which is especially difficult when coming back to a project weeks or months later.

Another downside to the mental model required here is that even though these styles are written in javascript and use javascript syntax they still boil down to css using css syntax. This means using and understanding a lot of extraneous code just to get the final product in a shape that will work.

``` scss
$tablet: 768px;

@mixin tablet-break () {
	@media only screen and (max-width: $tablet) {
		@content;
	}
}

---

@include tablet-break {
	//styles
}
```

In order to replicate this relatively simple SCSS mixin in Styled-Components we need to define a break size, write a function to scope styles to that breakpoint, then call that function with styles in a component.

``` javascript
export const breaks = {
	tablet: 768

	tabletBreak: (styles) => {
		return `
			@media (min-width: ${breaks.tablet}px) {
				${styles}
			}
		`
	},
};

---

import { breaks } from '../styles';

const StyledDiv = styled.div`
        ${breaks.tabletBreak(`
            // styles
        `)}
    }
`;
```

Because of the nature of writing in one language and interpreting in another, this means weaving in and out of when we want javascript and when we want css. Thankfully ES6's <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank">template literals</a> make this really easy, but this still requires a developer to hold a lot in their mind. In just this breakpoint function I'm defining a function, returning a string to be converted to css, calling a javascript variable, passing an interpolated string into a function, calling the initial function, and then finally passing a template literal into the function. Nevermind if its necessary to call some other javascript variable inside <em>that</em> template literal. One small syntax error here means trying to track down a stray ` or ) or { down through multiple files.

Further to the point of having to overcomplicate things that SCSS natievely does with relative ease, SCSS is a very mature language with over ten years of stability and nuance behind it at this point. The community has had time to make improvements over the years, and while I'm sure the css-in-js community as a whole will eventually get to that level, right now there's just too much missing. SCSS fucntions I've taken for granted like `transparentize()` or the ability to easily to do math with values of different units like ems, rems, and pixels without having to work in either npm dependencies or complicated interpolations is a hard thing to give up.

These are all solvable problems, but the one thing that there's no way around is that these styles <em>only</em> live in javascript. If the project at hand isn't one entirely in javascript a lot of the ideology that makes css-in-js great starts to fall apart. Both at my current and previous jobs, numerous projects exist as a mostly standard web application with only one of the more dynamic pieces written in React. Opinions on the validity of this practice aside, there is simply no way to share the styles from a `StyledButton` component in a way that will also have them hit your regular html `.button` class. In most cases where you won't be starting from scratch on a project, it might not be worth the time to convert a businesses entire design library into components, nor may it be possible without ending up maintaining styles in two places.

## Does either solution solve all the problems?

Yes and no.

One of the biggest reasons I've heard for switching to css-in-js is that it will solve the problem of globally scoped css. Is this really a problem though? It never has been for me. Proper use of <a href="http://getbem.com/" target="_blank">BEM</a> makes it very easy to scope elements to their approriate block. Even not using the BEM syntax its easy enough to wrap something in a top level class applied to the html body or a component.

``` scss
.button {
	background: $orange;
}

---

.form {
	&__button {
		background: $blue;
	}

	.button {
		background: $blue;
	}
}

---

body.form-page {
	.button {
		background: $blue;
	}
}
```

BEM aside, taking advantage of SCSS's native ampersand ability gives you just as much power as Styled-Componen'ts <a href="https://www.styled-components.com/docs/advanced#theming" target="_blank">themeing functionality</a>.

``` scss
.button {
	background: $orange;

	.form & {
		background: $blue;
	}
}
```

Not as many people know about <a href="https://css-tricks.com/the-sass-ampersand/#article-header-id-5" target="_blank">putting the ampersand <em>after</em> the nested selector in SCSS</a>, but this is a great way to add styles to components only when they are used on certain scenarios inside of other components. The above code will compile to the following CSS

``` scss
.button {
	background: orange;
}

.form .button {
	background: blue;
}
```

One thing I've been interested in is viewing pages with no css at all. If you're writing minimal, semantic markup your site should still work pretty decently with no styles at all. Maybe some critical css just so the retina sized images aren't blown outside the bounds of the page, but heading and paragraph tags should still render a readable site. 
With this in mind, is it really fair to treat the entire frontend as one single concern when the markup rendered to the DOM needs to stand alone? Of course, this is a bigger issue with rendering entire pages in javascript all together, and how things appear in the browser do not necessarily need to be a one to one with how a developer authors the code.

One downside to viewing the DOM without any styles is that an end user ends up seeing <em>everything</em> on the page, including things like off canvas navigation or different versions of components shown at different sizes. There's also nothing to stop you from using both scss and react-responsive, that's actually what I settled on doing. This means that even viewing the page with css turned off a user will still only get one navigation and one version of a component unless their browser is at the right size to trigger a `<MediaQuery/>` tag. The downside to this is that I need the breakpoints configured in two places now, once in my config.js object and also as traditional scss variables in a style files somewhere. I'm sure there's a way to make one read the other (probably to have the .js file pull from the .scss file?), but the amount of work to do this didn't seem worth it to me. Luckily these configuration values rarely will need to be updated so this isn't a dealbreaker for me.

Overall, I still see the appeal of putting componentizing styles and putting them in javascript. I think there are huge workflow and browser performance gains to be made, and as libraries grow and add functionality over time switching to them won't mean leaving as much behind. For now I'm sticking with SCSS because that's what my current job requires me to write, and having a personal project where I can continue to explore more complex mixins and extends is only going to make me a better developer. Knowing myself though, I'm sure the next personal project I start from scratch will convince me to do something else, because the idea of leveraging the ability to have your code more and more integrated with itself is definitely a tempting one. Hopefully future projects will be as much of a learning experience as the back and forth switching on this project was. 