export class Level {
    private levels: string[];
    private currentLevel: number;

    constructor() {
        this.levels = [];
        this.currentLevel = 0;
    }

    loadLevel(levelData: string) {
        this.levels.push(levelData);
    }

    getCurrentLevel() {
        return this.levels[this.currentLevel];
    }

    completeLevel() {
        if (this.currentLevel < this.levels.length - 1) {
            this.currentLevel++;
        } else {
            console.log("All levels completed!");
        }
    }

    resetLevel() {
        this.currentLevel = 0;
    }
}