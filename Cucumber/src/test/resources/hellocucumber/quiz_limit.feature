Feature: Quiz Word Limit Adjustment

  Scenario: A teacher reduces the maximum word limit for a quiz question after a student submits an answer
    Given a student submits an answer to a quiz question with 5 words
    When the teacher sets the maximum word limit to 3 words
    Then the student should see the limit after reattempting the quiz
