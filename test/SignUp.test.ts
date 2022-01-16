import { suite, test } from 'mocha-typescript'
import { description, feature, severity, tag, testCaseId } from 'ts-test-decorators'
import { Severity } from 'allure2-js-commons'
import * as faker from 'faker'
import { assert } from 'chai'

import MainHook from './hooks/Main'

@suite
export default class ConnectTest extends MainHook {
    @testCaseId('{ID}')
    @severity(Severity.BLOCKER)
    @feature('Auth')
    @tag('smoke')
    @description('SignUp with a new user')
    @test
    public async signUp(): Promise<void> {
        const fakeOne = {
            email: faker.internet.email().toLowerCase(),
            password: faker.internet.password(),
            username: faker.internet.userName(),
        }
        const redirectTo = faker.internet.url()

        const { user, session, error } = await this.client.auth.signUp(fakeOne, { redirectTo })
        assert.isNull(error)
    }
}
