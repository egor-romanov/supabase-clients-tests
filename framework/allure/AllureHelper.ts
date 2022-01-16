import { AllureInterface, ContentType, GlobalInfoWriter, Severity } from 'allure2-js-commons'
import debug from 'debug'

const logger = debug('allure')

export class AllureHelper {
    private static allure: AllureInterface = global['allure']

    public static getAllure(): AllureInterface {
        const allure = global['allure'] as AllureInterface

        if (!allure) {
            return new AllureStub()
        }

        return allure
    }

    public static attach(name: string, content: Buffer | string, type: ContentType): void {
        logger.extend(name)('%O', content)
        AllureHelper.getAllure().step(name, () => AllureHelper.getAllure().attachment(name, content, type))
    }

    public static createStep(name: string, body: () => unknown = () => {/* */}): void {
        const wrapper = async () => {
            const res = await body()

            if (res !== undefined) {
                logger.extend(name)('%O', res)
            }
        }

        AllureHelper.getAllure().step(name, wrapper)
    }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
class AllureStub extends AllureInterface {
    addLabel(name: string, value: string): void {
        return
    }

    setDescription(text: string): void {
        return
    }

    setFlaky(): void {
        return
    }

    setKnown(): void {
        return
    }

    setMuted(): void {
        return
    }

    addOwner(owner: string): void {
        return
    }

    setSeverity(severity: Severity): void {
        return
    }

    addIssue(issue: string): void {
        return
    }

    addTag(tag: string): void {
        return
    }

    addTestType(type: string): void {
        return
    }

    addLink(name: string, url: string, type?: string): void {
        return
    }

    step<T>(name: string, body: () => unknown): void {
        console.log(name)
        console.log(body())
        return
    }

    attachment(name: string, content: Buffer | string, type: ContentType): void {
        console.log(name)
        console.log(content)
        return
    }

    addParameter(name: string, value: string): void {
        return
    }

    getGlobalInfoWriter(): GlobalInfoWriter {
        return null
    }
}
