# Assignment 6
- Course: 601 - Web Application Development
- Name: Luis Salas

## Implementation
Using vue JS, two components were created:
1. **Image Gallery**: Loads the images from a config.json file.
2. **Image Before After**: Based on the addresses given by the image gallery, it assumes that there is a file named config in the given direction and two images named before and after with .png extension.

The change of images and title is handled by using the reactive functionality of vue:
1. Title year section is a variable in the data.
2. The image name is a variable in the data.
3. An event on click was placed over the image that toggles the value from *before* to *after* and backwards, that updates the values of the title and image, the rest is handled by Vue.
