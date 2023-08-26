# BTG React Take Home Test

BTG React Front End Take Home Test

## The test

Create a react app that consumes data from https://randomuser.me. The app should fulfill the following requirments:

## Requirements

- Make the api return 125 users.
- Have a page that has cards for each user with their:
  - Profile Picture
  - Name
  - DOB
  - Gender
- When a user clicks on one of these cards a modal should appear with all the extra information provided by the api such as address, age, etc.
- The page must be resposive sizing to different screens including mobile.
- Make use of loading states, error states, etc
- The page must look cohesive and well designed
- Submit a small write up with the following:
  - How you designed the app and your thought process
  - Design decisions made and why

## Submit Response

- Create a github Repo and share it with us.
- Include this README with the project.

## How I Designed the App and My Thought Process

- Initial Planning: Before diving into the code, I took a moment to understand the requirements. The primary goal was to fetch and display user data in a user-friendly and responsive manner. I visualized the UI/UX design with the user flow in my mind, then wrote out a todo list.
- Data First: Since the API response can't be modified, I prioritized fetching and displaying data. Handling loading state and simple error were addressed. Then, I can focus on my frontend development. Also, I used to Postman to test out and figure how the response of the api.
- User Experience: I wanted the user to have a seamless experience. This meant not overwhelming them with too much information at once. The idea of cards for basic information and modals for detailed data made sense.

## My Design Decisions Made

- Choosing MUI(Material-UI) for several reasons:

  - Cohesiveness and Component Richness: MUI has various pre-built components, and they are very straightforward and clean to develop. Due to the urgency of the time, this allowed me to focus more on improving the user interface.
  - Single Responsibility Principle(SRP) from SOLID: SRP plays a pivotal role in my approach to component design. When a component has too many responsibilities, it becomes challenging to maintain focus and ensure each task is executed effectively. By adhering to SRP, I can decompose complex components into more atomic, manageable pieces, ensuring each component has a clear and singular purpose. This not only simplifies development but also enhances maintainability and readability.
  - Responsiveness: MUI is designed with a mobile-first approach. This ensured that the app would look good on all devices, from mobile to desktop, without extensive custom styling, especially with the time constrain on this project.

- Modals for Detailed Information: To keep the main interface clean and user-friendly, I decided to use modals (MUI Modal) to display detailed user information. This approach ensures that users aren't overwhelmed with data but can access it when they're interested.

- Using React Query: I've consistently heard positive feedback about React Query, particularly its capabilities in asynchronous data fetching, robust error handling, and an enhanced developer experience. Whenever I embark on a new project, I'm always keen to integrate and explore new technologies. The fact that React Query has built-in TypeScript support further increased my interest.

- My decision to use TypeScript was two reasons. Firstly, it had been some time since I last used it, and I wanted to refresh my skills. More importantly, TypeScript offers a structured way to define and manage props and data structures, ensuring clarity and predictability in the codebase.
