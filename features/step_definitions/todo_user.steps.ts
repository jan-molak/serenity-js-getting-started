import { Actor } from 'serenity-js/lib/screenplay';
import { BrowseTheWeb } from 'serenity-js/lib/screenplay-protractor';
import { protractor } from 'protractor/globals';

import { Start } from '../../src/screenplay/tasks/start';
import { AddATodoItem } from '../../src/screenplay/tasks/add_a_todo_item';
import { listOf } from '../../src/text';
import { TodoListItems } from '../../src/screenplay/questions/todo_list_items';
import { expect } from '../../src/expect';

export = function todoUserSteps() {

    let actor: Actor;

    this.Given(/^.*that (.*) has a todo list containing (.*)$/, (name: string, items: string) => {

        actor = Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser));

        return actor.attemptsTo(
            Start.withATodoListContaining(listOf(items))
        );
    });

    this.When(/^s?he adds (.*?) to (?:his|her) list$/, (itemName: string) => {
        return actor.attemptsTo(
            AddATodoItem.called(itemName)
        )
    });

    this.Then(/^.* todo list should contain (.*?)$/, (items: string) => {
        return expect(actor.toSee(TodoListItems.Displayed)).eventually.deep.equal(listOf(items))
    });
};
