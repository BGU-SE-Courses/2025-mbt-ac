package hellocucumber;


import graphql.Assert;
import io.cucumber.java.en.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class QuizLimitSteps {

    private WebDriver driver;

    @Given("a student submits an answer to a quiz question with {int} words")
    public void a_student_submits_an_answer_to_a_quiz_question_with_words(Integer int1) {
        // Set the path to the ChromeDriver
        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");


        creatingTheQuiz();

        driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        try {
            driver.get("https://sandbox.moodledemo.net/login/index.php?loginredirect=1");

            WebElement usernameField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));

            usernameField.sendKeys("student");
            Thread.sleep(2000);

            WebElement passwordField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("password")));
            passwordField.sendKeys("sandbox24");
            WebElement loginButton = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("loginbtn")));

            loginButton.click();

            // Navigate to "My First Course"
            WebElement myFirstCourse2 = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("My first course")));
            myFirstCourse2.click();

            // Locate and click the "My Quiz" button by its link text
            WebElement myQuizButton = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("My Quiz")));
            myQuizButton.click();

            // Locate the "Attempt quiz" button using its class
            WebElement attemptQuizButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button.btn.btn-primary")));
            attemptQuizButton.click();

            Thread.sleep(2000);

            // Locate the "Question text" iframe using the title attribute
            WebElement questionTextIframe = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("iframe[title='Rich text area']")));

            // Switch to the iframe
            driver.switchTo().frame(questionTextIframe);

            // Locate the text area inside the iframe and input text
            WebElement questionTextField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("body#tinymce")));
            questionTextField.sendKeys("aa bb cc dd ee");

            // Switch back to the main content
            driver.switchTo().defaultContent();

            // Click the "Finish attempt..." button
            WebElement finishAttemptButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("mod_quiz-next-nav")));
            finishAttemptButton.click();

            // Locate the "Submit all and finish" button and click it
            WebElement submitAllAndFinishButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button.btn.btn-primary")));
            submitAllAndFinishButton.click();

            // Locate the "Submit all and finish" button in the modal dialog and click it
            WebElement modalSubmitButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button.btn.btn-primary[data-action='save']")));
            modalSubmitButton.click();


            Thread.sleep(5000);

        }
        catch (Exception e){
            e.printStackTrace();
        }
        finally {
            driver.quit();
        }


    }
    private void creatingTheQuiz(){

        driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        try {
            // Navigate to the Moodle sandbox login page
            driver.get("https://sandbox.moodledemo.net/login/index.php?loginredirect=1");

            // Login to Moodle as a teacher
            WebElement usernameField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));

            usernameField.sendKeys("teacher");
            Thread.sleep(2000);

            WebElement passwordField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("password")));
            passwordField.sendKeys("sandbox24");
            WebElement loginButton = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("loginbtn")));

            loginButton.click();

            // Navigate to "My First Course"
            WebElement myFirstCourse = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("My first course")));
            myFirstCourse.click();

            // Wait for the checkbox to be visible
            WebElement editModeCheckbox = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div.custom-control.custom-switch")));
            editModeCheckbox.click(); // Click the checkbox only if it's not already selected

            // Press the edit button
            WebElement addActivityButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("li[data-id='1'] .section-modchooser-link span.activity-add-text")));
            addActivityButton.click();

            // Locate the Quiz button in the "Add an activity or resource" menu
            WebElement quizButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("a[title='Add a new Quiz']")));
            quizButton.click();

            // Enter "My Quiz" in the name field
            WebElement nameField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("id_name")));
            nameField.sendKeys("My Quiz");

            WebElement saveChangesButton2 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("id_submitbutton")));
            Actions actions = new Actions(driver);
            actions.moveToElement(saveChangesButton2).perform(); // Ensure the button is visible
            saveChangesButton2.click();

            // Click "Add question"
            WebElement addQuestionButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[contains(text(), 'Add question')]")));
            addQuestionButton.click();

            // Wait for the dropdown and click the small blue "Add" button
            WebElement addButton = wait.until(ExpectedConditions.elementToBeClickable(By.className("add-menu")));
            addButton.click();

            // Select "A new question"
            WebElement newQuestionOption = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[contains(text(), 'a new question')]")));
            newQuestionOption.click();

            // Select "Essay"
            WebElement essayOption = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("input[value='essay']")));
            essayOption.click();

            // Click the "Add" button
            WebElement finalAddButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("input[name='submitbutton']")));
            finalAddButton.click();

            // Locate the "Question name" input field and enter the number 1
            WebElement questionNameField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("id_name")));
            questionNameField.sendKeys("1");

            // Locate the "Question text" input field (inside the iframe)
            WebElement questionTextIframe = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("id_questiontext_ifr")));
            driver.switchTo().frame(questionTextIframe); // Switch to the iframe to access the text area
            WebElement questionTextField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("tinymce")));
            questionTextField.sendKeys("to be or not to be?");
            driver.switchTo().defaultContent(); // Switch back to the default content

            // Locate the "Save changes" button and click it
            WebElement saveChangesButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("id_submitbutton")));
            saveChangesButton.click();

            // Add a short wait to ensure the mode is toggled
            Thread.sleep(5000);

        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        finally{
            driver.quit();
        }
    }

    @When("the teacher sets the maximum word limit to {int} words")
    public void the_teacher_sets_the_maximum_word_limit_to_words(Integer int1) {
        driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        try {
            // Navigate to the Moodle sandbox login page
            driver.get("https://sandbox.moodledemo.net/login/index.php?loginredirect=1");

            // Login to Moodle as a teacher
            WebElement usernameField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));

            usernameField.sendKeys("teacher");
            Thread.sleep(2000);

            WebElement passwordField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("password")));
            passwordField.sendKeys("sandbox24");
            WebElement loginButton = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("loginbtn")));

            loginButton.click();

            // Navigate to "My First Course"
            WebElement myFirstCourse = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("My first course")));
            myFirstCourse.click();

            // Locate and click the "My Quiz" button by its link text
            WebElement myQuizButton = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("My Quiz")));
            myQuizButton.click();

            WebElement questionsButton = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Questions")));
            questionsButton.click();

            WebElement specificQuestion = wait.until(ExpectedConditions.elementToBeClickable(By.className("questiontext")));
            specificQuestion.click();

            // Wait for the "Enable" checkbox for maximum word limit to be visible and clickable
            WebElement enableMaxWordLimitCheckbox = wait.until(ExpectedConditions.elementToBeClickable(By.id("id_maxwordenabled")));
            enableMaxWordLimitCheckbox.click(); // Check the box

            // Wait for the maximum word limit input field to be visible
            WebElement maxWordLimitInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("id_maxwordlimit")));
            maxWordLimitInput.clear(); // Clear any existing value
            maxWordLimitInput.sendKeys("3"); // Enter the value "3"

            // Wait for the "Save changes" button to be visible and clickable
            WebElement saveChangesButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("id_submitbutton")));
            saveChangesButton.click();

            Thread.sleep(2000);

        }
        catch (Exception e){
            e.printStackTrace();
        }
        finally {
            driver.quit();
        }


    }

    @Then("the student should see the limit after reattempting the quiz")
    public void the_student_should_see_the_limit_after_reattempting_the_quiz() {

        driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        try{
            driver.get("https://sandbox.moodledemo.net/login/index.php?loginredirect=1");

            WebElement usernameField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));

            usernameField.sendKeys("student");
            Thread.sleep(2000);

            WebElement passwordField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("password")));
            passwordField.sendKeys("sandbox24");
            WebElement loginButton = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("loginbtn")));

            loginButton.click();

            // Navigate to "My First Course"
            WebElement myFirstCourse2 = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("My first course")));
            myFirstCourse2.click();

            // Locate and click the "My Quiz" button by its link text
            WebElement myQuizButton = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("My Quiz")));
            myQuizButton.click();

            // Locate the "Attempt quiz" button using its class
            WebElement attemptQuizButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button.btn.btn-primary")));
            attemptQuizButton.click();

            Thread.sleep(2000);

            // Locate the "Question text" iframe using the title attribute
            WebElement questionTextIframe = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("iframe[title='Rich text area']")));

            // Switch to the iframe
            driver.switchTo().frame(questionTextIframe);

            // Locate the text area inside the iframe and input text
            WebElement questionTextField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("body#tinymce")));
            questionTextField.sendKeys("aa bb cc dd ee");

            // Switch back to the main content
            driver.switchTo().defaultContent();

            // Click the "Finish attempt..." button
            WebElement finishAttemptButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("mod_quiz-next-nav")));
            finishAttemptButton.click();

            // Locate the "Submit all and finish" button and click it
            WebElement submitAllAndFinishButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button.btn.btn-primary")));
            submitAllAndFinishButton.click();

            // Locate the "Submit all and finish" button in the modal dialog and click it
            WebElement modalSubmitButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button.btn.btn-primary[data-action='save']")));
            modalSubmitButton.click();


            Thread.sleep(5000);

            WebElement warningMessage = wait.until(ExpectedConditions.visibilityOfElementLocated(
                    By.xpath("//*[contains(text(), 'Word count: 5, more than the limit of 3 words.')]")
            ));
            Assert.assertTrue(warningMessage.isDisplayed());

        }
        catch (Exception e){
            e.printStackTrace();
        }
        finally {
            driver.quit();
        }

    }
}