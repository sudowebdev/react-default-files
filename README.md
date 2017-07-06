# React environment setup

### How to use this repo to initialise your React App?

Run the following command on the terminal:

	git clone https://github.com/sudowebdev/react-default-files.git

After cloning it in your local directory, run:

	npm install

The environment is all set-up. You can now start your React Project by writing code in **src/app.jsx** file.  
Now run the following command to see your default react app on **localhost:8080**  

	npm run dev

	
Some basic information about the default project structure:  
1. All the React code goes inside the **src** directory as this is mentioned as the **APP_DIR** in **webpack.config.js**.  
2. The main React code will go inside **src/app.jsx** as this is mentioned as the **entry** file for webpack.  
3. The output gets served from **static** directory as this is mentioned as the **BUILD_DIR** in **webpack.config.js**.  
4. Run **npm run dev** to run the script that is mentioned inside the **scripts** field in **package.json**.
