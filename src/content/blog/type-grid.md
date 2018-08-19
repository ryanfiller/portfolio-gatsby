---
template: blog-item
title: CSS Grid Design Thoughts 
excerpt: Thoughts on on CSS Grid from someone who went to design school and learned about typographic grids
thumbnail: /images/uploads/css-grid-tron.jpg
banner: /images/uploads/css-grid-tron.jpg
path: /blog/css-type-grid
date: '2017-09-10'
category: 
  - code
tags:
  - css
  - typography
  - design-systems

published: true
---

CSS Grid is great, everyone on the internet has covered that at length by this point. It is a powerful fontend layout tool, but the more time I spend with it the more I am reminded of lessons from one of the typography class I took in college. The [Swiss Design style](https://www.google.com/search?tbm=isch&q=typographic+swiss+design) has been a huge influence over the past 100 years, and the main lessons we learned from this design system in college were about the [modular grid](http://thinkingwithtype.com/grid/#modular-grid). To quote thinkingwithtype.com &#8212;

> A modular grid has consistent horizontal divisions from top to bottom in addition to vertical divisions from left to right. These modules govern the placement and cropping of pictures as well as text.

This was probably a lot of the logic that went into designed the css grid spec, but the ability to define row and column gaps, as well as set repeating template areas using rems and ems to make them relational to our font size is a perfect tool for adapting this classic design principle to the flexibility of the internet browser. With the ability to specifically define how content and images span both rows and columns, this puts the browser even closer to traditional print layout tools like Adobe InDesign, which of course draw heavily from being able to set up traditional design grids.

<img src="/images/uploads/css-grid-print.jpg" alt="print screenshot" class="left" />

**Swiss Modular Grid**
- four column modular grid
- baseline scaled to 10/12 font size

<div style="clear:both;"></div>

<img src="/images/uploads/css-grid-indesign-screenshot.jpg" alt="indesign screenshot" class="right" />

**Adobe InDesign Grid**
- font-size 12pt
- leading 16pt
- basline grid 16pt increment
- 4 column grid, 12pt gutter
- 36pt margins

<div style="clear:both;"></div>

<img src="/images/uploads/css-grid-code-screenshot.jpg" alt="codepen screenshot" class="left" />

**CSS Grid Layout**
- font-size: 12px; (.75rem)
- line-height: 16px; (1rem)
- grid-gap: 1rem;
- columns: 6rem; except when its not
- rows: 6 x auto;

<div style="clear:both;"></div>

The modular grid is a created by combining a baseline grid, which is simply a line along the bottom of each letter spaced out by their leading (lineheight), with the page divided into a number of columns with gutters between them, usually also the same size as the leading.

The power that CSS Grid has over traditional print is firstly fluidity. The screen can be divided into four equal columns with gutters between them, and these columns can be dynamically updated with different screen sizes. Since font size _probably_ isn't changing dependent on screen size, the columns can even be resized dynamically withe the gutters between them staying relative to overall font size.

``` css
body {
  font-size: 12px;
}

.grid {
  padding: 1rem;
  grid-template-columns: auto 1rem auto 1rem auto 1rem auto;
  /* or */
  grid-template-columns: 1fr 1rem 1fr 1rem 1fr 1rem 1fr;
}
```

The second advantage css grid has over print is the ability to change up a layout depending on screen size. A single design changing sizes doesn't at first seem like something that's even possible in print, and in a literal sense it isn't, but for a long time print designers have had to figure out how to design pages as a spread, a single page, and even sometimes down to half to a quarter of page for partial page ads. A similar thought process can be applied to responsive design Maybe the body font size scales down at breakpoints, and the number of templated columns goes down as things start to get too narrow. There's also a usecase for `minmax()` here to make this a little more automated, but on all of my projects I've still been manually configuring this.

In print, the physical size of the page determines a lot about how the grid is constructed. Baseline grid are calculated by taking into account the physical page size, the size of the page margins, and how many lines of text will fit evenly into the overall all layout. Since the height of a webpage is scalable to the amount of content this calculation is a little different, but the construction of the overall grid is still highly tied to the amount of space between the baselines of your smallest lines of text.

## A Quick Aside About Lineheight

Line height does not work the same way on the web as it does in print. Rather than keeping the baseline the same and adding space above the characters, the css line-height property actually adds space to the top and bottom of the letter. [This article](https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align) is a super in depth look into how exactly this works.

In order to get the baseline of the font to line up with the 1rem repeating grid, I actually had to do some relative positioning to bring the entire paragraph text up. Because of this, the actual code has the text in between the grid without doing any extra positioning work.

<iframe height='675' scrolling='no' title='MXEPGe' src='//codepen.io/ryanfiller89/embed/MXEPGe/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

It seems like it would make sense to compensate for this using some math.

``` css
text {
  position: relative;
  top: (line-height - font-size) / 2;
}
```

This would take total height of a line of text, remove the size of the text leaving only the empty space, then divide it in half to account for only the space added to the top. However, because different web fonts come with different negative space baked into them, this still isn't a catch all formula for applying a baseline grid to web text. Starting with the formula and then using some trial and errors from there, I was able to get the heading, subheading and body text to eventually line up to the baseline grid.

<iframe height='325' scrolling='no' title='Baseline Grid Test' src='//codepen.io/ryanfiller89/embed/NzzxKm/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

The downside to this is that if for any reason you need to position your text elements anything other than relative you either are introducing even more complicated styles, or need to start introducing more markup to act as wrappers. There are, of course, [libraries](https://sassline.com/) that help you do some of the work without so much effort, but the larger question is probably "is all of this worth it?"

## Complications vs Benefits?

[Browser support](https://caniuse.com/#search=grid) aside, I think grid should be everywhere in the next few years. If you're taking a mobile first approach, starting with everything in a central column both as a small-size and fallback design and using grid to make the layout more interesting as the screen gets wider is definitely going to be the way to go. As for the overhead to set up a baseline grid everyone on a site, I would have to say "probably not."

 I'm more of a designer than a lot of developers I know, and while this might be something I noticed happening in a design comp it isn't necessarily something I would go out of my way to codify in development. Most developers I know who are doing any kind of creative front end work use rem-based vertical spacing, or even better some kind of `$vertical-rhythm` variable to keep consistent space between their elements on the page. To me, this is enough to achieve visual consistency and hierarchy, and definitely enough to present a clean and consistent experience to your users. 
 
There are certain areas where I think this kind of care makes sense though. If you have a banner component or a complex article page and want headlines to match up with baselines, bylines, or images all places next to each other, I think this is about the extent to which an average visitor to the website would notice something like this. 

Of course, another huge variable here is working with clients and having editable, variable text on ths site since that introduces a lot of unknowns into this equation. I think the best scenario for this is having the area maintained by someone who is both design and code savy, as they'll know not only what looks good but also a little of what's going on with the css to achieve the look.

<img src="/images/uploads/css-grid-text-threads.jpg" alt="indesign screenshot" class="right" />

Another huge drawback to complex grid layouts is that text flow in browsers works quite differently than in, say, InDesign. With a print layout tool textboxes can be linked so that when copy overflows on textarea it automatically starts to fill into its linked textbox. There's no existing HTML / CSS / Javascript / whatever tool that treats text this way, except maybe `css column-count: #;` and event that isn't ideal because a user will end up scrolling to the bottom of the page only to scroll back up to read additional columns. There's some `nth-child()` logic that could target every odd and even `<p>` but with paragraphs of different lengths this might not look great. Again, this might take someone with some knowledge of both design and development to achieve the desired effect. Until browsers get a tool to handle dynamic text overflow, it seems like complex layouts are best handled somewhat manually.