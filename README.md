Welcome to my elevator application!

To run the project you need connection to database, for which I'm using XAMPP. Name your database `elevator`. Then run ElevatorSystemApplication from [https://github.com/ZuzannaMisztal/elevatorbackend](https://github.com/ZuzannaMisztal/elevatorbackend). After that, in frontend project directory run `npm start` and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Initialize Elevators

In the text field enter integer specifying number of elevators in building. Number should be between 1 and 16 (inclusive). Numbers higher than 16 will initialize 16 elevators. This window will hide after you initialize elevators. You can bring it back by clicking `reset` in top-rigth corner.

### Elevators

Representation of elevators. Every elevator has unique identification called `id`. `Current` specifies number of floor on which the elevator currently is. `Targets` lists elevator's destinations. When current elevator's floor is same as it's first target, it means that the elevator's door is open.

### Step

You can click `step` button to execute one step of elevators' system simulation. There's an assumption that covering the distance between two consecutive floors takes the same amount of time as opening and closing door at selected target.

### Pick Me Up

Enter floor number and click `up` or `down`. The best elevator will be picked and the selected floor number will be added to it's targets.

### Add Target

Enter Id of the elevator "you are in" and beneath enter number of floor you would like to arrive. Confirm by clicking `add target` and the destination will be added for selected elevator. The order of elevator's targets will be organised in most optimal manner.

### Update Elevator

Enter crucial data as suggested in text fields and click the `update` button to update floor number and targets of the selected elevator.