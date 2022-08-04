# Online Booking
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). \

## Running
In the project directory, you can run: \
`npm install` \
`npm start`\
If the browser does not open automatically, just go ahead and open 
[http://localhost:3000](http://localhost:3000) to view it in your browser.

## Documentation
There's both a dark and light theme, switchable on the click of an icon on the 
nav. Still, the aesthetics could be seriously be improved.

There's essentially 3 steps on the booking process:
#### 1) TreatmentSelection: 
- This is the component that the user first sees, it's a radio button.
- You start by selecting a treatment. On selecting one, the components of the 
next step will be displayed. 
- You *can* change your selection, and it will affect the next step accordingly.

#### 2) SlotSelection:
- **SelectPractitioner:** checkbox that allows you to filter the practitioners
that perform the selected treatment. This filtering will affect the SelectHour 
component.
- **SelectDate:** calendar that allows you to select the date. Selecting a 
different weekday will show different results on SelectHour. \
*Note that I'm not using any databases, just a simple JS object as data, so the 
variation is very limited. I opted to give them fixed time slots for fixed weekdays.
This could be much more fluid if using databases, but for this demonstration it 
should be enough.*
- **SelectHour:** table with the possible booking slots. Selecting one will take
you to the final form.

*There's plenty of packages of schedulers for react, and it would probably have 
sped up my work with the SelectHour component, but I think that would compromise
the goal of this exercise. I only used the calendar package, all the rest I did
from scratch.* 


#### 3) FinalForm:
