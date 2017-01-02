import { Target } from 'serenity-js/lib/screenplay-protractor';

import { by } from 'protractor/globals';

export class TodoList {
    static What_Needs_To_Be_Done = Target.the('"What needs to be done?" input box')
                                         .located(by.id('new-todo'));

    static Items                  = Target.the('List of Items')
                                          .located(by.repeater('todo in todos'));
}