Contract Management Platform

 #  Overview

The Contract Management Platform is a frontend web application built to demonstrate contract creation, lifecycle management, and dashboard-based tracking using modern frontend practices.
The application allows users to create reusable contract blueprints, generate contracts from those blueprints, and manage contracts through different lifecycle stages.

This project is implemented entirely on the frontend, focusing on clean UI, clear state management, and modular architecture.

 #  Live Demo

The application is deployed and accessible online.

Live URL:
https://contract-management-system-amber.vercel.app/

#  Tech Stack

JavaScript 

React.js

Vite

CSS (custom styling, no UI library)

React Context API (state management)

Local Storage (mock persistence)

#  Setup Instructions

1. Clone the Repository

Open a terminal and run:

git clone <https://github.com/dev-ashishh/contract-management-system.git>
cd contract-management-system

2. Install Dependencies

Run the following command inside the project directory:

npm install

3. Run the Application Locally

Start the development server:

npm run dev

After this, open your browser and navigate to the local URL shown in the terminal (usually http://localhost:5173).

#  Architecture and Design Decisions

Component-Based Architecture
The application is structured using reusable and modular React components (Header, Dashboard, Blueprint Form, Status Timeline, etc.).

Context API for State Management
React Context is used to manage contracts and blueprints globally without introducing external state libraries.

Blueprint-Driven Contract Creation
Contracts are created dynamically from user-defined blueprints, allowing flexible field definitions such as text, date, checkbox, and signature.

Mock Persistence with Local Storage
Data persistence is simulated using browser local storage, as backend integration was not required.

Clear Separation of Concerns
Pages, components, context, and data are separated to keep the codebase clean and maintainable.

#  Functional Requirements Coverage

1. Blueprint Creation

Create reusable contract blueprints

Define custom fields (Text, Date, Checkbox, Signature)

Store blueprint definitions locally

Use existing blueprints to create contracts

2. Contract Creation from Blueprint

Select a blueprint

Auto-generate a contract form based on blueprint fields

Fill and submit contract details

Create a contract instance from the selected blueprint

3. Contract Lifecycle Management

Each contract follows a defined lifecycle:

CREATED

APPROVED

SENT

SIGNED

LOCKED

REVOKED (special case)

Rules implemented:

Contracts move sequentially through lifecycle states

Locked and revoked contracts cannot be modified

Status changes are visually represented

4. Contracts Dashboard

View all contracts in a dashboard table

Group and filter contracts by status

Display key details:

Contract name

Blueprint name

Current status

Creation date

Perform actions:

View contract

Move to next status

Revoke contract

Delete contract (where applicable)

5. Contract View Page

View contract details in a dedicated page

Visual status timeline highlighting current stage

Color-coded status indicators for clarity

UI Guidelines Followed

Clean and minimal interface

Consistent spacing and alignment

Clear visual hierarchy

No external UI frameworks used

Focus on usability and logical flow

#cd  Assumptions and Limitations

Backend is not implemented; data persistence is handled via local storage

Authentication and authorization are not included

No real document signing or file uploads

Data resets if local storage is cleared

Designed primarily for demonstration and evaluation purposes