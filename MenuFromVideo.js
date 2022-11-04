/*•	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
•	Use at least one array.
•	Use at least two classes.
•	Your menu should have the options to create, view, and delete elements.*/
//Single entity
/*class Artwork {
    constructor (title, artist) {
        this.title = 
    }
} //art gallery, art museuem, personal collection , thrift Store

let artwork1 =
class artwork1 = 
Artists>artwork>pieces */
class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    describe() {
        return `${this.name} plays ${this.position}.`;
    }
}


class Team {
    constructor(name) { 
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add an instance of Player. Arguement is not a player: ${player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} players. `;
    }
}


class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions(); /*Top down development approach, Method will return the selecton the user gives
        Shows menu options that the user will select something from.*/
        
        while (selection != 0) { /*Selection variable is used to get user input of what option in the menu has the user selected.
        Also "0" is used for the user to exit */
        switch(selection) {
            case "1" :
            this.createTeam();
            break;
            case "2" :
            this.viewTeam();
            break;
            case "3" :
            this.deleteTeam();
            case "4" :
            this.displayTeams();
            break;
            default: //If user selects anything else selection will be equal to zero.
                selection = 0;
        }
        selection = this.showMainMenuOptions();
        }
        alert("Goodbye!")               //User selected zero meaning they're outside the loop and will exit from it.
    }

    showMainMenuOptions() {
        return prompt(` 
        0) exit
        1) create new team
        2) view team 
        3) delete team
        4) display all teams
        `)     /*Prompt asks the user for some input and what is being returned is the input that comes back from the prompt*/
    }

    showTeamMenuOptions(teamInfo) { //Takes team description and prints out information for it.
        return prompt(`
        0) back
        1) create player
        2) delete player
        ------------------
        ${teamInfo}
        `)
    }


    displayTeams() {
        let teamString = " "; //Create a string
        for (let i = 0; i < this.teams.length; i++) { //Iterate through teams and get list of all the teams that exist in the menu.
            teamString += i + ") " + this.teams[i].name + "\n"; /*Grab team for this iteration and will add a new line for teams to be
             numbered off by an index. */
        }

        alert(teamString); //Will allow user to see all the teams.
    }

    createTeam() {
        let name = prompt("Enter name for new team:"); //Prompts user to give new name for team.
        this.teams.push(new Team(name)); //New team will be pushed to teams array.
    }
    viewTeam() {
        let index = prompt("Enter the index of the team you wish to view:"); //Insert index of team user wants to view.
        if (index > -1 && index < this.teams.length) { //Validating user input to avoid errors.
            this.selectedTeam = this.teams[index]; //Validated index and set team class property to the team user inserted.
            let description = "Team Name:" + this.selectedTeam.name + "\n"; //Description for the team to print out

            for (let i = 0; i < this.selectedTeam.players.length; i++) { //Loop will add description of all the players to the team.
                description += i + ") " + this.selectedTeam.players[i].name
                 + " - " + this.selectedTeam.players[i].position + "\n"; /*Description will include index printed out, array for players
                 for each team which will be iterated, i serves as the specific player for the iteration and their name and position
                 will be printed out all on a new line.*/ //Build list of all team players
            }

            let selection = this.showTeamMenuOptions(description) //Pass in the description that was just built above.
            switch (selection) { //Switch selection is created for sub menu. 
                case "1" :
                    this.createPlayer();
                    break;
                    case "2" :
                        this.deletePlayer();
            }
        }
    }

    deleteTeam() {
        let index = prompt("Enter the index of the team you wish to delete:"); //Prompt allows user to enter index to delete team.
        if (index > -1 && index < this.teams.length) { //Validating user using index to delete desired team.
            this.teams.splice(index, 1); //Element at position index is removed.
        }
    }

    createPlayer() {
        let name = prompt("Enter name for player:"); //Prompt allows user to enter name for player.
        let position = prompt("Enter position for new player:"); //Allows user to enter position for player.
        this.selectedTeam.players.push(new Player(name, position)); /*Instance is created for player and pushed to whatever team 
        is selected.*/
    }

    deletePlayer() {
        let index = prompt("Enter the index of the player you wish to delete:"); 
        if (index > -1 && index < this.selectedTeam.players.length) { //Validating user using index to delete desired player.
            this.selectedTeam.players.splice(index, 1); //Element at position index is removed.
        }
    }
}


let menu  = new Menu(); //Create an instance of our menu for it to work.
menu.start(); //Method that will show everything in menu.