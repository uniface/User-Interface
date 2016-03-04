# U Tunes #

U Tunes is an exercise in windows GUI to demonstrate features of the Uniface widgets. Like the uOutlook sample this takes on the visuals of Apple iTunes.
It is not meant to be used as-is but is simply as an example of what can be created with Uniface GUI.
There are however embedded within the sample examples of how things can be made to work. These include:

 * Accessing the iTunes library on your PC by extracting the registry path and manipulating contents via Uniface struct
 * Replacing the standard title bar and replacing with a custom alternative.
 * Interfacing with 3GL to implement window frame drag-n-drop
 * Enbedded HTML grid
 * Speed Search
 * Windows API calls
 * Non-square windows.
 * pop-ups and other frame alternatives

## Dependencies ##

UTunes has been written and tested with:

 * Uniface 9.6.07
 * SQLite
 
 There is a dependency that assumes that you have an installed and configured version of Apple iTunes and have some music contained within.
 The example makes use of the microsoft media player ocx control that is required for operation should you wish to play the displayed music.
 The replacement form title is supported by a custom dll "uniwinhook.dll".

The HTML embedded grid makes use of the freee version of jqgrid  https://github.com/free-jqgrid/jqGrid
This is a forked MIT/GPL 'free' licensed version of the original grid by Tony Tomov. A newer version has since been commercialized and is available via guriddo.net.

## Setup ##

This project can be downloaded and setup standalone.

### Setup U Tunes as a standalone project ###
These instructions allow you to create a new stand alone project on your local machine.

 * For these steps you'll need the Project Setup Tool. Follow the instructions here https://github.com/uniface/Development-Tooling/tree/master/uniface-project-setup-tool to setup this tool before continuing
 * Clone the utunes repository onto your local machine. For these steps we'll assume it's been cloned into C:\Projects\uoutlook
 * Open a command prompt in the root of the project and type "projectsetup" to invoke the Project Setup Tool
 * Work through the setup process checking the details picked up by the setup tool make sense. Ignore referencies to userid and password they are not used.
 * When complete click of the UTunes link
 
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

## Acknowledgements ##
* Daniel Iseli  UniWinHook  dll
