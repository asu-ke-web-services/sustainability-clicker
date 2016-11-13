Tree increments by 1 every 3 seconds
Car increments by 2 every 5 seconds
Solar increments by 4 every 9 seconds
There is only one timer variable. It adds carbons when a module operation is satisfied (e.g. timer % 3 == 0)

The code checks whether there are more/less carbons to enable/disable buttons on clicking clicker, clicking buttons, and inside the timer function. 
That is because if the code is only in the timer function, the program has to wait 1 second before it checks again to enable/disable the buttons.
I tried simply only adding the code in the main, but the program has to check the buttons constantly. 

Also you might notice that when you click on a button, for example Solar, it may add the 4 carbons in the less than 9 seconds. 
That is because the timer is constantly running, so you may have clikced on the button when the time was near
a module of 9 (e.g. 15 seconds, only 3 seconds from 18 % 9 == 0 --> increment). For right now, 
the only solution I can think of is if we have separate timers like before.
