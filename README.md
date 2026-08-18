# WEB103 Prework - *CreatorVerse*

Submitted by: **Duterron Piadony**

About this web app: **CreatorVerse is a React-based CRUD application that allows users to discover, add, edit, and delete content creators stored in a Supabase database. Each creator has their own details page with their name, channel URL, description, and image. The application uses Supabase for data storage and features a responsive, futuristic interface designed for desktop, tablet, and mobile devices.**

Time spent: **46** hours

## Required Features

The following required functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [ ] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following optional features are implemented:

- [ ] PicoCSS is used to style HTML elements
- [x] **The content creator items are displayed in a creative format, like cards instead of a list**
- [x] **An image of each content creator is shown on their content creator card**

The following additional features are implemented:

- [x] **Responsive design for desktop, tablet, and mobile screen sizes**
- [x] **Custom futuristic/cyber visual design with a dark theme and neon accents**
- [x] **Loading spinner displayed while data is being fetched**
- [x] **Toast notifications for successful and failed actions**
- [x] **Form validation to prevent empty creator submissions**
- [x] **Session storage caching to reduce unnecessary data requests**
- [x] **Responsive back navigation for mobile and tablet users**
- [x] **Application information/help interface accessible from the Hero section**

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./public/walkthrough/creatorverse.gif' title='Video Walkthrough' alt='Video Walkthrough' />

GIF created with ScreenToGif.

## Notes

One of the main challenges of this project was building the application while keeping the React component structure organized and reusable. The project uses reusable components such as cards, containers, loading states, and notifications.

Another challenge was integrating Supabase for storing and retrieving creator information while handling loading and error states.

The application uses the Supabase client for database operations with the async/await pattern. The project does not directly use Axios or the native fetch() API for its data requests.

The application was also designed to be responsive across desktop, tablet, and mobile screen sizes. Additional attention was given to user experience through form validation, loading indicators, toast notifications, caching, and responsive navigation.

## License

Copyright 2026 Duterron Piadony

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.