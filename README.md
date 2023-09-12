# Building a new version

Add js as required
Update package version
Run "npm run compile"
Commit and push to github

Login into the repo, click on releases on Right
Create new release
Create new tag (suggest same as package.json version)
Save

Click on Actions, check if latest publish worked.


# Using

Open local dir
do "npm upgrade @cairnswm/cairnsgames-components"
check package.lock version has updated

If new components added, suggest cancel running version
do "npm start"