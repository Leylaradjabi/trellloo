import { setupColumnCardAddition, setupDropZone } from './column.js';
import { setupDragAndDrop } from './card.js';

export function setupExistingColumns(board) {

    document.querySelectorAll('.column').forEach(column => {
        setupColumnCardAddition(column);  
        setupDropZone(column.querySelector('.column-content'));
    });


    document.querySelectorAll('.card').forEach(card => {
        card.draggable = true;  
        setupDragAndDrop(card);  
    });
}
