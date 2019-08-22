---
title: Southeast Ruby 2019
excerpt: I went to my first tech conference!
thumbnail: 
  image: "../../images/uploads/css-grid-tron.jpg"
  alt: "Grid from the movie Tron"
banner: 
  image: "../../images/uploads/css-grid-tron.jpg"
  alt: "Grid from the movie Tron"
date: '2019-08-02'
category: 
  - code
tags:
  - conferences

published: false
---

This past weekend, I went to my first tech conference. 

Jessica Kerr

"the first user is the developer, the design informs the implementation"
"if you have a fun puzzle to solve its likely already been solved by someone else"
"chagningsoftware is how we learn", internal software that keeps going
open vs closed games

"users as ofthen to obstales to change"
"the more useful you are the hard it is to change"
cms spacebar thing
designing change
are we moveng in a useful diretion?
gensis stage is intereting, we're not answering questiosn but looking for new questions 
talk to the scrs


The Object Oriented Design Cookbook - Fernando Seror Garcia

millenials are killing oop
but oop mimics how the world works
acryonym driven development
"refacctoring and to figure out how to pass data helps you understand code" I just did this
refactor utility classes into other related things, make things refer to "self" mostly
use comments while refactoring. thinking about a comment/commit if maybe more important than the comment/commit itself
"objects don't need to know who're they're talking to, just what they are responsible for"
if you are using the same conditional a lot.... this happens in css in js a LOT


Digital Ethics in an Unethical Era: How to Not Ruin The World - Sonia Gupta

digital ethicacy
"we also hojld human life and freedom in our hands as software developers"
"don't do anyting you know to be wonr" ux dakr patterns
"affirmitive buren to be ethical" usability
ethics presupposes the law, you should even if youdon't have to
"do you do what's fast or do you do what's best?"
ethical things are often done for profit - privacy and security
"is it ethcical to coax people to buy products theydon't need?"
"stop moving fast and breaking things"
"You're acountable to humanity, not just the company"
makingethical choices FOR your useres, 


Hacking Your Emotional API - John K. Sawers

feelings are "decomposable"
empathy is important
"emotional debt"
"expertssay feelings only last about twnty minutes"
think about baggage rom old jobs
Maybe don't judge other peopls who don't have theese skills


Tales from the Ruby Grimoire - Brandon Weaver

javascript can destrcture better than ruby
you can make ruby do this but it was pretty over y head.
"what's magic today might becanon tomorrow" but "be careful with magic"


“Holy Front-End Frameworks Batman!” Using Rails and Vue.js to Clean Up a Complex Client-Side - Dr. Alex Neuhausen

css in js maybe doesn't always scale well
stribal knowledge of where files lives and how they work
start with small components, scale up to entire SPAs
vue comes wtih a lot of opinionated things (router/axios)and this is interesting
document.addeventlistendf domcontentloaded render app
routing conflicts between vue and rails, vue intercepts user clicks
should spas live in a different repo?
"moving things from random js files into spa is cool" and tied better to data"


The Life-Changing Magic of Tidying Active Record Allocations - Richard Schneeman

ac4d, designing for change
code traige, "easiest way to contribute to open source"
code that sparks joy, if it is "useful, 'necessary', clean, performant"
use benchmarking tools 
"put all the allocations in a pile" is a good way to audit large things


Cat Swetel

"what happens to all the legacy code?"
wardly maps, left to right axis tracks evolution
"things that are comodity only become conspicuous when they break"
"empathy is imporant for overcoming inertia."
"golden handcuffs" 
y axis on graph is "visiblity" / "awareness"
"how do I know what to evolve when?"
"we probably don't need maps, but we need mapaing" same as other talk talking about how thinking about things surfaces patterns
"you are responsible whether you like it or not"
wardly maps are helpful because they show you what someone else could built on top of what you're mking, for better or for worse


Jets: The Ruby Serverless Framework - Tung Nguyen

servless means you don't have to manage the server, you only care about your code and not about the insfastructure it runs on
the first serverless request is a "cold start" and has to spin up all depencies
