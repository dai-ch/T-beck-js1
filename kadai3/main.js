'use strict'

const taskList = ['掃除', '買い物', '散歩'];

function haveTask() {
  console.log('========================');
  console.log('現在持っているタスク一覧');
  console.log('========================');
}

const tasks = function () {
  for (let i = 0; i < taskList.length; i++) {
    console.log(`${i} : ${taskList[i]}`);
  }
}


haveTask();
tasks();


let question = prompt('タスクを入力してください');

if (question !== null && question !== '' && question !== 'タスクを入力してください') {
  alert('新しいタスクを追加しました');
  taskList.push(question);

  haveTask();
  tasks();

  prompt('｢確認、追加、削除、終了｣の4ついずれかを入力してください');
}
