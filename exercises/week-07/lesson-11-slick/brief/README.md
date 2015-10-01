# jQuery Slick

Have a look at the documentation for Slick at http://kenwheeler.github.io/slick/ and attempt the following

1. Configure the carousel to auto play and move to the next slide after being displayed for a duration of 3 seconds

2. Try to get a fade transition going between slides

3. Add a value for cssEase to control the animation - valid values can be found [here](http://www.w3schools.com/css/css3_transitions.asp)

4. Once you have observed the results remove the fade (it really doesn't work well with more than a single slide)

5. Adjust the number of slides you want to display at a time to 3 and observe the effect of this 

6. Investigate the centerMode feature.  Using Chrome Dev Tools and your hacking skills find out what class gets added to the DOM now.  Next you need to modify (override) in your style.css give the style of `border: 1px solid #333` to the class you identified as being added

7. Now instead of a border try to use a CSS Transform called scale to make the center image stand out [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).  Click [here](https://css-tricks.com/almanac/properties/t/transform/) for more fun with CSS Transforms

8. Create a button to filter the images in the carousel by the outdoors category.  Does it work with in conjunction with the sports category?

9. Adapt the data attributes to take an array of categories so that a slide can be present in multiple categories.  Now write a filter function that will be used to replace the existing filters such that a match in any category will display the image in the carousel. _Hint you can look at the array method indexOf

10. See if you can figure out how to get slick to work with your choice of markup for the slides *Hint mine would be a ul li combination to be more semantically 