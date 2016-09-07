import { Serenity } from 'serenity-js';
import { Actor, BrowseTheWeb } from 'serenity-js/lib/screenplay-protractor';
import { protractor } from 'protractor/globals';

import { Start } from '../../src/screenplay/tasks/start';
import { AddATodoItem } from '../../src/screenplay/tasks/add_a_todo_item';
import { listOf } from '../../src/text';
import { TodoListItems } from '../../src/screenplay/questions/todo_list_items';
import { expect } from '../../src/expect';

export = function todoUserSteps() {

    let stage = Serenity.callToStageFor({
        actor: (name) => Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser))
    });

    this.Given(/^.*that (.*) has a todo list containing (.*)$/, (name: string, items: string) => {
        return stage.theActorCalled(name).attemptsTo(
            Start.withATodoListContaining(listOf(items))
        );
    });

    this.When(/^s?he adds (.*?) to (?:his|her) list$/, (itemName: string) => {
        return stage.theActorInTheSpotlight().attemptsTo(
            AddATodoItem.called(itemName)
        )
    });

    this.Then(/^.* todo list should contain (.*?)$/, (items: string) => {
        return expect(stage.theActorInTheSpotlight().toSee(TodoListItems.Displayed))
            .eventually.deep.equal(listOf(items))
    });
};
