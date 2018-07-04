---
template: blog-item
title: CSS Grid Design Thoughts 
excerpt: Thoughts on on CSS Grid from someone who went to design school and learned about typographic grids
thumbnail: screen-shot.png
banner: /images/uploads/screen-shot.png
path: /blog/type-grid
date: '2017-09-10'
category: 
  - dog
tags:
  - blue
  - red

published: true
---

CSS Grid is great, everyone on the internet has covred that at length by this point. It is a powerfull fontend layout tool, but the more time I spend with it the more I am remdinded of lessons from the typography class I took in college. The Swiss Design style has been a huge influnce over the past 100 years, and the main lessons we learned from this design system in college were about the [modular grid](http://thinkingwithtype.com/grid/#modular-grid). To quote thinkingwithtype.com &#8212;

> A modular grid has consistent horizontal divisions from top to bottom in addition to vertical divisions from left to right. These modules govern the placement and cropping of pictures as well as text.

I've heard the grid spec jokingly dismissed as "oh, we're basically doing table layout again?" but with the ability to define row and column gaps, as well as set repeating template areas using rems and ems to make them relational to our font size, this is a much more powerful tool with much in common with traditional print tools like Adobe InDesign.

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

The modular grid is a created by combining a baseline grid, which is simply a line alongs the bottom of each letter spaced out by their leading (lineheight), with the page divided into a number of columns with gutters between them, usually also the same size as the leading.

The power that CSS Grid has over traditional print, is of course the ability to change up a layout depending on screen size. Traditional design has been solving the problem for hundreds of years of how to design pages as a spread, a single page, and even sometimes down to half to a quarter of page for partial page ads. To their credit though, traditional page layouts use this to their strength. Baseline gride are calculated by taking into account the physical page size, the size of the page margins, and how many lines of text will fit evenly on the page. 

Online text works quite differently. There's no existing HTML / CSS / Javascript / whatever tool that treats text like InDesign's overflowing linked text boxes, except maybe `column-count: #;` and event that isn't ideal because a user will end up scrolling to the bototm of the page only to scroll back up to read additional columns. Much like layout out text with `display: grid;` 

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

This would take total height of a line of text, remove the size of the text leaving only the empty space, then divide it in half to account for only the space added to the top. However, because different web fonts come with different negative space baked into them, this still isn't a catch all formula for applying a baseline grid to web text. Starting with the formula and then using some trial and errors from there, I was able to get the heading, subheading and body text to eventually lighn up to the baseline grid.

<iframe height='325' scrolling='no' title='Baseline Grid Test' src='//codepen.io/ryanfiller89/embed/NzzxKm/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

The downside to this is that if for any reason you need to position your text elements anything other than relative you either are introducing even more complicated styles, or need to start introducing more markup to act as wrappers. There are, of course, [lirbaries](https://sassline.com/) that help you do some of the work without so much effort, but the larger question is probably "is all of this worth it?"

## Some kind of header should go here

Is this worth it? I'm more of a designer than a lot of developers I know, and I would honestly have to say "probably not." Most developers I know who are doing any kind of creative front end work use rem-based vertical spacing, or even better some kind of $vertical-rhythm variable to keep consisten space between their elements on the page.