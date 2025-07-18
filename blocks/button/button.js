function markdownToLink(text) {
  const match = text.match(/\[(.+?)\]\((.+?)\)/);
  if (!match) return null;

  const a = document.createElement('a');
  a.href = match[2];
  a.textContent = match[1];
  a.classList.add('button', 'primary');
  return a;
}

export default function decorate(block) {
  const p = block.querySelector('p');
  if (!p) return;

  const link = markdownToLink(p.textContent.trim());
  if (link) {
    block.innerHTML = '';
    block.appendChild(link);
  }
}

