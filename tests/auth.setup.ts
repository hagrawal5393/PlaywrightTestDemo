import { test as setup } from '../fixtures/pom/test-options';
import { User } from '../fixtures/api/types-guards';
import { UserSchema } from '../fixtures/api/schemas';

setup('auth user', async ({ apiRequest, homePage, navPage, page }) => {
    await setup.step('auth for user by API', async () => {
        const { status, body } = await apiRequest<User>({
            method: 'POST',
            url: 'api/users/login',
            baseUrl: process.env.API_URL,
            body: {
                user: {
                    email: process.env.EMAIL,
                    password: process.env.PASSWORD,
                },
            },
        });

        if (status !== 200) {
            throw new Error(`Authentication failed with status ${status}`);
        }
        UserSchema.parse(body);

        process.env['ACCESS_TOKEN'] = body.user.token;
    });

    await setup.step('create logged in user session', async () => {
        await homePage.navigateToHomePageGuest();

        await navPage.logIn(process.env.EMAIL!, process.env.PASSWORD!);

        await page.context().storageState({ path: '.auth/userSession.json' });
    });
});
