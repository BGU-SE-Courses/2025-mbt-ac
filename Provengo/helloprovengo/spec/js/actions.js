// @provengo summon selenium
session = new SeleniumSession("user");

// Initialize the automator thread
bthread("teacher login", function () {

  // Start the session and open the Moodle login page
  session.start("https://sandbox.moodledemo.net/login/index.php");

  // Ensure the elements are correctly referenced using XPath or CSS selectors
  session.writeText("//input[@id='username']", "teacher"); // Type username into the username field
  session.writeText("//input[@id='password']", "sandbox24"); // Type password into the password field

  // Click the login button
  session.click("//button[@id='loginbtn']");

  // Wait until the "My courses" link is visible
  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/my/courses.php' and contains(text(), 'My courses')]", 5000);

  // Click on the "My courses" link once it is visible
  session.click("//a[@href='https://sandbox.moodledemo.net/my/courses.php' and contains(text(), 'My courses')]");

  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/course/view.php?id=2']", 5000);
  session.click("//a[@href='https://sandbox.moodledemo.net/course/view.php?id=2']");

  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/mod/forum/view.php?id=1']", 5000);
  session.click("//a[@href='https://sandbox.moodledemo.net/mod/forum/view.php?id=1']");

  // Wait for the "Create a new discussion" button to be clickable before clicking it
  session.waitForClickability("//a[@class='btn btn-primary']", 5000);
  session.click("/html/body/div[3]/div[4]/div/div[3]/div/section/div[2]/div[1]/div/div[2]/a");

  session.waitForVisibility("//input[@id='id_subject']", 5000);

  // Fill the input field with value "yair"
  session.writeText("//input[@id='id_subject']", "yair");

  // Switch to the iframe and access the body content
  session.runCode([], a);
  session.click("//input[@id='id_submitbutton']");

  // Wait until the "Create a new discussion" button is clickable again
  session.waitForClickability("//a[@class='btn btn-primary']", 5000);
  session.click("/html/body/div[3]/div[4]/div/div[3]/div/section/div[2]/div[1]/div/div[2]/a");

  session.waitForVisibility("//input[@id='id_subject']", 5000);

  // Fill the input field with value "yair2"
  session.writeText("//input[@id='id_subject']", "yair2");

  // Switch to the iframe and access the body content again
  session.runCode([], b);
  session.click("//input[@id='id_submitbutton']");

  // Close the session after the actions are performed
  session.close();

  session = new SeleniumSession("student");
  session.start("https://sandbox.moodledemo.net/login/index.php");
  session.writeText("//input[@id='username']", "student"); // Type username into the username field
  session.writeText("//input[@id='password']", "sandbox24"); // Type password into the password field

  // Click the login button
  session.click("//button[@id='loginbtn']");

  // Wait until the "My courses" link is visible
  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/my/courses.php']", 10000);

  // Click on the "My courses" link once it is visible
  session.click("//a[@href='https://sandbox.moodledemo.net/my/courses.php']");

  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/course/view.php?id=2']", 5000);
  session.click("//a[@href='https://sandbox.moodledemo.net/course/view.php?id=2']");

  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/mod/forum/view.php?id=1']", 5000);
  session.click("/html/body/div[2]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div/div[2]/ul/li[1]/div/div[2]/div[2]/div/div/a");

  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/mod/forum/discuss.php?d=2']", 5000);
  session.click("//a[@href='https://sandbox.moodledemo.net/mod/forum/discuss.php?d=2']");

  // Wait for the "◄ yair" link to be visible and click it
  session.waitForVisibility("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div/div[1]/ul/li/a", 5000);
  session.click("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div/div[1]/ul/li/a");

  session.waitForVisibility("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div/article/div[1]/div/div/div[2]/div[1]", 5000);

  // Log the result
  session.close();
  session.start("https://sandbox.moodledemo.net/login/index.php");

  session.writeText("//input[@id='username']", "teacher"); // Type username into the username field
  session.writeText("//input[@id='password']", "sandbox24"); // Type password into the password field

  // Click the login button
  session.click("//button[@id='loginbtn']");

  // Wait until the "My courses" link is visible
  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/my/courses.php' and contains(text(), 'My courses')]", 5000);

  // Click on the "My courses" link once it is visible
  session.click("//a[@href='https://sandbox.moodledemo.net/my/courses.php' and contains(text(), 'My courses')]");

  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/course/view.php?id=2']", 5000);
  session.click("//a[@href='https://sandbox.moodledemo.net/course/view.php?id=2']");

  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/mod/forum/view.php?id=1']", 5000);
  session.click("//a[@href='https://sandbox.moodledemo.net/mod/forum/view.php?id=1']");
  session.waitForClickability("/html/body/div[3]/div[4]/div/div[3]/div/section/div[2]/div[2]/div[3]/div/table/tbody/tr[1]/th/div/div[1]/a")
  session.click("/html/body/div[3]/div[4]/div/div[3]/div/section/div[2]/div[2]/div[3]/div/table/tbody/tr[1]/th/div/div[1]/a");
  // Wait for the "Create a new discussion" button to be clickable before clicking it
 session.waitForClickability("/html/body/div[2]/div[4]/div/div[3]/div/section/div[2]/div/article/div[1]/div/div/div[2]/div[2]/div/a[3]");
  session.click("//html/body/div[2]/div[4]/div/div[3]/div/section/div[2]/div/article/div[1]/div/div/div[2]/div[2]/div/a[3]");
  // Wait for the "Continue" button to be clickable before clicking it
  session.waitForClickability("/html/body/div[2]/div[4]/div/div[3]/div/section/div[2]/div/div/div[3]/div/div[2]/form/button");
session.click("/html/body/div[2]/div[4]/div/div[3]/div/section/div[2]/div/div/div[3]/div/div[2]/form/button")
  session.waitForVisibility("/html/body/div[3]/div[4]/div/div[3]/div/section/span[1]/div", 5000);

  // Assert text in the success alert
  session.assertText(
      "/html/body/div[3]/div[4]/div/div[3]/div/section/span[1]/div",  // Selectors pointing to the target element
      "Discussion deleted",  // Expected value (contains "Discussion deleted")
      [TextAssertions.modifiers.Contains]  // Modifiers to use the "Contains" check
  );
  // Close the session after the actions are performed
  session.close();
});

