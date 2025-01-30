# Software Quality Engineering - System Testing
This is a repository for the system-testing assignment of the Software Quality Engineering course at the [Ben-Gurion University](https://in.bgu.ac.il/), Israel.

## Assignment Description
In this assignment, we tested an open-source software called [Moodle](https://sandbox.moodledemo.net/).

In this assignment, we tested an open-source software called Moodle.
Moodle is a widely used Learning Management System that provides educators, administrators, and students with a robust, secure, and customizable environment for online learning.
It includes features like course management, quizzes, messaging, and grading.

## Installation

A guide for Cucumber tests:

In order to run the Cucumber tests, you select the appropriate feature file and run it.
make sure the chromedriver.exe file is in the Cucumber folder.


A guide for Provengo tests:
 -Quick Start Guide

This guide shows how to run Selenium Server and Provengo commands.

 -Prerequisites

- *Java*: Make sure Java is installed. Run java -version to check.
- *Provengo*: Install Provengo as per the [Provengo documentation](https://github.com/ComPWA/Provengo).

 -Steps

 -1. Run Selenium Server

1. Open Command Prompt.
2. Run the following command:

   ```bash
   java -jar 2025-mbt-ac\Selenium\selenium-server-4.28.1.jar standalone
Now Open a new Command Prompt window.

Run the following command:
provengo run helloprovengo



## What we tested

We tested the message board and quiz module functionalities in Moodle. Below are the user stories we focused on:

Message Board Module

User story: A student clicks on a previous message on the 'message board,' and a teacher deletes the same previous message.

Preconditions: A course exists with a teacher and a student, and the teacher has posted two messages (discussions).

Expected outcome: The first message should be deleted and no one in the course should have access to it anymore.

Quiz Module

User story: A student answers a quiz question with X words text, and the teacher tries to reduce the maximum answer words to less than X words.

Preconditions: A quiz exists where a student has already submitted an answer.

Expected outcome: The system should either prevent the teacher from making this change retroactively or ensure that the non submitted quizzes have the limit for the question.


## How we tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a behavior-driven testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory. 

## Results
Update all README.md files (except for d-e, see Section 1). Specifically, replace all $$*TODO*…$$ according to the instructions inside the $$.

## Detected Bugs
We detected the following bugs:

1. Bug: Incorrect word limit display on quiz review page

   1. General description: After a teacher reduces the word limit for a quiz question from 5 words to 3 words, a student attempting the quiz is not informed of the new limitation before submission. However, after submitting the quiz, the review page incorrectly displays a message stating that the answer contains 5 words, even though the limit is now 3 words.

   2. Steps to reproduce:

        Teacher sets a quiz question word limit to 5 words.
        
        A student attempts the quiz and submits an answer with 5 words.
        
        Teacher later reduces the word limit to 3 words.
        
        Student reattempts the quiz but does not see any indication of the new word limit before submission.
        
        After submission, the review page incorrectly states that the question allows 5 words, even though the new limit is 3.

   3. Expected result: The student should be informed of the new word limit before submitting, and the review page should correctly reflect the updated word limit.

   4. Actual result: The system incorrectly displays the previous word limit (5 words) on the review page despite the new restriction (3 words).


