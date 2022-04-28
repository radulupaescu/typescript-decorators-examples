export const InstanceCounter = (): ClassDecorator => {
    let instances = 0;

    return function (target: any) {
        const className: string = target.prototype.constructor.name;

        target = class extends (target as { new(...args): any; }) {
            constructor(...args) {
                instances++;
                console.log(`We have a new instance of ${className}! This brings us to a total of: ${instances}.`);

                super(...args);
            }
        };

        return target;
    }
};
