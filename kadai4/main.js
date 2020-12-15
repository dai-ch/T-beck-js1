'use strict'

const tasklist = ['机を片付ける', '牛乳を買う', '散歩する'];
const taskType = ['掃除', '買い物', '運動'];

function haveTask() {
  console.log('========================');
  console.log('現在持っているタスク一覧');
  console.log('========================');
}

const taskCount = function () {
  for (let i = 0; i < tasklist.length; i++) {
    console.log(`${i} : [内容]${tasklist[i]},[ジャンル]${taskType[i]}`);
  }
}

haveTask();
taskCount();

let addTaskList = prompt('タスクを入力してください');

if (addTaskList !== null && addTaskList !== '' && addTaskList !== 'タスクを入力してください') {

  let addTaskType = prompt('ジャンルを入力してください');

  if (addTaskType !== null && addTaskType !== '' && addTaskType !== 'ジャンルを入力してください') {

    alert('新しいタスクを追加しました');
    tasklist.push(addTaskList);
    taskType.push(addTaskType);

    haveTask();
    taskCount();

    prompt('｢確認、追加、削除、終了｣の4ついずれかを入力してください');

  }
}
