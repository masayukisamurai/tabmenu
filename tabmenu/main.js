{
  //タブ要素とコンテンツを取得
  const tabItems = document.querySelectorAll('.tab li a');
  const contents = document.querySelectorAll('.content');
  const activeContent = document.getElementById('data-id');

  //タブがクリックされたときの処理
  tabItems.forEach((clickItem) => {
    clickItem.addEventListener('click', (event) => {
      event.preventDefault();

      //全てのタブからactiveクラスを取り除く
      tabItems.forEach((item) => {
        item.classList.remove('active');
      });
      //クリックされたタブactiveクラスを追加
      clickItem.classList.add('active');

      //全てのコンテンツからactiveクラスを取り除く
      contents.forEach((content) => {
        content.classList.remove('active');
      });
      //クリックされたタブに対応するコンテンツを表示
      const activeContent = document.getElementById(
        clickItem.getAttribute('data-id')
      );
      activeContent.classList.add('active');
    });
  });
}
