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

   https://6666d3eaa2f8516ff7a51f0f.mockapi.io/
   
   
![image](https://github.com/evyatarevi/React-CRUD-Mini-Project/assets/126551023/def64d71-4653-424f-8c47-c60f85883fbd)

 The Users info:

[
  {
    "name": "Anne Wunsch",
    "userName": "Edmund79",
    "password": "gTlfhv3lN0m303l",
    "todo": [],
    "done": [],
    "id": "1"
  },
  {
    "name": "Pete Johnston",
    "userName": "Emilia57",
    "password": "QgDKDmE9wiytuxu",
    "todo": [],
    "done": [],
    "id": "2"
  },
  {
    "name": "Herman Koch",
    "userName": "Maximillian_Tromp",
    "password": "rKP9sRR2QUSEYlz",
    "todo": [],
    "done": [],
    "id": "3"
  },
  {
    "name": "Louis Dare",
    "userName": "Mohamed_Anderson",
    "password": "ceJzlce3zzteDTX",
    "todo": [],
    "done": [],
    "id": "4"
  },
  {
    "name": "Veronica Hermiston",
    "userName": "Cynthia.Moen",
    "password": "Z4BcLwpF6wKqOii",
    "todo": [],
    "done": [],
    "id": "5"
  }
]

![image](https://github.com/evyatarevi/React-CRUD-Mini-Project/assets/126551023/c721c1d2-351c-4a3e-9f52-60d71a9dec3c)


![image](https://github.com/evyatarevi/React-CRUD-Mini-Project/assets/126551023/635401ee-7122-473a-b61c-739b1fdc1df2)




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
