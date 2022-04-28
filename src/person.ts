import { InstanceCounter, Format, LogAccess, Range, Validate } from './decorators';

@InstanceCounter()
export class Person {
    @Format(/^[a-zA-Z]+$/)
    private name: string;

    @Format(/\d/)
    private age: number;

    @LogAccess()
    getAge(): number {
        return this.age;
    }

    @Validate()
    setAge(@Range(0, 99) age: number) {
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }
}
