### Demo_HealthCost_InsightPro v1.0 - Prototype
HealthCost Insightpro is a web application that aims to empower insurers and their companies with data-driven insights to make informed decisions regarding healthcare cost management. 

The project seeks to:
**Analyze and Forecast Healthcare Costs**: Utilize electronic health records and demographic data to analyze and forecast healthcare costs for companies' workforces enrolled in  health insurance.

**Optimize Cost Management Strategies**: Provide insurers and companies with insights and recommendations to optimize cost management strategies while maintaining quality healthcare services.

**Enhance Pricing Accuracy**: Assist insurers in accurately pricing healthcare plans for their clients based on projected healthcare expenses, geographical locations, and demographic profiles.

## Target Audience
Insurers
Healthcare companies

Therefore, this README provides clear instructions for locally setting up and running the **prototype** application.

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
   
   This command will start the application, ensure that both the server and the database are connectd. And by default, the application will be accessible at 'http://localhost: 3000' in your web browser.

7. **Navigate to the homepage**

   Find the file index.html, right click and open with live server and you should find the interface for the home page.

8. **Sign up/ Log in**
   On the top right hand side of the website, click on the login and it will take you to a section where a user can either log in if they have an account or sign up for a new user.
   **A user must first sign up before logging in.**
   
   Fill in the form, **NOTE**: On the role section, ensure that you have all your letters in lowercase, ("admin" or "contact person"). If you sign up as an "admin", you should only fill up the form upto phone number and leave the text area whil the contact person will fill the whole form.
   
   Once sign up is successful, head to the log in section and log in with the email and password you signed up with and depending on the role you are, you will be taken to the respetive dashboard.

   
   The contact person dashbaord just contains the information they added and recommendations once the admin has responded to them, while the admin contains every information for all contact persons logged in and a sction to add the report and reccommendations after going through their data.
    



## Disclaimer:
1. The current recommendations and reports are for demonstration purposes only and don't reflect real data analysis.

2. Due to the short period the project was done in, the upload requirement wasn't possible, but instead, a text area is provided so the users can input their member data.


## Future Development:
**Data Upload Functionality**: We plan to incorporate the ability to upload data into the tool, enabling users to import relevant information seamlessly.

**Visualizations for Member Data**: Future versions will include visualizations to display trends in member data, providing insights into patterns and changes over time.

**Notification and Alerts**: Admins will receive notifications when new users register, and contact persons will be alerted once recommendations are provided by the admin.

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
