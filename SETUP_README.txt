MEGA GOAL 2 – UNIT 5: WORKING 9 TO 5

FILES FOR GITHUB PAGES:
- index.html
- style.css
- app.js
- questions.json

Do not upload Code.gs to GitHub; it belongs in Google Apps Script.

STEP 1: Open your existing results Google Sheet > Extensions > Apps Script.
STEP 2: Create a new file MG2_Unit5.gs and paste Code.gs content into it.
STEP 3: Modify the EXISTING doPost(e) to route payloads where workbook === 'MG2' and unit === '5' to saveMG2Unit5_(d). Do not create a duplicate doPost.
STEP 4: Deploy a NEW VERSION of the web app, with access configured to allow student submissions. Copy the /exec URL.
STEP 5: In app.js set RESULTS_ENDPOINT = 'YOUR_DEPLOYED_EXEC_URL';
STEP 6: Upload the four web files to a NEW GitHub repository, enable Settings > Pages > Deploy from branch > main / root.
STEP 7: Test with a sample student; verify a row appears in the MG2 Unit 5 Results tab. Delete the sample row afterward.

NOTES:
- This app does not claim verified delivery after a no-cors POST. Check the spreadsheet.
- The score is for automatically graded choice/match items only. Writing and reading text are stored for teacher review.
- The reading questions reference a textbook passage not included in the uploaded worksheet; students need the reading text from their book.
- The source worksheet contains a questionable antonym matching item (captive / guard), retained with a review note. Edit before assigning if desired.
- The student answers are saved locally on the same device/browser; they are not backed up to the cloud until submission succeeds.
