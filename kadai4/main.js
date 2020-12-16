'use strict'

const tasklist = ['机を片付ける', '牛乳を買う', '散歩する'];
const taskType = ['掃除', '買い物', '運動'];

function haveTask() {
  console.log('========================');
  console.log('現在持っているタスク一覧');
  console.log('========================');
}

const tasks = function () {
  for (let i = 0; i < tasklist.length; i++) {
    console.log(`${i} : [内容]${tasklist[i]},[ジャンル]${taskType[i]}`);
  }
}

haveTask();
tasks();

// var items = ['バナナ', 'リンゴ', 'メロン', 'ブドウ'];
// items.forEach(function (value) {
//   console.log(value);
// });

let addTaskList = prompt('タスクを入力してください');

if (addTaskList !== null && addTaskList !== '') {

  let addTaskType = prompt('ジャンルを入力してください');

  if (addTaskType !== null && addTaskType !== '') {

    alert('新しいタスクを追加しました');
    tasklist.push(addTaskList);
    taskType.push(addTaskType);

    haveTask();
    tasks();

    prompt('｢確認、追加、削除、終了｣の4ついずれかを入力してください');

  }
}
