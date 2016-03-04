# U Outlook #

U Outlook is an exercise in windows GUI to demonstrate features of the Uniface widgets. Although the implementation takes on the visuals of Outlook 2010 it is not a mail client.
It is not meant to be used as-is simply as an example of what can be created with Uniface GUI.

## Dependencies ##

UOutlook has been written and tested with:

 * Uniface 9.6.07
 * SQLite

## Setup ##

This project can be downloaded and setup standalone.

### Setup U Outlook as a standalone project ###
These instructions allow you to create a new stand alone project on your local machine.

 * For these steps you'll need the Project Setup Tool. Follow the instructions here https://github.com/uniface/Development-Tooling/tree/master/uniface-project-setup-tool to setup this tool before continuing
 * Clone the uOutlook repository onto your local machine. For these steps we'll assume it's been cloned into C:\Projects\uoutlook
 * Open a command prompt in the root of the project and type "projectsetup" to invoke the Project Setup Tool
 * Work through the setup process checking the details picked up by the setup tool make sense. Ignore referencies to userid and password they are not used.
 * When complete click of the Outlook link
 
## Contributing to the project ##

To set up the project for development follow the steps above to create uOutlook as a standalone project. Once complete the only other tool required is the Version Control project, allowing granular exports of source code suitable for use with BitBucket. To set this up follow these steps:

 * Visit https://github.com/uniface/Development-Tooling/tree/master/uniface-version-control and follow the setup instructions to download the Version Control tool
 * Open the IDE and using the Utilities->Import menu import the file FILESYNC_Menu.xml. Assuming you extracted the Version Control tool to C:\\UnifacePackages, this would be found in C:\\UnifacePackages\\VersionControl\\imports
 * Compile the additional menu, which will in turn compile the menu we just imported
 * In the IDE go to Utilities->Preferences->General and tick the check box "Enable Additional Menu"
 * Now that the additional menu is enabled we can go to Utilities->Additional->Settings and using the browse button next to "Uniface Source Directory" select ./src. This points the tool at our source code.
 * Everything is now setup and we can go to Utilities->Additional->Project to verify that everything is setup correctly. Visiting this screen will sync your Uniface repository with the src folder. If it's working correctly then you should see the contents of this folder in the tree view.

## Contributors ##

* George Mockford
