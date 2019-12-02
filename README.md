
# Holiday Destinations 🎪
![alt text](https://geomint.github.io/holiday-destinations-v2/assets/images/mutli-device-screenshot.png)
Thankyou for visiting my project, please feel free to read through the Read-me and browse my project, if you have any questions or suggestions drop me an email at george.pyott@googlemail.com. Happy Coding!👨‍💻
## Contents:

* UX 👍
    * Project Goals
    * Target Audience Goals
    * Site Owner Goals
    * User Requirements and Expectations
    * Design Choices 🎨
        * Fonts
        * Icons
        * Colours
        * Styling
        * Images
        * Backgrounds
* Wireframes 🔧
* Features 🎡
    * Features that have been developed
    *  Features that will be implemented in the future
* Technologies Used 👨‍💻
* Testing 🔌
* Deployment 🚀
* Credits 💳


## UX (User Experience) 👍
### Project Goals
The goal of this project is to help users find ideal holiday locations based on packages that they interact with or the interactive map. The project is aimed toward holiday-makers and also families of all ages. The website needs to be visually appealing enough to encourage user interaction whilst also providing an good User Experience to entise shoppers to use our service.

#### User Goals:
* A website that serves as an informative tool to help find the right holiday for them.
* Attractive call to action across and throughout site to ensure high levels of engagement.
* Interactive map so users can pick best selling holiday locations.
* Visual Interaction including animated sliders.
* Send a message via contact form.
* Filter a map based on user input.
* Interact with the website on both Desktop tablet or mobile.

#### Site Owner Goals:
* Generate new leads and interest for holiday makers.
* Gather information on what types of holidays people are looking for.
* Recieve contact details through use of contact form.

## User Requirements and Expectations:
##### Requirements:
* Manipulate an interactive map to see various holiday destinations.
* Navigate the website using the navbar/pop-out nav.
* Be provided with information on various locations.
* Content displayed in a visually appealing manor.
* Interact with map to find our more information about certain locations.
* Contact Form validation to help against spam.

##### Expectations:
* Map to display points of interest (best selling locations).
* Can click markers which then display more information and a link to a package website.
* Interact with sliding elements to select packages.
* Content is visually satisfying and informative.
* Navigation takes user to specific parts of the website.
* Pop out nav appears in place of navbar on Tablet + Mobile Devices.
* Form Validation works correctly.

## Design Choices: 🎨

The theme of this project is holidays and vacations, therefore my design choices are heavily influenced by positive colours and motifs. <a href='https://www.crazyegg.com/blog/colors-proven-to-boost-sales/'>This</a> Using the resources in this blog I was able to pick out a colour scheme that has been proven to boost sales/interaction with a web page.

##### Fonts: 
I chose to use the font LATO as it showcases a very simplistic style which compliments the minimalist nature of the overall site design. The focus of the content is to provide an informative experience for the customer, which heavily influenced my decision to choose a font that isn't too ambiguous.

##### Icons: 
The icons used are self explanatory so that the user does not need to struggle to interpret what the icon will actually do. I use the icon ‘bars’ from font-awesome icons, to display the classic ‘burger-button’ on tablet and mobile devices, this is well known in the industry as being a point for navigation. I had to make sure that the icon was big enough on smaller devices to ensure easy access.

##### Colours:
Using learned knowledge from prior research, bright and vibrant colours have a higher influence in terms of positivity and therefore more potential sales/leads and interactions: Using <a href='[Generate - Coolors.co](https://coolors.co/d9f0ff-5bc0eb-e55934-fa7921-fde74c)'>This</a> i was able to find a colour scheme that suited the afor mentioned points.

* Primary: #4ECDC4 “Moderate cyan” I chose this as the primary colour as the colour cyan is great to influence thoughts of trust, honesty and intelligence.
* Secondary: #264c5f “Very dark blue” I chose this as the secondary colour as this colour provides an eye catching variation to the primary blue, this is used in most places as a background colour.
* Tertiary: #1A535C “Arapawa” This tertiary colour will be used as an accent highlight on certain elements, this colour promotes happiness among the average person and therefore (hopefully) influence more sales/leads.
* Navigation Colour: #FF6B6B “Bittersweet” This bursting colour provides excellent contrast for the dark blues, with the added benefit of being a blend of orange/red which influences a hightened emotional response.
* Default Body Colour: #F7fff7 "Mint White" This off white colour will provide a discreet contrast from the blue theme i've got within this project, a subtle yet effective default body colour.
* Default Body Panel Colour: #2a3439 "Darkest Blue" This dark shade of blue will be used to provide backgrounds to specific panels of interest especially on the hero section of the website.

##### Styling: 

Thanks to SASS/SCSS I was easily able to set variables in my stylesheets that ask as the house style - this means that the styles can be used in multiple places without having to repeat code. Using SASS also allowed me to better structure my stylesheets, splitting them off into partial files for example, splitting the css into ‘component’ files, i.e map, buttons, headers (see assets/scss for all partial files). Using BEM allowed me to easily nest my SASS code and also making my HTML code much more readable.

##### Example Variables:

Colours: 

```sass
$primary-color: #4ECDC4;
$secondary-color: #264c5f;
$tertiary-color: #1A535C;
$navigation-color: #FF6B6B;
$default-body-color: #F7fff7;
$default-body-panel-color: #2a3439;
$white-color: #fff;
```

Default Styling:

```sass
$default-text-shadow: 1px 1px #000;
$default-transition: all 0.2s ease-in-out;
$default-box-shadow: 1px 1px 1px rgba(0,0,0,0.4);
```

##### BEM:

BEM Stands for block element modifier, and is a way of writing CSS/SASS code in order to organise the code into a much more readable format. Head to the credits to read more about BEM style.


##### Background:
The background images I chose to use on the banner are sourced from royalty free websites, they showcase different types of ‘lifestyle’ shots on different holiday destinations. Arguably large images like the ones mentioned are great for encouraging sales and leads. I manually resize the images using a tool called Gimp, having accurately sized images reduces the load time of the website. 

## Wireframes: 🔧
I built the wireframes for this project using Balsamiq mockups + Moqups. First I started by doing a very basic wireframe for Mobile/Tablet/Desktop on Balsamiq - these were to get a basic understanding of how structurally elements would appear on the page. Next I moved onto Moqups to produce a more fleshed out wireframe for each device size, this time using a bit more colour and style.


## Features: 🎡

* Sliding Banner
* Sliding Package Deals
* Sliding Testemonials
* Form Validation to help with spam attacks
* Interactive Google Maps
* Slide out navigation for mobile/tablet devices

## Technologies Used: 👨‍💻

### Languages:

* <a href="[HTML: Hypertext Markup Language \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)">HTML</a>
* <a href="[CSS: Cascading Style Sheets \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)">CSS</a>
* <a href="[JavaScript Tutorial](https://www.w3schools.com/js/)">JavaScript</a>

### Tools & Libraries:

* <a href="[jQuery](https://jquery.com/)">jQuery</a>
* <a href="[The world’s leading software development platform · GitHub](https://github.com/)">GitHub</a>
* <a href="[Overview  \|  Maps JavaScript API  |  Google Developers](https://developers.google.com/maps/documentation/javascript/tutorial)">Google Maps</a>
* <a href="[slick - the last carousel you'll ever need](https://kenwheeler.github.io/slick/)">Slick Carousel</a>
* <a href="[gulp.js - The streaming build system](https://gulpjs.com/)">Gulp.js</a>
* <a href="[Sass: Syntactically Awesome Style Sheets](https://sass-lang.com/)">SASS/SCSS</a>
* <a href="[JSON](https://www.json.org/json-en.html)">JSON</a>

## Testing: 🔌
As this was my first time being exposed to the Google Maps API, my testing was extremely thorough, making sure that I scrutinized every line of code and detail not only meant that the code ran without issues, but also allowed me to learn more in depth how to work with the API. Testing involved my own personal testing and also that of my peers and fellow students.

##### Testing Stories:

* I was informed that the colours I had initially chose clashed too much in terms of contrast, i then used coolors.co to select a new color scheme and implemented the new colours. 

* I ran into an issue with how I was accessing data from the JSON object, what i thought was a request to the individual nested country code was actually returning ‘undefined’ due to me not using correct syntax. Fixing this using square braces to pass in the value allowed to me accurately collect that required data from the file.

* During a User-review I was informed that there is a much more modern way of requesting data from an external source using JavaScript, using the fetch api. I previously was using a classic XHR http request but the fetch api was both easier to use and was done in less lines of code.

* Around half way through this project i decided to elevate the SASS code i was writing by splitting off the sections of SASS code into their own partial files, not only did this clean up my code in terms of readability but also allowed me to have a global ‘index’ file from which I could compile SASS code from.## Deployment: 🚀
## Deployment: 🚀
This project was deployed on Github pages.
## Credits: 💳

* <a href="[Creating a Dead Simple Sass Mixin to Handle Responsive Breakpoints](https://medium.com/developing-with-sass/creating-a-dead-simple-sass-mixin-to-handle-responsive-breakpoints-889927b37740)">Mixin For Breakpoints</a>
* <a href="[Favicon & App Icon Generator](https://www.favicon-generator.org/)">Favicon Generator</a>  
* <a href="[BEM — Block Element Modifier](http://getbem.com/introduction/)">B.E.M</a>


