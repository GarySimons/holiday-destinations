
# Holiday Destinations 🎪

![alt text](https://geomint.github.io/holiday-destinations-v2/assets/images/mutli-device-screenshot.png)


Thankyou for visiting my project, please feel free to read through the Read-me and browse my project, if you have any questions or suggestions drop me an email at george.pyott@googlemail.com. Happy Coding!
👨‍💻
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

#### User Stories:

##### Mr Smith: 
<em>"As a user I want to be able to use this tool to find the best holiday locations based on areas around the world, the ideal application for this would be on a website that works on both tablet and a mobile ideally we would be able to have somewhere to get in touch with the company so we could get an extra level of service. When I interact with the certain packages on the page I would expect that I either am served some results based on my click."</em>

##### Gabriel P:
<em>"In todays market its hard to find a website that narrows down location options based on location without being overwhelmed by aggressive marketing, for me personally I would expect this site to function seemlessley when I interact with it. Finding the location seems to be the hard part these days and ideally the site will help with that. When I refine the search down to a specific area I want to be able to interact with the map to read more information about the specific areas."</em>

##### Dave: 
<em>"When I interact with a website like this, the key for me is not having too much choice, all the time I find myself on websites that try and cram marketing down your throat as soon as you enter their site, this site nicely offers you locations without being too aggressive."</em>

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

The theme of this project is holidays and vacations, therefore my design choices are heavily influenced by positive colours and motifs. Using the resources in <a href='https://www.crazyegg.com/blog/colors-proven-to-boost-sales/'>this</a> blog I was able to pick out a colour scheme that has been proven to boost sales/interaction with a web page.

##### Fonts: 
I chose to use the font LATO as it showcases a very simplistic style which compliments the minimalist nature of the overall site design. The focus of the content is to provide an informative experience for the customer, which heavily influenced my decision to choose a font that isn't too ambiguous.

##### Icons: 
The icons used are self explanatory so that the user does not need to struggle to interpret what the icon will actually do. I use the icon ‘bars’ from font-awesome icons, to display the classic ‘burger-button’ on tablet and mobile devices, this is well known in the industry as being a point for navigation. I had to make sure that the icon was big enough on smaller devices to ensure easy access.

##### Colours:
Using learned knowledge from prior research, bright and vibrant colours have a higher influence in terms of positivity and therefore more potential sales/leads and interactions: Using <a href='[Generate - Coolors.co](https://coolors.co/d9f0ff-5bc0eb-e55934-fa7921-fde74c)'>This</a> i was able to find a colour scheme that suited the afor mentioned points.

* Primary: #4ECDC4 <strong>“Moderate cyan”</strong> I chose this as the primary colour as the colour cyan is great to influence thoughts of trust, honesty and intelligence.
* Secondary: #264c5f <strong>“Very dark blue”</strong> I chose this as the secondary colour as this colour provides an eye catching variation to the primary blue, this is used in most places as a background colour.
* Tertiary: #1A535C <strong>“Arapawa”</strong> This tertiary colour will be used as an accent highlight on certain elements, this colour promotes happiness among the average person and therefore (hopefully) influence more sales/leads.
* Navigation Colour: #FF6B6B <strong>“Bittersweet”</strong> This bursting colour provides excellent contrast for the dark blues, with the added benefit of being a blend of orange/red which influences a hightened emotional response.
* Default Body Colour: #F7fff7 <strong>"Mint White"</strong> This off white colour will provide a discreet contrast from the blue theme i've got within this project, a subtle yet effective default body colour.
* Default Body Panel Colour: #2a3439 <strong>"Darkest Blue"</strong> This dark shade of blue will be used to provide backgrounds to specific panels of interest especially on the hero section of the website.



##### Styling: 

Thanks to SASS/SCSS I was easily able to set variables in my stylesheets that ask as the house style - this means that the styles can be used in multiple places without having to repeat code. Using SASS also allowed me to better structure my stylesheets, splitting them off into partial files for example, splitting the css into ‘component’ files, i.e map, buttons, headers (see assets/scss for all partial files). Using BEM allowed me to easily nest my SASS code and also making my HTML code much more readable.

##### Example Variables:

Colours: 

```css
$primary-color: #4ECDC4;
$secondary-color: #264c5f;
$tertiary-color: #1A535C;
$navigation-color: #FF6B6B;
$default-body-color: #F7fff7;
$default-body-panel-color: #2a3439;
$white-color: #fff;
```

Default Styling:

```css
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

##### Test Planning: 

During planning for this project i knew that i needed to have a bulletproof testing plan in place for during and after the projects build/completion, thanks to the layout being organised in the wireframes i was able to select what feature to work on, organise how i was going to approach each section and follow my testing guide to check that it had been implemented correctly and works as expected. In future projects i would look to include more automated testing to help me with my tests.

##### Testing Stories:

* I was informed that the colours I had initially chose clashed too much in terms of contrast, i then used coolors.co to select a new color scheme and implemented the new colours. 

* I ran into an issue with how I was accessing data from the JSON object, what i thought was a request to the individual nested country code was actually returning ‘undefined’ due to me not using correct syntax. Fixing this using square braces to pass in the value allowed to me accurately collect that required data from the file.

* During a User-review I was informed that there is a much more modern way of requesting data from an external source using JavaScript, using the fetch api. I previously was using a classic XHR http request but the fetch api was both easier to use and was done in less lines of code.

* Around half way through this project i decided to elevate the SASS code i was writing by splitting off the sections of SASS code into their own partial files, not only did this clean up my code in terms of readability but also allowed me to have a global ‘index’ file from which I could compile SASS code from.

### Overall:

<strong>Responsiveness - </strong>
* <strong>Plan</strong> 📝: I knew that this project needed to be FULLY responsive and mobile friendly therefore the obvious option to use Bootstrap as this HTML Framework I'm most comfortable using. Testing using dev-tools throughout and also a final test of the entire site after completion.
* <strong>Implementation</strong> 🏭: Throughout writing my HTML code making sure to use appropriate bootstrap class modifiers to provide correct breakpoints for the content. Testing breakpoints was relatively simple thanks to the easy to use Bootstrap, i only really modified a few breakpoints after writing the majority of my HTML.
* <strong>Result</strong> 🏆: The Responsiveness of the site works as expected, no elements or content escape their boundaries or are hard to see on any device.
* <strong>Verdict</strong> ✅: This test has passed and therefore the site is responsive.

<strong>Design -</strong>
* <strong>Plan</strong> 📝:The overall design of the site had to be bold and use exciting colours and imagery. Using vibrant colours like blue and orange not only provides great contrast but work well for provoking emotional responses. Using sites like LINK allowed me to search for the perfect colours.
* <strong>Implementation</strong> 🏭: Adding these colours as variables in SASS code allowed me to easily use these colours in multiple places at ease and therefore testing quickly and efficiently. 
* <strong>Result</strong> 🏆: The colours chosen work well for the theme of the site.
* <strong>Verdict</strong> ✅: This test has passed and the overall colour scheme fits well for the purpose of the site.

### Features:

<strong>Sliding Banner -</strong>
* <strong>Plan</strong> 📝: During planning i was debating whether or not to include a sliding banner in my project as often they can be considered unnecessary for a good user experience, however I decided that it was an added benefit due to the lifestyle imagery being full screen.
* <strong>Implementation</strong> 🏭: Using slick.js I was easily able to implement this feature with little to no issues, the documentation provided is excellent. A few tests were done to find an ideal transition delay speed but this was resolved in a matter of minutes.
* <strong>Result</strong> 🏆: The sliding banner works effortlessly and cleanly. This is also fully responsive.
* <strong>Verdict</strong> ✅: This test passed as the content changes slide automatically.

<strong>Sliding Package Deals -</strong>
* <strong>Plan</strong> 📝: Similar to the planning of the main sliding banner this was a simple feature to implement. I Planned to have multiple package deals available on a sliding carousel for users to choose from, I knew that I would need to test a few things, those being A) how many packages to show on what device type and B) the speed at which these transitions.
* <strong>Implementation</strong> 🏭:  Again thanks to the simple nature of slick.js installing this feature was relatively simple, only having a few minor issues with CSS, these however were resolved after a few minutes testing different width settings.
* <strong>Result</strong> 🏆: The package deals sit nicely on the page as an extra call to action and slide as expected.
* <strong>Verdict</strong> ✅: This test passed as the sliding package deals provide a nice break of content and also extra call to action on a sliding carousel.

<strong>Sliding Testimonials -</strong>
* <strong>Plan</strong> 📝: I planned to originally have static testimonials just to add a bit of variation to the content on the page, however i decided that i could elevate this feature by again utilising slick.js, this would function similarly to that of the other sliders in the project.
* <strong>Implementation</strong> 🏭:  Installing this feature was very simple as this time there was no image to work with, just text and a background.
* <strong>Result</strong> 🏆: The testimonial slider works as expected.
* <strong>Verdict</strong> ✅: This feature passed the above test based on the expected behaviour.

<strong>Form Validation - </strong>
* <strong>Plan</strong> 📝: During planning for this project i knew that i needed to include some sort of form validation on the contact form. Including a ‘honey-pot’ and also the built in ‘required’ attribute in HTML5.
* <strong>Implementation</strong> 🏭:  During implementation of this feature adding the ‘required’ attribute to the form was very simple and worked as expected. I ran into a few issues with the honey-pot feature however testing different responses led me to a solution and the contact form will not send if a specific hidden input field has content.
* <strong>Result</strong> 🏆:  Both of these features work as expected after testing.
* <strong>Verdict</strong> ✅: This test passed based on the expected behaviour.

<strong>Pop-Out Navigation (mobile/tablet) -</strong>
* <strong>Plan</strong> 📝:  I knew that I wanted to elevate the level of interaction on the site on Mobile/Tablet devices, i planned to include a slide out navigation behind the common burger button as is standard in the industry.
* <strong>Implementation</strong> 🏭: Using very simple jQuery, HTML and CSS i was able to achieve this feature with little to no struggle at all, the nav pops out as expected. I had to tweak certain aspects like the box shadow on the entire nav and also the overlay opacity however these were minor and did not set my project back in any way.
* <strong>Result</strong> 🏆: The pop out nav works as intended and provides another level of navigation for users on a mobile/tablet device.
* <strong>Verdict</strong> ✅: This test passed based on the expected behaviour.

<strong>Interactive Google Maps</strong>
* <strong>Plan</strong> 📝: As this was going to be the ‘hero section’ of the page I set aside a lot of time to plan this feature thoroughly as to make sure it was implemented efficiently, not using this API before i was anxious to jump straight into coding. I planned to implement this feature so that users could request certain sections of data based on their click, and then display these results in a way that was simple and easy to read/navigate.
* <strong>Implementation</strong> 🏭: Alot of testing was conducted during the development of this feature. During the installation of this feature, after a user-review, i decided to use a JSON object to store information about each destination for each place. This allowed me to have much cleaner JS code and also work with a concept/tool I have not used before, JSON. Thanks to the great documentation over at Google, implementation of the other basic features of this section was relatively simple.
* <strong>Result</strong> 🏆: A user can interact with the map and the information served, difference information is served based on the users interaction.
* <strong>Verdict</strong> ✅: This test passed based on the level of interaction a user can have with the Google map.

## Deployment: 🚀
This project was deployed on Github pages.
## Credits: 💳

* <a href="[Creating a Dead Simple Sass Mixin to Handle Responsive Breakpoints](https://medium.com/developing-with-sass/creating-a-dead-simple-sass-mixin-to-handle-responsive-breakpoints-889927b37740)">Mixin For Breakpoints</a>
* <a href="[Favicon & App Icon Generator](https://www.favicon-generator.org/)">Favicon Generator</a>  
* <a href="[BEM — Block Element Modifier](http://getbem.com/introduction/)">B.E.M</a>


