'use strict'

const tasklist = ['掃除', '買い物', '散歩'];

function haveTask() {
  console.log('========================');
  console.log('現在持っているタスク一覧');
  console.log('========================');
}

const taskCount = function () {
  for (let i = 0; i < tasklist.length; i++) {
    console.log(`${i} : ${tasklist[i]}`);
  }
}


haveTask();
taskCount();


let question = prompt('タスクを入力してください');

if (question !== null && question !== '' && question !== 'タスクを入力してください') {
  alert('新しいタスクを追加しました');
  tasklist.push(question);

  haveTask();
  taskCount();

  prompt('｢確認、追加、削除、終了｣の4ついずれかを入力してください');
}
