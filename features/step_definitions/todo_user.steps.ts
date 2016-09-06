export = function todoUserSteps() {

    this.Given(/^.*that (.*) has a todo list containing (.*)$/, (name: string, items: string, callback) => {
        callback(null, 'pending');
    });

    this.When(/^s?he adds (.*?) to (?:his|her) list$/, (itemName: string, callback) => {
        callback(null, 'pending');
    });

    this.Then(/^.* todo list should contain (.*?)$/, (items: string, callback) => {
        callback(null, 'pending');
    });
};
