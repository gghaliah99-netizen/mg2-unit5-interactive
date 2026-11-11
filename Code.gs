/** Google Apps Script for Mega Goal 2 – Unit 5.
 * Paste this into the Apps Script project attached to the existing results spreadsheet.
 * IMPORTANT: If that project already has doPost(e), do NOT add a second doPost.
 * Instead, add this routing branch at the beginning of the existing doPost:
 *   const d = JSON.parse(e.postData.contents);
 *   if (d.workbook === 'MG2' && String(d.unit) === '5') return saveMG2Unit5_(d);
 * Leave all existing Unit 4 and MG3 routes intact.
 */
function saveMG2Unit5_(d) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('Attach this script to the results spreadsheet.');
  const name = 'MG2 Unit 5 Results';
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(['Submission ID','Date & Time','Student Name','Class','Unit','Section','Score','Total Questions','Percentage','Answers']);
    sh.setFrozenRows(1);
  }
  if (!d.studentName || !d.studentClass || !Array.isArray(d.answers)) throw new Error('Missing required fields');
  const id = String(d.submissionId || Utilities.getUuid());
  const last = sh.getLastRow();
  if (last > 1 && sh.getRange(2,1,last-1,1).getValues().some(r=>String(r[0])===id)) {
    return ContentService.createTextOutput('Duplicate submission ignored');
  }
  const lock=LockService.getScriptLock();lock.waitLock(30000);
  try {
    sh.appendRow([id,new Date(),String(d.studentName),String(d.studentClass),'5','All Sections',Number(d.score)||0,Number(d.totalQuestions)||0,Number(d.percentage)||0,JSON.stringify(d.answers)]);
  } finally {lock.releaseLock();}
  return ContentService.createTextOutput('Saved');
}
