# Expense-Manager
ReactJS and Redux(state management js librar) web app deployed on Heroku. We use Firebase for real-time data storage and user authentication. React-Routing is used for client-side routing. We use Webpack as an asset bundler.


## Notes

### Heroku
Heroku is application deployment platform (similar to AWS Beanstalk, DigitalOcean).

[Use the Heroku Reference](https://devcenter.heroku.com/categories/reference#command-line)

#### First install the Heroku CLI (command line interface)

#### Authenticate with Heroku to know which account it is associated with

$heroku login

#heroku <app name argument>

$heroku react-expense-manager


#Add remote

#Adds a git remote to your local repo: origin and master

$heroku git:remote -a react-expense-manager


#Check

$git remote -v


#set buildpack

$heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs

#note: heroku-postbuild can place gulp or grunt


**Deploy by pushing to heroku remote**

#heroku generates: https://react-expense-manager.herokuapp.com/ | https://git.heroku.com/react-expense-manager.git

$git push heroku master  


#NOTE: heroku expects package.json in root of project, 

#in our case it is in the next folder, so we use this git command to push to heroku:

**git subtree push --prefix expense-manager-app heroku master**


#Open your app

$heroku open


#### Setup Heroku environment variables

$heroku config 


(Space separated variables)

$heroku config:set FIREBASE_API_KEY=yourkey FIREBASE_AUTH_DOMAIN=expense-manager-something.firebaseapp.com FIREBASE_DATABASE_URL=yourdburl FIREBASE_PROJECT_ID=yourprojid FIREBASE_STORAGE_BUCKET=yourbuvketurl FIREBASE_MESSAGING_SENDER_ID=yoursenderId


### Firebase
#### In your Firebase Console for authorized domains:
Localhost (default)

#Setup heroku

Add the heroku url as an authorized domain to be able to authenticate from the heroku app.


### Database Environment Configuration

You must provide your environment variables in the root directory, where the package.json file is.

provide two files for testing and development (you should have both environment setup in your Firebase Console):

**.env.tes** and **.env.development**

inside  the files include your variables:

FIREBASE_API_KEY=yourapikey

FIREBASE_AUTH_DOMAIN=domainurl

FIREBASE_DATABASE_URL=dburl

FIREBASE_PROJECT_ID=projectid

FIREBASE_STORAGE_BUCKET=storagebucket

FIREBASE_MESSAGING_SENDER_ID=senderid

