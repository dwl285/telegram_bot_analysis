const tableName = "dan-playground-285.telegram_prod.daily_questions";

const fields = ["date", "user", "question", "response"];

const answers = [
// ["2021-03-30 7:24:07", "1446748464", "Did you play chess yesterday, Monday 29 March?","0"],
// ["2021-03-30 7:24:13", "1446748464", "Did you drink yesterday, Monday 29 March?","0"],
// ["2021-03-30 7:24:20", "1446748464", "Did you play the piano yesterday, Monday 29 March?","0"],
// ["2021-03-30 7:24:27", "1446748464", "Did you exercise yesterday, Monday 29 March?","1"],
// ["2021-03-30 7:24:33", "1446748464", "Did you read yesterday, Monday 29 March?","1"],
// ["2021-03-31 7:34:23", "1446748464", "Did you play chess yesterday, Tuesday 30 March?","0"],
// ["2021-03-31 7:34:29", "1446748464", "Did you drink yesterday, Tuesday 30 March?","1"],
// ["2021-03-31 7:34:35", "1446748464", "Did you play the piano yesterday, Tuesday 30 March?","0"],
// ["2021-03-31 7:34:40", "1446748464", "Did you exercise yesterday, Tuesday 30 March?","1"],
// ["2021-03-31 7:34:47", "1446748464", "Did you read yesterday, Tuesday 30 March?","1"]
];

operate(`operation`, {disabled: true}).queries(answers.map((r, i) => `insert into ${tableName}
(${fields.join(",")}) 
values(${r.map(f => `"${f}"`).join(",")})`))