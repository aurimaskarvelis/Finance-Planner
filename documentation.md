
# Cover

*Aurimas Karvelis (306997)
4karva50@gmail.com
https://github.com/aurimaskarvelis/Finance-Planner
https://financeplanner.herokuapp.com/*

  

## Introduction

The aim of this application is to allow students to visualise and plan their savings goals over a long term period. This application has been developed in React and has taken advantage of the different react node modules that are readily available.

  

## Methodology

The choice of development methodology for this project has been the Waterfall approach. The reasoning behind this choice is the ability to have linear progress with clear steps on how to accomplish the end goal, this has been ideal for this scenario as each step has to be completed before moving on to the next.

  

Following the coding/implementation stage of the methodology, I’ve created some simple forms which allowed me to receive user feedback on the application.

  

I have asked a couple of simple questions in regards to the web application:

-   What do you think of the user interface
-   Do you find the application useful
-   What future features would you like to see
-   Feedback
    

  

67% of users have found the application user interface easy to use, whereas 33% referred to it as 'okay'. None of the users have found this application difficult to use (Appendix 1).

  

100% of the users have found the application to be useful to them (Appendix 2).

  

When asked 'what future features would you like to see', multiple individuals have replied with features such as 'visualisation' and 'graphs'. An individual has answered with the request to save the goals and add the ability to track these. There has also been requests to integrate this application with the users bank account, unfortunately, this doesn't seem like a feasible option for a web application of this size (Appendix 3).

  

## Conclusion

The use of a design thinking methodology during the initial planning stage of this project has been crucial, it has allowed me to understand the user’s needs and their requirements. This information allowed me to generate ideas on how the user’s issues can be resolved by an application. The core functions of the application were to plan and envision their financial goals and how to reach them. Based on the design process questionnaires, I believe that this application has delivered exactly what some students requested.

  

As the application has been developed in React, I have been able to take advantage of React Router to create a single page web application which eliminates any loading time issues.

  

When developing any web application, it is vital to take accessibility into consideration, this was accomplished with the use of ALT tags on images to describe them so screen readers are able to read the alt tags out if needed. Links can often be difficult to understand for screen readers if their content is not too clear, this is why the use of aria-labels is imported to describe certain links, I have used this on the dashboard section to describe where the boxes lead to if clicked.

  

Browser compatibility can often lead to a variety of different bugs. To ensure that I don’t use any invalid CSS, I have run the stylesheet through the official [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). Any styling that I am not entirely sure on compatibility, I have checked the [Can I Use](http://caniuse.com) website to compare the different browsers. For example, the ‘max-content’ property may work on Firefox and Google Chrome, but it does not work correctly for Internet Explorer, Edge or Safari.

  

Vendor prefixes have been added to allow backwards compatibility with the older browsers, this has been accomplished with the use of the [auto prefixing tool](https://autoprefixer.github.io/).

  

When developing the application, mobile usability has been a key point of consideration, to ensure that the application works on all browser sizes, the use of media queries has been vital. I have also used flex-box instead of floating items, this makes items more responsive. To test that the application works on all devices, I have used a piece of software called [BrowserStack](https://www.browserstack.com/). It provides me the ability to test the web application on every popular browser, operator system and real mobile devices.

  

There is always room for improvement, the future goal for this application is to develop a database of information with the use of React, NodeJS and Express in connection with MongoDB. The plan is to fetch information from a variety of different websites and save copies of this into a database. The UI will allow users to search through the database by keywords allowing for a sleek and simple method of gathering information regarding finances. Due to the application being developed in React, I have taken advantage of the reusable UI components it offers. The benefit of using components means that any future features can be developed into components irrespective of anything else on the application and then once it is ready to go live, they can be easily added on.

## Appendix

Appendix 1:
![Form Results](https://i.imgur.com/wpQBClz.png)

Appendix 2:
![Form Results](https://i.imgur.com/Nq5hHAT.png)