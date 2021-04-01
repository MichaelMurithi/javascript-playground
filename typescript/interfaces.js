var manager = {
    firstName: "Duncan",
    lastName: "Wekulo",
    position: "Manager",
    getDetails: function () {
        return this.position + " " + this.firstName + " " + this.lastName;
    }
};
function hire(person) {
    console.log(person.getDetails(), " has been hired");
}
hire(manager); // Manager Duncan Wekulo has been hired
