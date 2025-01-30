Feature: Message Board Interaction
  As a student and teacher
  I want to manage messages on the message board
  So that communication can be moderated effectively

Feature: Managing messages on the message board

  Scenario: A student clicks on a previous message, and a teacher deletes the same message
    Given the message board contains two discussions
    When the student enters the second message
    And the student clicks on the previous message
    And the teacher deletes the previous message
    Then the previous message should no longer be visible on the message board
