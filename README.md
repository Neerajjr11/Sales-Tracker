### VIT-24HR-HACKATHON
This repository is for the project for the 24-Hour Hackathon conducted by QUBIT,Microsoft Innovations Club and E-Cell.

## Table of Contents
- [Getting Started](#getting-started)
- [Problem Statment](#problem-statement)
- [About the Problem](#about-the-problem)
- [Components](#components)
 - [Prototype](#prototype)
    - [Interactive Routing System](#interactive-routing-system)
    - [Sales Chatbot](#sales-chatbot)
    - [Web Application](#web-application)
- [Flow Diagram](#flow-diagram)
- [Submissions](#submissions)
- [Authors](#authors)

## Getting Started
```bash
GMAP_Scheduling_Routing
   |-- Main
   |   |-- .DS_Store
   |   |-- .gitignore
   |   |-- index.js
   |   |-- package-lock.json
   |   |-- package.json
   |   |-- utils.js
   |-- Readme.md
   |-- gmap
   |   |-- .gitignore
   |   |-- README.md
   |   |-- package-lock.json
   |   |-- package.json
   |   |-- public
   |   |   |-- favicon.png
   |   |   |-- index.html
   |   |-- src
   |   |   |-- actions
   |   |   |   |-- index.js
   |   |   |   |-- types.js
   |   |   |-- components
   |   |   |   |-- App.js
   |   |   |   |-- app.css
   |   |   |   |-- mapbox
   |   |   |   |   |-- Map.css
   |   |   |   |   |-- Map.js
   |   |   |-- icons
   |   |   |   |-- closeIcon.png
   |   |   |   |-- onlineIcon.png
   |   |   |-- index.js
   |   |   |-- reducers
   |   |   |   |-- authReducer.js
   |   |   |   |-- index.js
   |   |   |-- setupProxy.js
LICENSE
README.md
Sales Chatbot
   |-- README.md
   |-- images
   |   |-- sensim.png
   |   |-- senteval10.png
   |-- src
   |   |-- .idea
   |   |   |-- .gitignore
   |   |   |-- inspectionProfiles
   |   |   |   |-- profiles_settings.xml
   |   |   |-- misc.xml
   |   |   |-- modules.xml
   |   |   |-- src.iml
   |   |   |-- vcs.xml
   |   |-- __pycache__
   |   |   |-- faqengine.cpython-36.pyc
   |   |   |-- faqengine.cpython-39.pyc
   |   |-- app.py
   |   |-- data
   |   |   |-- BankFAQs.csv
   |   |   |-- BoulderCity FAQs.xlsx
   |   |   |-- GST FAQs 1.csv
   |   |   |-- GST FAQs 2.csv
   |   |   |-- GST FAQs 3.csv
   |   |   |-- GSTFAQs.csv
   |   |   |-- Greetings.csv
   |   |   |-- dataset.csv
   |   |   |-- dataset.csv.xls
   |   |   |-- gst_scrapper.py
   |   |   |-- quora_duplicate_train_small.zip
   |   |   |-- sectoral-faq.csv
   |   |-- environment.yml
   |   |-- faqengine.py
   |   |-- sentsimeval.py
   |   |-- static
   |   |   |-- css
   |   |   |   |-- chat_interface.css
   |   |   |   |-- style.css
   |   |   |   |-- style.css~
   |   |   |   |-- temporary.css
   |   |   |-- js
   |   |   |   |-- bind.js
   |   |   |   |-- jquery.timeago.js
   |   |-- templates
   |   |   |-- base.html
   |   |   |-- home.html
   |   |-- vectorizers
   |   |   |-- __init__.py
   |   |   |-- __pycache__
   |   |   |   |-- __init__.cpython-36.pyc
   |   |   |   |-- __init__.cpython-39.pyc
   |   |   |   |-- bertgenerator.cpython-36.pyc
   |   |   |   |-- doc2vecgenerator.cpython-36.pyc
   |   |   |   |-- doc2vecgenerator.cpython-39.pyc
   |   |   |   |-- factory.cpython-36.pyc
   |   |   |   |-- factory.cpython-39.pyc
   |   |   |   |-- spacysent2vecgenerator.cpython-36.pyc
   |   |   |   |-- spacysent2vecgenerator.cpython-39.pyc
   |   |   |   |-- tfidfvectorgenerator.cpython-36.pyc
   |   |   |   |-- tfidfvectorgenerator.cpython-39.pyc
   |   |   |-- bertgenerator.py
   |   |   |-- doc2vecgenerator.py
   |   |   |-- factory.py
   |   |   |-- models
   |   |   |   |-- tfidf.pkl
   |   |   |-- spacysent2vecgenerator.py
   |   |   |-- tfidfvectorgenerator.py
Server
   |-- config
   |   |-- db.js
   |-- controllers
   |   |-- chatBotController.js
   |   |-- cookieCheckerController.js
   |   |-- taksController.js
   |   |-- userController.js
   |-- middleware
   |   |-- authMiddleware.js
   |   |-- cookieVerify.js
   |   |-- errorMiddleware.js
   |-- models
   |   |-- tasksModel.js
   |   |-- userModel.js
   |-- routes
   |   |-- chatBotRoutes.js
   |   |-- taskRoute.js
   |   |-- userRoutes.js
   |-- server.js
   |-- utils
   |   |-- generateToken.js
client
   |-- .gitignore
   |-- README.md
   |-- package-lock.json
   |-- package.json
   |-- public
   |   |-- favicon.ico
   |   |-- index.html
   |   |-- logo192.png
   |   |-- logo512.png
   |   |-- manifest.json
   |   |-- robots.txt
   |-- src
   |   |-- App.css
   |   |-- App.js
   |   |-- Morganite-Bold.woff
   |   |-- actions
   |   |   |-- orderAction.js
   |   |   |-- userActions.js
   |   |-- assets
   |   |   |-- KRETRA.svg
   |   |   |-- Slider.css
   |   |   |-- SliderData.js
   |   |   |-- avator.svg
   |   |   |-- avatorDown.svg
   |   |   |-- big.svg
   |   |   |-- cart.svg
   |   |   |-- cartBackground.svg
   |   |   |-- dashArrow.svg
   |   |   |-- dashboardBackground.svg
   |   |   |-- downArrow.svg
   |   |   |-- dropdown.svg
   |   |   |-- left.svg
   |   |   |-- navbar.css
   |   |   |-- ratingstart.svg
   |   |   |-- recomHero.svg
   |   |   |-- right.svg
   |   |   |-- signIn.svg
   |   |   |-- small.svg
   |   |   |-- tyre.png
   |   |   |-- tyre.svg
   |   |-- bootstrap.min (2).css
   |   |-- components
   |   |   |-- ButtonMailto.js
   |   |   |-- Footer.js
   |   |   |-- FormContainer.js
   |   |   |-- Header.js
   |   |   |-- Images
   |   |   |   |-- Group.svg
   |   |   |   |-- bg.svg
   |   |   |   |-- logo.svg
   |   |   |   |-- project_3.svg
   |   |   |   |-- project_4.svg
   |   |   |   |-- project_5.svg
   |   |   |   |-- project_6.svg
   |   |   |   |-- project_7.svg
   |   |   |   |-- project_8.svg
   |   |   |-- Loader.js
   |   |   |-- Message.js
   |   |   |-- SalesPersonScreen.js
   |   |   |-- SearchBox.js
   |   |   |-- Slider.js
   |   |   |-- button.css
   |   |   |-- button.js
   |   |   |-- components.css
   |   |-- constants
   |   |   |-- userConstants.js
   |   |-- index.css
   |   |-- index.js
   |   |-- products.js
   |   |-- reducers
   |   |   |-- userReducers.js
   |   |-- screens
   |   |   |-- DashboardScreen.js
   |   |   |-- LandingHomeScreen.css
   |   |   |-- LoginScreen.js
   |   |   |-- MainHome.js
   |   |   |-- ProfileScreen.js
   |   |   |-- RecomScreen.js
   |   |   |-- RegisterScreen.js
   |   |   |-- Screen.css
   |   |   |-- TasksList.js
   |   |   |-- USerEditScreen.js
   |   |   |-- UserInfo.js
   |   |   |-- UserListScreen.js
   |   |-- store.js
   |   |-- tailwind.css
   |   |-- utils
   |   |   |-- Alert.js
package-lock.json
package.json


```

## Problem Statement:
Track Field Employee Movement
* Design a Field Sales tracker to help optimize on cost and travel route.

## About the Problem
* Fintech companies have agents on the field to visit customers for servicing or adding new customers to their portfolio.
* The Field Agents have to be on the field all day long visiting customers, so can use this data to optimize his travel route

## Components
* Design a system by which the company can track the movement of the Field Agent.
* The System should be mobile compatible, picks up the geo coordinates of the device at periodic intervals.
* System should provide a route map with the distance covered everyday.
* For the purpose of the hackathon, you can assume that the field sales personnel travels to five different locations in a day.
* He spends x amount of time in each location with customer discussing business.
* The output required is distance travelled, and time spent in each of the locations

## Prototype
It is divided into three modules
* Interactive Routing System
* Sales Chatbot
* Web Application

## Interactive Routing System
* The Interactive Routing System consists of an Interactive Map
![image](https://user-images.githubusercontent.com/50861092/189026822-c77b45e8-c4ca-48da-aa86-cf2f6a0d3a54.png)

* It also Contains the Optimization of Time and Cost using Bitmasking Recrusive algorithm
![image](https://user-images.githubusercontent.com/50861092/189025745-e8bb463d-009b-4dfb-b673-b689aa3ead4b.png)

## Sales Chatbot
* Chatbot Built to specifically help assist the SalesPerson using various vectorization algorithms
![image](https://user-images.githubusercontent.com/50861092/189040252-2e0f9b6b-0e82-4e82-8f33-00283eb96ad2.png)
![image](https://user-images.githubusercontent.com/50861092/189040276-e1833e87-ced3-4876-b35b-d07f20fb978e.png)


## Web Application
* Built the FrontEnd using React
![image](https://user-images.githubusercontent.com/50861092/189040710-6a089e4b-70a8-48c1-8eb8-3b5c3ea8c203.png)
![image](https://user-images.githubusercontent.com/50861092/189040728-d3fe9e1e-aed9-41bb-8084-3ac96ba3f596.png)
* Built the BackEnd using Node.js and Express.js
![image](https://user-images.githubusercontent.com/50861092/189042375-c35ebf58-d6ea-40b2-ab85-85d22f3d4217.png)
![image](https://user-images.githubusercontent.com/50861092/189042393-e0a9d487-6fe2-455d-953e-d8219c86c7be.png)
![image](https://user-images.githubusercontent.com/50861092/189042419-14433c1a-ebe3-4cb3-9e61-012bb003d7a6.png)
![image](https://user-images.githubusercontent.com/50861092/189042462-e6d3a046-93f6-434f-9f36-3e2895cfa8c6.png)

## Flow Diagram
![image](https://user-images.githubusercontent.com/50861092/189180814-0b32c8ae-70bf-48fa-9536-4b7cec8ee8c9.png)


## Submissions
* ## Presentation Link: [Link](https://drive.google.com/file/d/1sGqe6VurcTKODv2CYpoFMEtWunKqbrOj/view?usp=sharing)

## Deployment

This section is completely optional. Add additional notes about how to deploy this on a live system


## Authors

#### Neeraj J Manurkar
* [GitHub](https://github.com/Neerajjr11)
* [LinkedIn](https://www.linkedin.com/in/neeraj-j-manurkar-64372b212/)

#### Helly Dhamesha
* [GitHub](https://github.com/helly-22)
* [LinkedIn](https://www.linkedin.com/in/helly-dhamesha-9956621ba/)


#### Mohit Sangwan
* [GitHub](https://github.com/hellomohitsangwan)
* [LinkedIn](https://www.linkedin.com/in/mohit-sangwan16/)


#### Mugdha Kondhare
* [GitHub](https://github.com/Mugdha27)
* [LinkedIn](https://www.linkedin.com/in/mugdha-kondhare-2b96141b7/)

