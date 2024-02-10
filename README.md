# SecOps Solution Recruitment - Assignment

#### This repository contains the solution for the SecOps Solution recruitment assignment. The assignment involves building a responsive web-based CVE (Common Vulnerabilities and Exposures) database application using React.js. The application allows users to view, add, edit, and delete CVE records, providing a user-friendly interface for managing security vulnerabilities.

## File Structre

```
project-root-directory/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── OAuth.jsx
│   │   ├── PrivateRoute.jsx
│   │   └── PrivateRoute.jsx , Slider.jsx
│   │    
│   ├── hooks/
│   │   ├── useAuthStatus.jsx
│   │ 
|   ├── pages/ 
│   │   ├── ForgotPassword.jsx
|   |   ├── Home.jsx
|   |   ├── Profile.jsx
|   |   ├── SignIn.jsx
|   |   ├── SignOut.jsx
|   |
│   ├── App.js
│   ├── index.js
│   └── config.jsx
│
├── node_modules/
│   └── ...
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── ...
```

## Features
### 1. View CVE Records:
      a. Display a table layout showing CVE records.
      b. Columns include CVE-ID, Severity, CVSS, Affected Packages, and CWE-ID.
      c. Each row represents a single CVE record with corresponding details displayed.
      d. "Edit" and "Delete" options in each row for managing CVE records.
    
### 2.Add CVE Record:
      a. Click the "Add CVE" button to open a modal dialog.
      b. Modal includes input fields for CVE-ID, Severity, CVSS, Affected Packages, and CWE-ID.
      c. "Save" and "Cancel" buttons to confirm or cancel adding the new CVE record.
      d. Input data validation to ensure all required fields are filled.

### 3. Edit CVE Record:
      a. Click the "Edit" option in each row to open a modal pre-filled with existing CVE details.
      b. Modify CVE record details within the modal.
      c. "Save" and "Cancel" buttons to confirm or cancel the changes.
      d. Input data validation to ensure all required fields are filled.

### 4.Delete CVE Record:
      a. Click the "Delete" option in each row to prompt the user with a confirmation message.
      b. Options to confirm or cancel the deletion of the CVE record.
      c. If confirmed, permanently removes the CVE record from the data entries.

## Getting Started

#### Follow these instructions to get a copy of the project up and running on your local machine.
### To run this project locally, follow these steps:

#### Step-1 : Clone the repository to your local machine using the following command:
```
git clone https://github.com/Pjha72/SecOps-Solution-Recruitment---Assignment.git
```

#### Step-2 : Navigate to the project directory:
```
cd SecOps-Solution-Recruitment---Assignment
```

#### Step-3 : Install the project dependencies:
```
npm install
```
#### Step-4 : Start the development server:
```
npm start
```
#### This will launch the application in your default browser at `http://localhost:3000`.

# Technologies Used

### The following technologies and libraries were used in the development of this project:
#### 1. `Create React App`: A popular toolchain for creating React applications.

#### 2. `Favicon Generator`: A web-based tool for generating favicons for your website.

#### 3. `Tailwind CSS`: A utility-first CSS framework that provides a set of pre-defined classes for building responsive user interfaces.

#### 4. `React Router`: A powerful routing library for React applications.

#### 5. `Tailwind CSS Forms`: A plugin for Tailwind CSS that adds pre-styled form elements.

#### 6. `Firebase and Firebase Authentication`: A cloud-based platform for building web and mobile applications, with a focus on authentication and data storage.

#### 7. `React Toastify`: A popular library for displaying toast notifications in React applications.

#### 8. `Google OAuth`: Integration with Google Sign-In for Firebase authentication.

# Contributing
#### Contributions to this project are welcome. If you find any issues or have any suggestions, please open an issue or submit a pull request.

# License
#### This project is licensed under the MIT License. Feel free to use and modify the code as per your requirements.

# Disclaimer
#### This application is for demonstration purposes only and does not provide real estate services. The content and data used in this application are fictional and should not be considered as accurate or reliable information for real estate transactions.

# References

#### create-react-app
`https://legacy.reactjs.org/docs/create-a-new-react-app.html`

#### Favicon Generator

`https://favicon.io/favicon-generator/`

#### Tailwind css 

`https://tailwindcss.com/docs/guides/create-react-app`

#### React Router

`https://reactrouter.com/en/main/routers/picking-a-router`

#### Tailwind CSS Forms

`https://github.com/tailwindlabs/tailwindcss-forms`

#### Firebase

`https://firebase.google.com/`
`https://firebase.google.com/docs/auth`

#### React Tostify

`https://www.npmjs.com/package/react-toastify`

#### Google OAuth

`https://firebase.google.com/docs/auth/web/google-signin`

#### firebase image upload to cloud storage

`https://firebase.google.com/docs/storage/web/upload-files`

### React Moment 

`https://www.npmjs.com/package/react-moment`

### Swiper

`https://swiperjs.com/`

### React - Leaflet

`https://react-leaflet.js.org/`

### leaflet

`https://leafletjs.com/download.html`




