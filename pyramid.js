/**
 * @Author: VU Anh Tuan
 * @Date:   2024-08-17 16:58:24
 * @Last Modified by:   VU Anh Tuan
 * @Last Modified time: 2024-08-17 20:23:45
 */

/**
 * Building a Pyramid Generator
 *
 * Given a number of rows and a character
 * Generate a pyramid with (2 * nbRows - 1) characters at the base and 1 character at the top
 */
"use strict";

// Global constants
const nbRows = 8;
const character = "#";
const isInverted = false;


/**
 * Pad a row by using space
 *
 * @param {int} rowIndex - the row index
 * @param {int} totalRow - the number of rows
 * @returns {string} the row padded
 */
function padRow(rowIndex, totalRow) {
    const padding = " ".repeat(totalRow - rowIndex);
    const characters = character.repeat(2 * rowIndex - 1);
    return `${padding}${characters}${padding}`;
}


/**
 * Main function
 */
function main() {
    const rows = [];
    for (let i = 1; i <= nbRows; i++) {
        const row = padRow(i, nbRows)
        if (isInverted) rows.unshift(row);
        else rows.push(row)
    }

    console.log(rows.join("\n"));
}


main()
