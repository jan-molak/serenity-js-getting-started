import { protractor } from 'protractor';
import * as serenity from 'serenity-js/lib/serenity-cucumber';

export = function () {

    serenity.synchronise(this, protractor.browser.driver.controlFlow());
};
