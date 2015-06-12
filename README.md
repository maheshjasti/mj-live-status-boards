# mj-live-status-boards
##Live status boards library


Live status board(LSB) is a component that displays your live updates in a nice way. Especially if you are trying to show live scores/numbers that can dynamically increase or decrease, then LSB can understand what part of the digits to scroll and update the display. This works good for short messages which frequently changes and where you need to scroll up this new message in a nice way.


## How to use?

1. Download ***mj-live-status-boards.js*** from js folder and ***mj-live-status-boards-styles.css*** from css folder. 

2. Ref mj-live-status-boards.js in your page as an external js.

3. Either link mj-live-status-boards-styles.css to your page or copy and paste the given css classes to an existing css.

4. Call *updateLiveStatusBoardMessage* and *updateLiveStatusBoardScore* methods based on your need, as shown below.

    //Call mj-live-status-boards js library to update scores
    
    updateLiveStatusBoardScore("caseCounterBoard1",rndm);	
	
	
    //Call mj-live-status-boards js library to update msgs
  
    updateLiveStatusBoardMessage("caseStatusBoard1","Resolved","greenColor");}
    
5. Follow given Examples.html to follow fully working boards.

## How to run Examples?

Download given Examples.html, js and css folders. Directly double-click Examples.html file or drag it into any browser. Thats it, you can see the sample live boards.

## Screen captures
![GitHub Logo](/images/Example-1-Screen-1.PNG)

![GitHub Logo](/images/Example-1-Screen-2.PNG)


## !Hope this helps you in adding a live updates board easily.