bthread("scenario 2", function() {
    // Start the session and open the Moodle login page
    session.start("https://sandbox.moodledemo.net/login/index.php");




  // Ensure the elements are correctly referenced using XPath or CSS selectors
  session.writeText("//input[@id='username']", "teacher"); // Type username into the username field
  session.writeText("//input[@id='password']", "sandbox24"); // Type password into the password field

  // Click the login button
  session.click("//button[@id='loginbtn']");

  // Wait until the "My courses" link is visible
  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/my/courses.php' and contains(text(), 'My courses')]", 5000);

  // Click on the "My courses" link once it is visible
  session.click("//a[@href='https://sandbox.moodledemo.net/my/courses.php' and contains(text(), 'My courses')]");

  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/course/view.php?id=2']", 5000);
  session.click("//a[@href='https://sandbox.moodledemo.net/course/view.php?id=2']");

 session.runCode([], function () {
   // Wait for the edit mode checkbox to be visible
   // Wait for the edit mode checkbox to be visible
     var editModeCheckbox = document.querySelector("div.custom-control.custom-switch");

      // If the checkbox is found and is not already checked, click it
      if (editModeCheckbox) {
        var checkboxInput = editModeCheckbox.querySelector('input');
        if (checkboxInput && !checkboxInput.checked) {
          editModeCheckbox.click(); // Click to enable edit mode
          console.log("Clicked the edit mode checkbox.");
        } else {
          console.log("Edit mode is already enabled.");
        }
      } else {
        console.error("Edit mode checkbox not found.");
      }

      // Check if the "Add Activity" button is available
      var addActivityButton = document.querySelector("li[data-id='1'] .section-modchooser-link span.activity-add-text");

      // If the button is found, click it
      if (addActivityButton) {
        addActivityButton.click();
        console.log("Clicked the 'Add Activity' button.");
      } else {
        console.error("'Add Activity' button not found.");
      }

 });

 session.runCode([],function(){
  setTimeout(function() {
     // Change the browser's location to the new URL
     window.location.href = "https://sandbox.moodledemo.net/course/modedit.php?add=quiz&section=0&course=2";
     console.log("Navigating to the quiz creation page...");
   }, 5000);
 })
  session.waitForVisibility("/html/body/div[3]/div[4]/div/div[3]/div/section/div/form/fieldset[1]/div[2]/div[1]/div[2]/input", 5000);
  session.writeText("/html/body/div[3]/div[4]/div/div[3]/div/section/div/form/fieldset[1]/div[2]/div[1]/div[2]/input", "Test Quiz");
  session.click("/html/body/div[3]/div[4]/div/div[3]/div/section/div/form/div[4]/div[2]/div[1]/div/div[1]/span/input")

  session.runCode([],function(){

  setTimeout(function () {
      let quizLinks = document.querySelectorAll("a.aalink.stretched-link");
      for (let link of quizLinks) {
          let span = link.querySelector("span.instancename");
          if (span && span.textContent.trim() === "Test Quiz") {
              link.click();
              console.log("Clicked Test Quiz link");
              break;
          }
      }
  }, 3000);

  setTimeout(function () {
      let addQuestionButton = document.querySelector('a.btn.btn-secondary[href*="mod/quiz/edit.php?cmid="]');
      if (addQuestionButton) {
          addQuestionButton.click();
          console.log("Clicked Add Question button");
      } else {
          console.log("Add Question button not found");
      }
  }, 6000);

  setTimeout(function () {
      let addButton = document.querySelector('span.add-menu');
      if (addButton) {
          addButton.click();
          console.log("Clicked Add button");
      } else {
          console.log("Add button not found");
      }
  }, 9000);

  setTimeout(function () {
      let newQuestionButton = document.querySelector('span.menu-action-text');
      if (newQuestionButton) {
          newQuestionButton.click();
          console.log("Clicked a new question button");
      } else {
          console.log("New question button not found");
      }
  }, 12000);

  setTimeout(function () {
      let essayRadio = document.querySelector('input[type="radio"][name="qtype"][value="essay"]');
      if (essayRadio) {
          essayRadio.click();
          console.log("Selected Essay question type");
      } else {
          console.log("Essay question type radio button not found");
      }
  }, 15000);

  setTimeout(function () {
      let finalAddButton = document.querySelector('input[type="submit"].submitbutton.btn.btn-primary');
      if (finalAddButton) {
          finalAddButton.click();
          console.log("Clicked final Add button");
      } else {
          console.log("Final Add button not found");
      }
  }, 18000);

setTimeout(function () {
    let quizLinks = document.querySelectorAll("a.aalink.stretched-link");
    for (let link of quizLinks) {
        let span = link.querySelector("span.instancename");
        if (span && span.textContent.trim() === "Test Quiz") {
            link.click();
            console.log("Clicked Test Quiz link");
            break;
        }
    }
}, 3000);

setTimeout(function () {
    let addQuestionButton = document.querySelector('a.btn.btn-secondary[href*="mod/quiz/edit.php?cmid="]');
    if (addQuestionButton) {
        addQuestionButton.click();
        console.log("Clicked Add Question button");
    } else {
        console.log("Add Question button not found");
    }
}, 6000);

setTimeout(function () {
    let addButton = document.querySelector('span.add-menu');
    if (addButton) {
        addButton.click();
        console.log("Clicked Add button");
    } else {
        console.log("Add button not found");
    }
}, 9000);

setTimeout(function () {
    let newQuestionButton = document.querySelector('span.menu-action-text');
    if (newQuestionButton) {
        newQuestionButton.click();
        console.log("Clicked a new question button");
    } else {
        console.log("New question button not found");
    }
}, 12000);

setTimeout(function () {
    let essayRadio = document.querySelector('input[type="radio"][name="qtype"][value="essay"]');
    if (essayRadio) {
        essayRadio.click();
        console.log("Selected Essay question type");
    } else {
        console.log("Essay question type radio button not found");
    }
}, 15000);

setTimeout(function () {
    let finalAddButton = document.querySelector('input[type="submit"].submitbutton.btn.btn-primary');
    if (finalAddButton) {
        finalAddButton.click();
        console.log("Clicked final Add button");
    } else {
        console.log("Final Add button not found");
    }
}, 18000);

setTimeout(function () {
    let nameInput = document.querySelector('input[name="name"]');
    if (nameInput) {
        nameInput.value = "Test Q";
        console.log("Entered 'Test Q' in the name field");
    } else {
        console.log("Name input field not found");
    }
}, 21000);

setTimeout(function () {
    let iframe = document.getElementById("id_questiontext_ifr");
    if (iframe) {
        let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        let body = iframeDoc.querySelector("body#tinymce");
        if (body) {
            body.innerHTML = "aaaa.";
            console.log("Entered 'aaaa.' in the question text field");
        } else {
            console.log("Question text field not found inside iframe");
        }
    } else {
        console.log("Iframe for question text not found");
    }
}, 24000);

setTimeout(function () {
    let checkbox = document.evaluate('/html/body/div[5]/div[5]/div/div[3]/div/section/div[2]/form/fieldset[2]/div[2]/div[5]/div[2]/fieldset/div/label/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (checkbox) {
        checkbox.click();
        console.log("Clicked required checkbox");
    } else {
        console.log("Required checkbox not found");
    }
}, 27000);

setTimeout(function () {
    let maxWordLimitInput = document.querySelector('input[name="maxwordlimit"]');
    if (maxWordLimitInput) {
        maxWordLimitInput.value = "10";
        console.log("Entered '10' in the max word limit field");
    } else {
        console.log("Max word limit input field not found");
    }
}, 30000);

setTimeout(function () {
    let saveButton = document.querySelector('input[type="submit"][name="submitbutton"]');
    if (saveButton) {
        saveButton.click();
        console.log("Clicked Save changes button");
    } else {
        console.log("Save changes button not found");
    }
}, 33000);

      // Change the browser's location to the new URL

  });
  /*session.waitForVisibility("/html/body/div[3]/div[4]/div/div[3]/div/section/div[2]/form/fieldset[1]/div[2]/div[2]/div[2]/input", 5000);
 session.writeText("/html/body/div[3]/div[4]/div/div[3]/div/section/div[2]/form/fieldset[1]/div[2]/div[2]/div[2]/input","q")
 session.runCode([],content)
 session.click("/html/body/div[3]/div[4]/div/div[3]/div/section/div[2]/form/fieldset[2]/div[2]/div[5]/div[2]/fieldset/div/label/input")
 session.writeText("/html/body/div[3]/div[4]/div/div[3]/div/section/div[2]/form/fieldset[2]/div[2]/div[5]/div[2]/fieldset/div/div/span/input","10")
 session.click("/html/body/div[3]/div[4]/div/div[3]/div/section/div[2]/form/div[5]/div[2]/div[1]/div/div[1]/span/input")
 */ session.close()
  session = new SeleniumSession("student");
   session.start("https://sandbox.moodledemo.net/login/index.php");
   session.writeText("//input[@id='username']", "student"); // Type username into the username field
   session.writeText("//input[@id='password']", "sandbox24"); // Type password into the password field

   // Click the login button
   session.click("//button[@id='loginbtn']");
   // Wait until the "My courses" link is visible
     session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/my/courses.php' and contains(text(), 'My courses')]", 5000);

     // Click on the "My courses" link once it is visible
     session.click("//a[@href='https://sandbox.moodledemo.net/my/courses.php' and contains(text(), 'My courses')]");

  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/course/view.php?id=2']", 5000);
  session.click("//a[@href='https://sandbox.moodledemo.net/course/view.php?id=2']");

   session.waitForVisibility("/html/body/div[2]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div/div[2]/ul/li[2]/div/div[2]/div[2]/div/div/a", 5000);
   session.click("/html/body/div[2]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div/div[2]/ul/li[2]/div/div[2]/div[2]/div/div/a")
  session.waitForVisibility("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div[1]/div/div/form/button")
  session.click("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div[1]/div/div/form/button")
  session.waitForVisibility("/html/body/div[2]/div[5]/div/div[2]/div/section/div[2]/form/div/div[1]/div[2]/div/div[2]/label/span[2]/input")
  session.writeText("/html/body/div[2]/div[5]/div/div[2]/div/section/div[2]/form/div/div[1]/div[2]/div/div[2]/label/span[2]/input","a b b")

  session.click("/html/body/div[2]/div[5]/div/div[2]/div/section/div[2]/form/div/div[2]/input")
 session = new SeleniumSession("teacher again");
   session.start("https://sandbox.moodledemo.net/login/index.php");
   session.writeText("//input[@id='username']", "teacher"); // Type username into the username field
   session.writeText("//input[@id='password']", "sandbox24"); // Type password into the password field

   // Click the login button
   session.click("//button[@id='loginbtn']");
   // Wait until the "My courses" link is visible
     session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/my/courses.php' and contains(text(), 'My courses')]", 5000);

     // Click on the "My courses" link once it is visible
     session.click("//a[@href='https://sandbox.moodledemo.net/my/courses.php' and contains(text(), 'My courses')]");

  session.waitForVisibility("//a[@href='https://sandbox.moodledemo.net/course/view.php?id=2']", 5000);
  session.click("//a[@href='https://sandbox.moodledemo.net/course/view.php?id=2']");
  session.waitForVisibility("/html/body/div[2]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div/div[2]/ul/li[6]/div/div[2]/div[2]/div/div/a", 5000);
 session.click("/html/body/div[2]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div/div[2]/ul/li[6]/div/div[2]/div[2]/div/div/a")
 session.waitForVisibility("/html/body/div[2]/div[4]/div/div[2]/nav/ul/li[3]/a")
 session.click("/html/body/div[2]/div[4]/div/div[2]/nav/ul/li[3]/a")
 session.waitForVisibility("/html/body/div[4]/div[4]/div/div[3]/div/section/div[2]/div[2]/ul/li/div/ul/li[2]/div/div/div[2]/a/span/span[2]")
 session.click("/html/body/div[4]/div[4]/div/div[3]/div/section/div[2]/div[2]/ul/li/div/ul/li[2]/div/div/div[2]/a/span/span[2]")
  session.waitForVisibility("/html/body/div[3]/div[4]/div/div[3]/div/section/div[2]/form/fieldset[2]/div[2]/div[5]/div[2]/fieldset/div/div/span/input")
  session.writeText("/html/body/div[3]/div[4]/div/div[3]/div/section/div[2]/form/fieldset[2]/div[2]/div[5]/div[2]/fieldset/div/div/span/input","2")
  session.click("/html/body/div[3]/div[4]/div/div[3]/div/section/div[2]/form/div[4]/div[2]/div[1]/div/div[1]/span/input")
  session.close()
});
// Function to handle iframe interaction for a
function a() {
  // Accessing the iframe by ID
  let iframe = document.getElementById('id_message_ifr');

  if (iframe && iframe.contentDocument) {
    // Accessing the body of the iframe
    let iframeBody = iframe.contentDocument.body;

    // Writing the string 't' to the iframe's body
    iframeBody.innerHTML = 'message 1';
  } else {
    console.error('Iframe not found or contentDocument is not accessible.');
  }
}

function b() {
  // Accessing the iframe by ID
  let iframe = document.getElementById('id_message_ifr');

  if (iframe && iframe.contentDocument) {
    // Accessing the body of the iframe
    let iframeBody = iframe.contentDocument.body;

    // Writing the string 't' to the iframe's body
    iframeBody.innerHTML = 'message 2';
  } else {
    console.error('Iframe not found or contentDocument is not accessible.');
  }
}
function content(){
 // Accessing the iframe by ID
  let iframe = document.getElementById('id_questiontext_ifr');

  if (iframe && iframe.contentDocument) {
    // Accessing the body of the iframe
    let iframeBody = iframe.contentDocument.body;

    // Writing the string 't' to the iframe's body
    iframeBody.innerHTML = 'message 2';
  } else {
    console.error('Iframe not found or contentDocument is not accessible.');
  }
}
