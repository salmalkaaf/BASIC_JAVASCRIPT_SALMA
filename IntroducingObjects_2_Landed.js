function main() {
    //take flight number and its status
    var flightNumber = "SBI 3205"
    var flightStatus = "delayed";
    var flight1= new Flight(flightNumber,flightStatus);
    
    var flight1;
    //assign a flight object to flight1 variable
    
    //output
    console.log('The flight ' + flight1.number + ' has' + flight1.status);
    
}

function Flight(flightNumber, status) {
    //fix the constructor
    this.number = flightNumber;
    this.status = status;
};  

main()