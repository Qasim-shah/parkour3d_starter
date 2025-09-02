class Player {
    constructor() {
        this.position = { x: 0, y: 0, z: 0 };
        this.velocity = { x: 0, y: 0, z: 0 };
    }

    jump() {
        this.velocity.y += 10; // Adjust jump strength as needed
    }

    move(direction) {
        switch (direction) {
            case 'left':
                this.position.x -= 1; // Adjust movement speed as needed
                break;
            case 'right':
                this.position.x += 1; // Adjust movement speed as needed
                break;
            case 'forward':
                this.position.z -= 1; // Adjust movement speed as needed
                break;
            case 'backward':
                this.position.z += 1; // Adjust movement speed as needed
                break;
        }
    }
}

export default Player;