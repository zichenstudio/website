document.querySelector('footer').innerHTML = '<hr>' +
    '<a href="#" id="hitokoto_text" target="_blank">:D 获取中...（由一言提供支持）</a><br>' +
    '技术支持：imoutopia | 文案：三哥 | 网站托管：Github | 网站部署：Netlify | 图床：sm.ms<br>' +
    '向上箭头：<a href="https://www.iconfinder.com/icons/211648/up_chevron_icon">ICONFINDER</a><br>' +
    'Copyright (c) 2019-2024 ZiChenStudio Official';
document.querySelector('article:last-child').innerHTML += '<br><br><br><br><br><br><br><br>';
const asideArticle = document.querySelector('aside article:last-child');
if (asideArticle) {
  asideArticle.innerHTML += '<br><br><br><br><br><br><br><br>';
}
