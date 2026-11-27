import { test } from '@playwright/test';
import { RgistrationActionclass } from '../PageActions/RegistrationActions.spec';

test.describe('Registration Test', () => {
    test('should register a new user with valid details', async ({ page }) => {
        const Registrationactions = new RgistrationActionclass(page);
        const email = `gukesh${Math.floor(Math.random() * 100000)}@capgimini.com`;

        await Registrationactions.loginintobrowser("https://www.automationexercise.com/");
        await Registrationactions.waitforseconds(3);

        await Registrationactions.clickonsignin();
        await Registrationactions.waitforseconds(2);

        await Registrationactions.entername("Gukesh");
        await Registrationactions.waitforseconds(1);

        await Registrationactions.enteremail(email);
        await Registrationactions.waitforseconds(1);

        await Registrationactions.clickonsignup();
        await Registrationactions.waitforseconds(2);

        await Registrationactions.setpassword('admin@123');
        await Registrationactions.waitforseconds(1);

        await Registrationactions.setfname('gukesh');
        await Registrationactions.waitforseconds(1);

        await Registrationactions.setlastname('microsoft');
        await Registrationactions.waitforseconds(1);

        await Registrationactions.setaddress('pune');
        await Registrationactions.waitforseconds(1);

        await Registrationactions.setstate('maharashtra');
        await Registrationactions.waitforseconds(1);

        await Registrationactions.setcity('pune');
        await Registrationactions.waitforseconds(1);

        await Registrationactions.setzipcode('411048');
        await Registrationactions.waitforseconds(1);

        await Registrationactions.setmobileno('1234123454');
        await Registrationactions.waitforseconds(1);

        await Registrationactions.clicktocreate();
        await Registrationactions.waitforseconds(2);

        await Registrationactions.registrationverification('Account Created!');
        await Registrationactions.waitforseconds(2);

        await Registrationactions.clickcontinue();
        await Registrationactions.waitforseconds(2);

        await Registrationactions.clickdeleteaccount();
        await Registrationactions.waitforseconds(2);

        await Registrationactions.deleteverification('Account Deleted!');
        await Registrationactions.waitforseconds(2);

        await Registrationactions.closebrowser();
    });
});