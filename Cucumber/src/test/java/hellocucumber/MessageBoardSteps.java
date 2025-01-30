package hellocucumber;

import graphql.Assert;
import io.cucumber.java.en.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class MessageBoardSteps {
    private WebDriver driver;

    @Given("the message board contains two discussions")
    public void theMessageBoardContainsTwoDiscussions() {
        // Set the path to the ChromeDriver
        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");

        // Initialize the WebDriver for Chrome
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

            // Click "News forum"
            WebElement newsForum = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("News forum")));
            newsForum.click();

            // Post the first discussion
            postDiscussion(driver, "Test Subject 1", "This is the first test message from Selenium");

            // Post the second discussion
            postDiscussion(driver, "Test Subject 2", "This is the second test message from Selenium");

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Close the browser
            driver.quit();
        }
    }

    // Helper function to post a discussion
    private void postDiscussion(WebDriver driver, String subject, String message) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        try {
            // Locate the "Add discussion topic" button
            WebElement addDiscussionButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("a[href='#collapseAddForm']")));
            addDiscussionButton.click();
            Thread.sleep(2000);


            // Enter the subject
            WebElement subjectField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("id_subject")));
            subjectField.sendKeys(subject);
            Thread.sleep(2000);

            // Switch to the iframe for the message body
            driver.switchTo().frame("id_message_ifr");

            // Enter the message
            WebElement messageBody = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("tinymce")));
            messageBody.sendKeys(message);

            // Switch back to the main page
            driver.switchTo().defaultContent();

            // Click "Post to forum"
            WebElement postToForumButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("id_submitbutton")));
            postToForumButton.click();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @When("the student enters the second message")
    public void theStudentEntersTheSecondMessage() {
        try {
            driver = new ChromeDriver();
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Log in as a student
            driver.get("https://sandbox.moodledemo.net/login/index.php?loginredirect=1");

            WebElement usernameField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));

            usernameField.sendKeys("student");
            Thread.sleep(2000);

            WebElement passwordField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("password")));
            passwordField.sendKeys("sandbox24");
            WebElement loginButton = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("loginbtn")));

            loginButton.click();

            // Navigate to "My First Course"
            WebElement myFirstCourse = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("My first course")));
            myFirstCourse.click();

            // Click "News forum"
            WebElement newsForum = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("News forum")));
            newsForum.click();

            // Click on the second message
            WebElement secondMessage = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Test Subject 2")));
            secondMessage.click();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @When("the student clicks on the previous message")
    public void theStudentClicksOnThePreviousMessage() {
        try {
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Click on the first message
            WebElement previousMessageButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[contains(@aria-label, 'Previous discussion')]")));
            previousMessageButton.click();

            Thread.sleep(2000);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }

    @When("the teacher deletes the previous message")
    public void theTeacherDeletesThePreviousMessage() {
        try {
            driver = new ChromeDriver();
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Log in as a teacher
            driver.get("https://sandbox.moodledemo.net/login/index.php?loginredirect=1");

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

            // Click "News forum"
            WebElement newsForum = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("News forum")));
            newsForum.click();

            // Click on the first message
            WebElement firstMessage = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Test Subject 1")));
            firstMessage.click();

            // Delete the message
            WebElement deleteButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@data-region='post-action' and contains(@href, 'delete')]")));
            deleteButton.click();

            // Delete the message continue
            WebElement continueButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[text()='Continue']")));
            continueButton.click();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Then("the previous message should no longer be visible on the message board")
    public void thePreviousMessageShouldNoLongerBeVisibleOnTheMessageBoard() {
        try {
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            Thread.sleep(3000);

            // Verify that the first message is no longer visible
            boolean isMessagePresent = driver.findElements(By.linkText("Test Subject 1")).size() > 0;
            if (isMessagePresent) {
                System.out.println("Message was not deleted.");
            } else {
                System.out.println("Message was successfully deleted.");
                Assert.assertTrue(!isMessagePresent);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }

    }
}
