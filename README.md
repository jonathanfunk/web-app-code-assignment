Web App Code Assignment
======

## Project
For this project, I was given 8 hours to build a web app where users can customize how their phone behaves. Some accounts come from large companies with their own subaccounts. I chose React for this project because I'm more familiar with that library and states will come in handy in this app.

Prior to starting this project, I had to find out how I was going to create a nested database. After researching on how to make such a construct, I went with giving each account a parent id, which is the id of an account one level above them.

I started the app by making all the necessary components. I only needed a few. I created a small list of goals on Github. My login functionality was very simple: just click on the radio button and you're logged in. I started off with one account and two subaccounts. I was able to select my two subaccounts while logged in as a main account just as planned. When I made a list of users, I was able to achieve the same affect for when I selected a subaccount. I was happy with the result but one flaw with my method is that I can only select subaccount one level deep. I've since created more accounts & users. And instead of clicking on the radio button, the user can select any account s/he wants from the select box.

So unfortunately, I couldn't achieve all the goals in time. The list of templates would be quite different from my users & accounts. One of the goals of this project was for the user to be able to make changes from the base template but as of this time I'm not sure how to implement that feature. 

Despite coming up short, I had a good time building this app. If given more time, I would make this a full-stack app & come up with cool designs.

## Todo List
* Create templates mock data
* Create list of templates
* Make templates editable
* Create pagination
* Fix access restriction
* Add load/save functionality
* Build functional login form

## Installation Instruction:
```sh
npm install
npm start
```