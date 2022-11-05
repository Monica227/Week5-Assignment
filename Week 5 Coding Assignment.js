/*•	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
•	Use at least one array.
•	Use at least two classes.
•	Your menu should have the options to create, view, and delete elements.*/

//Single Entity
class  Oeuvre { //Class 1 syntax.
    constructor(title, price) { //Constructor function with two parameters.
        this.title = title;
        this.price = price;
    }
    describe() { //Prints out info about the Oevre (artwork or art piece).
        return `${this.title} costs ${this.price}.`;
    }
}


class Artist { //Class 2 syntax since question asked for two classes to be used. 
    constructor(name) { //Constructor function with one parameter.
        this.name = name; 
        this.oeuvres = []; /*Each time an artist is inputed an array will hold the art pieces for that artist so when a new artist is
       added a blank array will show up. Also array for art pieces was created since question asked for one array to be created.*/
    }

    addOeuvre(oeuvre) {
        if (oeuvre instanceof Oeuvre) { //instanceOf operator checks that art piece (object) belongs to art piece class. 
            this.oeuvre.push(oeuvre); //Pushes the art piece to the art pieces array.
        } else {
            throw new Error(`You can only add an instance of Oeuvre. Arguement is not a Oeuvre: ${oeuvre}`); /*Exception or error
            message that will tell the user what they did wrong.*/
        }
    }

    describe() { //Prints out the info about the artist.
        return `${this.name} has ${this.oeuvres.length} oeuvres.`;
    }
}


class Menu { //Menu that will drive the application and available choices.
    constructor() {
        this.artists = []; //An array and initializes artists because there will be multiple artists in this application.
        this.selectedArtist = null; //Variable for selected artist.
    }

    start() {
        let selection = this.showMainMenuOptions(); /*Top down development approach, Method will return the selecton the user gives
        Shows menu options that the user will select something from.*/
        
        while (selection != 0) { /*Selection variable is used to get user input of what option in the menu has the user selected.
        Also "0" is used for the user to exit */
        switch(selection) { /*Depending on what number the user picks either create, view, delete, or display options will be shown
        as the question requested.*/
            case "1" :
            this.createArtist();
            break;
            case "2" :
            this.viewArtist();
            break;
            case "3" :
            this.deleteArtist();
            case "4" :
            this.displayArtists();
            break;
            default: //If user selects anything else selection will be equal to zero.
                selection = 0;
        }
        selection = this.showMainMenuOptions();
        }
        alert("Goodbye now!") //User selected zero meaning they're outside the loop and will exit from it.
    }

    showMainMenuOptions() {
        return prompt(` 
        0) exit
        1) create new artist
        2) view artist 
        3) delete artist
        4) display all artists
        `)     /*Prompt asks the user for some input and what is being returned is the input that comes back from the prompt*/
    }

    showArtistMenuOptions(artistInfo) { //Takes artist description and prints out information for it.
        return prompt(`
        0) back
        1) create oeuvre
        2) delete oeuvre
        ------------------
        ${artistInfo}
        `)
    }


    displayArtists() {
        let artistString = " "; //Create a string
        for (let i = 0; i < this.artists.length; i++) { //Iterate through artists and get list of all the artists that exist in the menu.
            artistString += i + ") " + this.artists[i].name + "\n"; /*Grab artist for this iteration and will add a new line for artists
             to be numbered off by an index. */
        }

        alert(artistString); //Will allow user to see all the artists.
    }

    createArtist() {
        let name = prompt("Enter name for new artist:"); //Prompts user to give new name for artist.
        this.artists.push(new Artist(name)); //New artist will be pushed to artists array.
    }
    viewArtist() {
        let index = prompt("Enter the index of the artist you wish to view:"); //Insert index of artist user wants to view.
        if (index > -1 && index < this.artists.length) { //Validating user input to avoid errors.
            this.selectedArtist = this.artists[index]; //Validated index and set artist class property to the artist user inserted.
            let description = "Artist Name:" + this.selectedArtist.name + "\n"; //Description for the artist to print out.

            for (let i = 0; i < this.selectedArtist.oeuvres.length; i++) { /*Loop will add description of all the art pieces to the
             artist.*/
                description += i + ") " + this.selectedArtist.oeuvres[i].title
                 + " - " + this.selectedArtist.oeuvres[i].price + "\n"; /*Description will include index printed out, array for art
                 pieces for each artist which will be iterated, i serves as the specific art piece for the iteration and their name 
                 and price will be printed out all on a new line.*/ //Build list of all the artist pieces.
            }

            let selection = this.showArtistMenuOptions(description) //Pass in the description that was just built above.
            switch (selection) { /*Switch selection is created for sub menu. Again depending on which number the user chooses either
            a create or delete option will appear.*/
                case "1" :
                    this.createOeuvre();
                    break;
                    case "2" :
                        this.deleteOeuvre();
            }
        }
    }

    deleteArtist() {
        let index = prompt("Enter the index of the artist you wish to delete:"); //Prompt allows user to enter index to delete artist.
        if (index > -1 && index < this.artists.length) { //Validating user using index to delete desired artist.
            this.artists.splice(index, 1); //Element at position index is removed.
        }
    }

    createOeuvre() {
        let title = prompt("Enter title for oeuvre:"); //Prompt allows user to enter title for art piece.
        let price = prompt("Enter price for new oeuvre:"); //Allows user to enter price for art piece.
        this.selectedArtist.oeuvres.push(new Oeuvre(title, price)); /*Instance is created for art piece and pushed to whatever artist 
        is selected.*/
    }

    deleteOeuvre() {
        let index = prompt("Enter the index of the oeuvre you wish to delete:"); /*Prompt allows user to use index to delete desired
         art piece.*/
        if (index > -1 && index < this.selectedArtist.oeuvres.length) { //Validating user using index to delete desired art piece.
            this.selectedArtist.oeuvres.splice(index, 1); //Element at position index is removed.
        }
    }
}


let menu  = new Menu(); //Create an instance of our menu for it to work.
menu.start(); //Method that will show everything in menu.