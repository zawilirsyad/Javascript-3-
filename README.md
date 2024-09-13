# JavaScript Asynchronous Programming and Promises

## Overview

This project includes various exercises related to JavaScript asynchronous programming. The tasks focus on the use of `Promise`, `then-catch`, `try-catch`, callback functions, and `fetch` for interacting with APIs. Below are the details for each task.

---

## Task 1: Handling Asynchronous Code with Promises

You are required to create two variations of a program to check for working days using both:
1. **`then-catch`** pattern
2. **`try-catch`** with `async/await`

### Asynchronous Function

```javascript
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => item === day);
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000);
    });
};
```
### Explanation:
then-catch
- then: This method is called when the promise is resolved successfully (i.e., the day is a working day). It will log the result to the console.
- catch: This method is called when the promise is rejected (i.e., the day is not a working day). It will log the error message to the console.

try-catch
- try: The code inside the try block attempts to resolve the promise using await. If successful, it logs the result.
- catch: If the promise is rejected, the catch block handles the error and logs the error message.

## Task 2: Callback Function to Display All Months
Create a program using a callback function that displays all months using the map method.

### Explanation:
-getMonth: This function simulates an asynchronous operation to fetch month data. If successful, it passes the data to the callback function. If there’s an error, it calls the callback with an error object.
-showMonth: This callback function displays all months using the map() method if no error occurred. Otherwise, it logs the error message.

## Task 3: Create Two Programs Using Promises

- Check student name data
- Check the Nasi Padang menu data

## Task 4: Fetch Data from REST API
Using the fetch method, retrieve and display all user names from the following API:
https://jsonplaceholder.typicode.com/users

### Explanation:
fetch: This method is used to retrieve data from the API. It returns a promise that resolves into a response.
response.json(): This method parses the response data into JSON format.
data.map(): The .map() method is used to extract the name property from each user object in the API response.
Debugger: You can use the Chrome browser's built-in debugger to view the network requests and logs in the console by pressing F12.

## How to Run the Program
-Clone or download the repository.
-Open each task file in a text editor.
-To run the code, use a browser's console or a Node.js environment.
