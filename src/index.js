const onClickAdd = () => {
  //inputを取得する
  const inputText = document.getElementById('add_text').value;
  document.getElementById('add_text').value = '';

  //create div
  const li = document.createElement('li');
  li.className = 'list-row';

  const div = document.createElement('div');
  div.innerHTML = inputText;

  //liのなかにdivを定義
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById('incomplete_list').appendChild(li);
};

document.getElementById('add-button').addEventListener('click', () => {
  onClickAdd();
});
