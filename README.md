1. Screenshot embed (pending)

[Imgur](https://i.imgur.com/StN8PjQ.png)
[Imgur](https://i.imgur.com/VCp0Qbk.png)
[Imgur](https://i.imgur.com/o9wI0d2.png)
[Imgur](https://i.imgur.com/xBevDBk.png)

2. HTML5, CSS3, JavaScript

3. Installation instructions:

   Simply download and open up the porfolio-site folder, and open index.html using Chrome or Firefox, or drop the entire folder into an online site-hosting service.

4. User stories

"As an HR manager for my company I want to be able to navigate my applicant's website easily so I can find out more about them without needing to know too much about the technical aspects of websites or how they work. I should be able to do this on either mobile or desktop, as I am always on the move."

"As a person with sensitive eyes I would like the webpage of my applicant to be pleasant and easy to look at."

"As a project leader and manager I want to be able to gauge the overall experience of future hires at a glance, and have access to their past projects and code on Github. Their website should also speak something of their general skill and design philosophies, such as whether they take into consideration accessibility features or not."

"As a cohort I want to be able to learn a little bit more about my team members, and not just understand their skills and expertise more thoroughly, but maybe also get to know them a little better."

5. Wireframes

https://user-images.githubusercontent.com/104736102/170339265-bca9d2a0-59d1-41f8-860d-7dc58b8cb8ca.png

https://user-images.githubusercontent.com/104736102/170339420-acbdd63b-d958-4dc9-8041-f5747842385b.png

https://user-images.githubusercontent.com/104736102/170339545-2b6097ba-63e4-4e1c-a66f-af8e1e035e50.png

https://user-images.githubusercontent.com/104736102/170339608-1500854e-8f29-4a7e-b793-301d0d531fe4.png

https://user-images.githubusercontent.com/104736102/170339635-464fbc2c-75cc-4a11-bec4-a992659ab7e0.png

6.  Descriptions of any Unsolved problems or major hurdles you had to overcome

-Dark Mode Toggle Button hovers over part of the header text on iPhone SE screens specifically.
-Dark Mode Toggle Button is currently non-selectable using a keyboard, making it unusable without a cursor or touch interface. Not completely sure what is up with that just yet.
-Formatting is a bit strange, particularly around the nav bar, on ultra-narrow displays like the Galaxy Fold
-Footer remains a bit elusive in positioned. It is currently set to rest at the bottom center of the website, but using a large amount of top-margin to get it to be positioned correctly. Allowing it to sit at the bottom of the website using various formatting options leads to strange behavior on at least a few possible devices.
-Using freely distributed buttons for the carousel in the projects page. Serviceable, but they feel more than a little out of place with the rest of the website's design. I would like to implement custom icons for this at some point.
-Carousel was a little difficult to implement due to the novelty of it, and especially to have it conform to the formatting and styles of the rest of the website. It was pretty broken for most of its' implementation up until the very end. For a short while there the Left Button didn't work until I figured out it wasn't removing the classes from each index item in the slide correctly when you clicked it (it was set to search for and remove the class items that the NEXT button is supposed to take care of instead. This drove me nuts and almost made me stop working on the carousel entirely)
-Website needs better labeling for the sake of screen readers.
-The desktop version of the site has a Nav button that toggles the Navigation Bar on the left side of the page from its' full size to a more compact size. Originally, the nav bar was going to stretch up the whole side of the website, but it became too complicated a problem to make it render that way (because I'm still struggling with Flexbox) in the first place, much less figure out a way to style it that made sense and was appealing, but that whole side-bar was something I intended to have collapse with a button click. Instead the significantly-downscaled nav bar now simply becomes tiny and the font-size is reduced to zero. It does what I want it to, but it doesn't have the smooth transition quality I originally wanted to give it and at this point in time I am altogether too perfectly ready to move on past it - I have been starting at this website all weekend long and I need a break from it. @~@
