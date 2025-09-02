export class Controls {
    private keys: { [key: string]: boolean } = {};

    constructor() {
        this.init();
    }

    private init() {
        window.addEventListener('keydown', (event) => {
            this.keys[event.code] = true;
        });

        window.addEventListener('keyup', (event) => {
            this.keys[event.code] = false;
        });
    }

    public isKeyPressed(key: string): boolean {
        return this.keys[key] || false;
    }
}