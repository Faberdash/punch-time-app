This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# To run this project

1. Clone this repo using the repo url
2. cd to the folder installed on your machine
3. Open a CLI terminal from within the folder, and first run the command "npm install"
4. Then run the command "npm run dev"

This should start up both the mock backend API server provided by the json-server package, as well as the React dev server in a new tab on your browser.

# Important Note:
This App consists of a single form where the employee inputs a report of his/her work hours for the day. The app saves this data to its mock backend, and displays the past 7 work days after fetching their data.

Inside the cards where each daily report is displayed, a Green plus sign or a Red minus sign indicates whether or not the employee has fulfilled the expected working hours for the day, respectively.

All overtime done by the employee in the past 7 days is added and displayed in the stats section above the cards. A negative signs indicates that the employee has not fulfilled his core hours and need to work overtime to compensate. 
