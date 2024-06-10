# React-CRUD-Mini-Project
![image](https://github.com/evyatarevi/React-CRUD-Mini-Project/assets/126551023/9d92d67c-eef6-48c2-a48d-da4e29677539)

## Introduction

This project is a React-based CRUD (Create, Read, Update, Delete) application aimed at improving the learning process by monitoring the topics studied during a course. Each student can access the topics they have studied and mark which topics they have already completed and know well, and which topics they have not yet studied and remain in the status of "not yet done." We hope that such follow-up will help in progressing and improving the understanding and pace of study.

### Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-crud-mini-project.git
   cd react-crud-mini-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

### Instructions

#### HTTP Methods with Axios

1. Install Axios as a dependency:
   ```bash
   npm install axios
   ```
2. Create an `api.js` file to set up Axios with a base URL for the mock API:
   ```javascript
   import axios from 'axios';

   const api = axios.create({
     baseURL: 'https://your-mock-api-url.com',
   });

   export default api;
   ```

#### Mock API

1. Get familiar with a mock API service (e.g., [json-server](https://github.com/typicode/json-server), [mocki.io](https://mocki.io/)).
2. Create some random data in your mock API user interface.

   API ENDPOINT URL :
   https://6662187f63e6a0189fecb7ce.mockapi.io/

   
  ![image](https://github.com/evyatarevi/React-CRUD-Mini-Project/assets/126551023/c8571f25-5fab-4099-be66-1ff277f7dc02)



 The Users info:

[
  {
    "name": "Shaun Jerde",
    "userName": "Virginia_Weimann",
    "password": "oK8BX7QadP5aoi9",
    "todo": "stables",
    "done": "vainly",
    "id": "1"
  },
  {
    "name": "Terrell Bode",
    "userName": "Ralph57",
    "password": "xdqdhPx6ZJQlW_f",
    "todo": "interface",
    "done": "Shoes",
    "id": "2"
  },
  {
    "name": "Ms. Karl Schoen",
    "userName": "Reanna51",
    "password": "ya1nDS_nqbbaxX2",
    "todo": "embrace",
    "done": "second",
    "id": "3"
  },
  {
    "name": "Faye Mraz",
    "userName": "Stan.OKon",
    "password": "kO9JVBY0mx8umJm",
    "todo": "Managed",
    "done": "Berkshire",
    "id": "4"
  },
  {
    "name": "Inez Mayer",
    "userName": "Henry_Schmidt18",
    "password": "5GzoKDI8_GDffC1",
    "todo": "methodologies",
    "done": "Compatible",
    "id": "5"
  }
]

![image](https://github.com/evyatarevi/React-CRUD-Mini-Project/assets/126551023/0a93bc41-5f3b-40c4-bb09-d219e62629b2)

![image](https://github.com/evyatarevi/React-CRUD-Mini-Project/assets/126551023/9fce68b5-d3bd-4020-8c47-19dc2daa5d81)



### App Breakdown

#### Components

1. Determine the necessary components for the app (e.g., TopicList, TopicForm, TopicDetail).
2. Identify parent and child components.
3. Reuse components wherever possible.

#### State Management

1. Use React's `useState` to manage component state.
2. Determine which components should hold specific pieces of state.

### CRUD Operations

#### Read

1. Fetch data from the mock API when the component mounts.
2. Store the data in the component state.
3. Display the data in the DOM.

#### Create

1. Create a form to input the topic name and status.
2. Validate the form:
   - Name must be descriptive.
   - Status should be either "completed" or "not yet done".
3. Save the topic to the state and the database.
4. Disable the submit button when a request is in progress.

#### Update

1. Implement a method to update a specific topic in the state and the database.

#### Delete

1. Implement a method to delete a specific topic from the state and the database.

### Loading Spinner

1. Implement a loading spinner that displays during AJAX requests.

### React Router

1. Set up React Router to navigate between different components of the application.

# Contributors

- **Evyatar Ifrach**
- **Reut Megidish**
- **Zohar Laskov**
- **Daniela Armoni Alon**

We are students currently learning at the Appleseeds organization and we decided to improve the learning process by monitoring the topics studied during the course. Each student will be able to access the topics they have studied and mark which topics they have already completed and know well, and which topics they have not yet studied and remain in the status of "not yet done." We hope that such follow-up will help you to progress and will help in improving the understanding and pace of study. Good luck!



# Conclusion

This project aims to enhance the learning experience by allowing students to track their progress in understanding different topics. By marking completed and pending topics, students can better manage their learning process and improve their study efficiency. We hope this tool serves you well in your educational journey. Good luck!
