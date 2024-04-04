### Demo_HealthCost_InsightPro v1.0 - Prototype
HealthCost Insightpro is a web application that aims to empower insurers and their companies with data-driven insights to make informed decisions regarding healthcare cost management, ultimately leading to better financial outcomes and improved employee well-being.

## The System:

**Two Roles**: Admin and Contact Person (Insurance Company)
**Contact Person**: Inputs data like member location, covers, and limits for analysis.
**Admin**: Analyzes data, generates reports with recommendations to reduce costs, and suggests further steps.
**Insurance Company**: Uses reports and recommendations to make informed decisions.

This is the first version (prototype), and some functionalities are under development.

## Project Goals
**Analyze and Forecast Healthcare Costs**: Utilize electronic health records and demographic data to analyze and forecast healthcare costs for companies' workforces enrolled in  health insurance.

**Optimize Cost Management Strategies**: Provide insurers and companies with insights and recommendations to optimize cost management strategies while maintaining quality healthcare services.

**Enhance Pricing Accuracy**: Assist insurers in accurately pricing healthcare plans for their clients based on projected healthcare expenses, geographical locations, and demographic profiles.

## Target Audience
Insurers
Healthcare companies

## Getting Started(local setup)
This README guides you through setting up and running the Demo_HealthCost_InsightPro prototype application locally.

## Requirements
Node.js

Npm

Live server

## Installation
To set up the HealthCost tool locally, These are the steps you should follow:

1.**Clone the Repository**:
On your terminal, write this:

         # git clone https://github.com/k-ganda/demo_HealthCost_InsightPro
         
You can also find the link by clicking on the green button written code: 
![image](https://github.com/k-ganda/demo_HealthCost_InsightPro/assets/116561806/91607d35-0229-41e9-aef8-c3681da59474)


2. **Navigate to the directory**
After cloning, move into the directory:

          # cd demo_HealthCost_InsightPro

4. **Install the dependencies**
   Still, on your terminal, write the command below. This command will install all required dependencies for the project. 
   
         # npm install

6. **Start the application**
   
         # npm start
   
   This command will start the application, ensuring the server and the database are connected. You can access it at http://127.0.0.1:5501/frontend/index.html in your web browser.

## Exploring the Application: 

1. **Homepage**: 
   Find the file index.html, right-click it, and open it with the live server. You should find the interface for the home page.
   
   Alternatively, You can access the deployed version at https://k-ganda.github.io/frontend/#home (live website for both frontend and backend).
   This which contains the live website of both the frontend and backend of it.


2. **Sign up/ Log in**
   On the top right-hand side of the website, click on login, and it will take you to a section where a user can either log in if they have an account or sign up as a new user.
   **Sign up first before logging in.**
   
  Fill out the form, ensuring lowercase letters for the role ("admin" or "contact person").
  
         Admins only need to fill up to the phone number section.
         
         Contact persons fill out the entire form.
   
 Log in with your email and password after signing up.

 ## Dashboards: 
  **Contact Person**: View your added information and admin recommendations (if available).
  
**Admin**: View information for all contact persons and add reports with recommendations after data analysis.



## Disclaimer:
1. The current recommendations and reports are for demonstration purposes only and don't reflect real data analysis.

2. Due to the short period the project was done in, the upload requirement wasn't possible, but instead, a text area is provided so the users can input their member data.


## Future Development:
**Data Upload Functionality**: We plan to incorporate the ability to upload data into the tool, enabling users to import relevant information seamlessly.

**Visualizations for Member Data**: Future versions will include visualizations to display trends in member data, providing insights into patterns and changes over time.

**Notification and Alerts**: Admins will receive notifications when new users register, and contact persons will be alerted once the admin provides recommendations.

**Enhanced Security Measures**: We aim to implement robust security measures, including restrictions to ensure only one contact person per insurance company, thus preventing data leakages and enhancing data security.



## Contributing
Contributions to the HealthCost Tool are welcome! If you would like to contribute to the project, please follow these guidelines:
-Fork the repository on GitHub.
-Create a new branch for your feature or bug fix.
-Make your changes and ensure that the code passes any existing tests.
-Commit your changes and push them to your fork.
-Submit a pull request to the main repository.

## Support
If you encounter any issues or have questions about the HealthCost Tool, please open an issue on GitHub. We appreciate your feedback and contributions!

Thank you for using the HealthCost Tool! We hope it provides valuable insights for optimizing your healthcare cost management strategies.😊
