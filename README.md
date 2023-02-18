# ATM-React-App
The original code for this exercise was created by faculty for MiT xPro's Professional Certificate in Coding: Full Stack Development with MERN course (August 2022 cohort). I modified the appearance of the form in the CSS stylesheet and optimized the code in the React JSX file.

##### Caroline J. France
Last updated on 11 February 2023

### Project Description
This React exercise is from the course's Module 15: Working with Simple Components. To view, please download all files in this repo. Viewers will see a simple React app that is an interface for an Automated Teller Machine (ATM). At the moment, users can deposit funds and withdraw funds by clicking on the images I designed, entering a number into the form field, and hitting the submit button. Viewers are unable to withdraw funds that exceed the dollar amount in the account balance above.

### How to Locally Run the ATM-React-App
From this ATM-React-App repository, download these files:
* index.html
* atm.js
* styles.css
* nyc.png
* deposit.png
* withdraw.png
* spacer.png

Next, open Terminal (Mac) or Command Prompt (PC), and type the following commands:
* npm install --global http-server
* http-server -c1-1
Then, open a browser, and paste the link to view on your machine:
* http://127.0.0.1:8080

### Future Improvements
Here are some redesign/reconfigure ideas for this project:
* I plan to add functionality to the JSX file, which includes error messages, log-in validation, timed messages related to the updated balance, a currency option, a language option, etc.
* I plan to change the design. Specifically, I want to experiment with designing specifically for React components in an SCSS file.
* I plan to connect this to a database.

### License
MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
