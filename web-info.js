(() => {
  const caption = document.querySelector('.editor-sidebar > .side-caption');
  if (!caption) return;
  const note = document.createElement('p');
  note.className = 'side-caption';
  note.textContent = '草稿只存于当前浏览器，不会上传简历内容。换设备不会同步；完成后记得下载 PDF。电脑端编辑体验更佳。';
  note.style.cssText = 'padding:10px 12px;border:1px solid #dce6df;border-radius:8px;background:#f5f8f5;font-size:11px;line-height:1.7';
  caption.after(note);
})();
