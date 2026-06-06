/* BallotLens — VoteView loyalty scraper
 *
 * HOW TO USE (desktop Chrome, Edge, Firefox or Safari):
 *  1. Open the member's VoteView page, e.g. https://voteview.com/person/22132/nancy-mace
 *  2. Click the "Attendance and Loyalty" link/section so the table is on screen.
 *  3. Open the browser console (Cmd/Ctrl+Shift+J, or Develop > Show JavaScript Console in Safari).
 *  4. Paste the ONE-LINER below, press Enter. It prints JSON and copies it to your clipboard.
 *  5. Paste the careerAvg value into loyalty.json as "careerPct", and set "approx": false.
 *
 * Note: "careerAvg" is a simple average of the per-Congress loyalty percentages shown.
 * It is a close proxy, not a vote-weighted lifetime figure. Good enough for the bar.
 */

/* ===== ONE-LINER (copy this whole line) ===== */
(function(){var ts=[].slice.call(document.querySelectorAll('table'));var t=null;for(var i=0;i<ts.length;i++){if(/loyal/i.test(ts[i].innerText)){t=ts[i];break;}}if(!t){console.warn('Loyalty table not found. Click "Attendance and Loyalty" first, then re-run.');return;}var rows=[].slice.call(t.querySelectorAll('tr')),data=[];rows.forEach(function(r){var cells=[].slice.call(r.querySelectorAll('td,th')).map(function(c){return c.innerText.trim();});var pct=null;for(var j=0;j<cells.length;j++){var mm=cells[j].match(/(\d{1,3}(?:\.\d+)?)\s*%/);if(mm){pct=parseFloat(mm[1]);break;}}if(pct!==null&&pct>0&&pct<=100)data.push({row:cells.join(' | '),loyalty:pct});});var nums=data.map(function(d){return d.loyalty;});var avg=nums.length?Math.round(nums.reduce(function(a,b){return a+b;},0)/nums.length*10)/10:null;var out={member:(document.title||'').replace('Voteview | ','').trim(),careerAvg:avg,rows:data};console.log(JSON.stringify(out,null,2));try{copy(JSON.stringify(out));console.log('Copied to clipboard.');}catch(e){console.log('(could not auto-copy; copy the JSON above manually)');}return out;})();
