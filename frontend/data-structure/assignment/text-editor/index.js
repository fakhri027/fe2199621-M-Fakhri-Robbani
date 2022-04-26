module.exports = class TextEditor {
    constructor() {
        // TODO: answer here
        this.data = [];
        this.top = -1;
        this.undoStack = [];
        this.redoStack = [];
    }

    write(c) {
        // TODO: answer here
        const ch = c.charAt(0);
        this.data.push(ch);
        this.top += 1;
        this.undoStack.push(ch);
    }

    read() {
        // TODO: answer here
        return this.data.join('');
    }

    undo() {
        // TODO: answer here
        if (this.undoStack.length === 0) {
            return;
        }   
        const ch = this.undoStack.pop();
        this.redoStack.push(ch);
        this.top -= 1;
        this.data.pop();
    }
    
    redo() {
        // TODO: answer here
        if (this.redoStack.length === 0) {
            return;
        }   
        const ch = this.redoStack.pop();
        this.undoStack.push(ch);
        this.top += 1;
        this.data.push(ch);
    }
}
