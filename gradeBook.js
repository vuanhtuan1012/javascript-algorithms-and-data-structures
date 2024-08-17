/**
 * @Author: VU Anh Tuan
 * @Date:   2024-08-17 20:29:07
 * @Last Modified by:   VU Anh Tuan
 * @Last Modified time: 2024-08-17 20:54:28
 */

/**
 * Building a Gradebook App
 *
 * Given a list of student's scores and a student's score
 * Generate a message to let the student know the average score, his grade and his status
 */
"use strict";


/**
 * Returns the average score
 *
 * @param {int[]} socres - array of student's scores
 * @returns {float} the average score
 */
function getAverage(socres) {
    let sum = 0;
    for (const score of socres) sum += score;
    return sum / socres.length;
}


/**
 * Returns student's grade of the given student's score
 * @param {int} score - the student's score
 * @returns the student's grade
 */
function getGrade(score) {
    if (score === 100) return "A++";
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}


/**
 * Returns whether the student passes the course or not
 *
 * @param {int} score - the student's score
 * @returns {boolean} - true if the student passed the course, otherwise false
 */
function hasPassing(score) {
    return getGrade(score) !== "F";
}


/**
 * Returns the message sent to student
 *
 * @param {int} studentScore - the student's score
 * @param {int[]} scores - the scores of class
 * @returns {string} - the message sent to student
 */
function generateMessage(studentScore, scores) {
    const avgScore = getAverage(scores);
    const grade = getGrade(studentScore);
    const is_passed = hasPassing(studentScore) ? "passed" : "failed"
    return `Class average: ${avgScore}. Your grade: ${grade}. You ${is_passed} the course.`
}


/**
 * Main function
 */
function main() {
    const scores = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];
    const studentScore = 37;
    console.log(generateMessage(studentScore, scores));
}


main();
