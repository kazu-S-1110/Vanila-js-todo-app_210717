const onClickAdd = () => {
  //inputを取得する
  const inputText = document.getElementById('add_text').value;
  document.getElementById('add_text').value = '';

  //create div
  const li = document.createElement('li');
  li.className = 'list-row';

  const div = document.createElement('div');
  div.innerHTML = inputText;

  const completeButton = document.createElement('button');
  completeButton.innerText = 'Finish';
  completeButton.addEventListener('click', () => {
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    deleteFromIncompleteList(completeButton.parentNode);
    addTarget.textContent = null;
    const div = document.createElement('div');
    div.innerText = text;
    const backButton = document.createElement('button');
    backButton.innerText = 'Back';

    addTarget.appendChild(div);
    addTarget.appendChild(backButton);
    document.getElementById('complete_list').appendChild(addTarget);
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    //親のliを削除する
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //liのなかにdivを定義
  li.appendChild(div);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById('incomplete_list').appendChild(li);
};

document.getElementById('add-button').addEventListener('click', () => {
  onClickAdd();
});

const deleteButtonList = document.getElementsByClassName('delete_task');
for (let i = 0; i < deleteButtonList.length; i++) {
  const deleteButtonTag = deleteButtonList[i];
  deleteButtonTag.addEventListener('click', () => {
    deleteFromIncompleteList(deleteButtonTag.parentNode);
  });
}

const finButtonList = document.getElementsByClassName('finish_task');
for (let i = 0; i < finButtonList.length; i++) {
  const finButtonTag = finButtonList[i];
  finButtonTag.addEventListener('click', () => {
    deleteFromIncompleteList(finButtonTag.parentNode);
    addTargetDef = finButtonTag.parentNode;
    const textDef = addTargetDef.firstElementChild.innerText;
    addTargetDef.textContent = null;
    const div = document.createElement('div');
    div.innerText = textDef;
    const backButton = document.createElement('button');
    backButton.innerText = 'Back';
    addTargetDef.appendChild(div);
    addTargetDef.appendChild(backButton);
    document.getElementById('complete_list').appendChild(addTargetDef);
  });
}

//削除する部分を共通化
const deleteFromIncompleteList = (target) => {
  document.getElementById('incomplete_list').removeChild(target);
};
